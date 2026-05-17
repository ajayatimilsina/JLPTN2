(function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  let level = "N4";
  let score = 0;
  let best = parseInt(localStorage.getItem("jlpt-game-best") || "0", 10);
  let current = null;
  let balls = [];
  let animId = null;
  let countdown = 0;
  let roundTimer = null;

  const hud = {
    score: document.getElementById("scoreVal"),
    best: document.getElementById("bestVal"),
    target: document.getElementById("targetKanji"),
    hint: document.getElementById("gameHint"),
    en: document.getElementById("gameEn"),
    ne: document.getElementById("gameNe"),
    vi: document.getElementById("gameVi"),
    example: document.getElementById("gameExample"),
    status: document.getElementById("gameStatus")
  };

  hud.best.textContent = best;

  function resize() {
    const wrap = canvas.parentElement;
    canvas.width = wrap.clientWidth;
    canvas.height = Math.max(420, wrap.clientHeight || 420);
  }

  window.addEventListener("resize", resize);
  resize();

  function getPool() {
    return KANJI_BY_LEVEL[level] || KANJI_BY_LEVEL.N4;
  }

  function newRound() {
    const pool = getPool();
    current = pool[Math.floor(Math.random() * pool.length)];
    hud.target.textContent = current.kanji;
    hud.en.textContent = current.en;
    hud.ne.textContent = current.ne;
    hud.vi.textContent = current.vi;
    hud.example.textContent = current.example;
    hud.status.textContent = "漢字ボールをクリック！正解で +10点";

    const wrong = JLPT.pickRandom(
      pool.map((k) => k.reading).filter((r) => r !== current.reading),
      3,
      current.reading
    );
    const readings = JLPT.shuffle([current.reading, ...wrong.slice(0, 3)]);

    balls = readings.map((text, i) => ({
      text,
      correct: text === current.reading,
      x: 0,
      y: 0,
      r: 42,
      vx: (Math.random() - 0.5) * 2.2,
      vy: (Math.random() - 0.5) * 2.2,
      hue: [200, 45, 140, 10][i]
    }));

    const w = canvas.width;
    const h = canvas.height;
    balls.forEach((b, i) => {
      b.x = w * (0.2 + i * 0.2);
      b.y = h * (0.35 + Math.random() * 0.3);
    });

    clearInterval(roundTimer);
    countdown = 10;
    roundTimer = setInterval(() => {
      countdown--;
      if (countdown <= 0) {
        clearInterval(roundTimer);
        newRound();
      }
    }, 1000);
  }

  function drawBall(b) {
    const grad = ctx.createRadialGradient(b.x - 10, b.y - 10, 4, b.x, b.y, b.r);
    grad.addColorStop(0, `hsl(${b.hue}, 70%, 65%)`);
    grad.addColorStop(1, `hsl(${b.hue}, 60%, 40%)`);
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 13px 'Noto Sans JP', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const lines = b.text.length > 8 ? [b.text.slice(0, 8), b.text.slice(8)] : [b.text];
    lines.forEach((line, li) => {
      ctx.fillText(line, b.x, b.y + (li - (lines.length - 1) / 2) * 14);
    });
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (countdown > 0) {
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "14px 'Noto Sans JP', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`Next kanji in ${countdown}s… (click to skip)`, canvas.width / 2, 28);
    }
    balls.forEach((b) => {
      b.x += b.vx;
      b.y += b.vy;
      if (b.x - b.r < 0 || b.x + b.r > canvas.width) b.vx *= -1;
      if (b.y - b.r < 40 || b.y + b.r > canvas.height) b.vy *= -1;
      drawBall(b);
    });
    animId = requestAnimationFrame(tick);
  }

  function hitTest(x, y) {
    return balls.find((b) => Math.hypot(b.x - x, b.y - y) <= b.r);
  }

  function onPick(ball) {
    clearInterval(roundTimer);
    if (ball.correct) {
      score += 10;
      hud.score.textContent = score;
      if (score > best) {
        best = score;
        localStorage.setItem("jlpt-game-best", String(best));
        hud.best.textContent = best;
      }
      hud.status.textContent = "正解！ +10";
      hud.status.className = "text-success fw-bold";
    } else {
      score = 0;
      hud.score.textContent = "0";
      hud.status.textContent = "不正解 — スコアリセット";
      hud.status.className = "text-danger fw-bold";
    }
    setTimeout(newRound, 800);
  }

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    const ball = hitTest(x, y);
    if (ball) onPick(ball);
    else if (countdown > 0) {
      clearInterval(roundTimer);
      newRound();
    }
  });

  document.querySelectorAll("[data-level]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-level]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      level = btn.dataset.level;
      hud.hint.textContent = "Target: " + level;
      score = 0;
      hud.score.textContent = "0";
      newRound();
    });
  });

  newRound();
  tick();
})();
