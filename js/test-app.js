(function () {
  const answers = {};
  let currentIdx = 0;
  let timerSec = N2_TEST_META.languageMinutes * 60;
  let timerInterval = null;
  let submitted = false;

  const flat = N2_ALL_QUESTIONS;
  const el = {
    timer: document.getElementById("testTimer"),
    qNum: document.getElementById("qNumber"),
    group: document.getElementById("qGroup"),
    instruction: document.getElementById("qInstruction"),
    passage: document.getElementById("qPassage"),
    text: document.getElementById("qText"),
    choices: document.getElementById("qChoices"),
    nav: document.getElementById("qNavGrid"),
    results: document.getElementById("resultsPanel"),
    scoreText: document.getElementById("scoreText")
  };

  function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  function startTimer() {
    el.timer.textContent = formatTime(timerSec);
    timerInterval = setInterval(() => {
      timerSec--;
      el.timer.textContent = formatTime(timerSec);
      if (timerSec <= 0) {
        clearInterval(timerInterval);
        submitTest(true);
      }
    }, 1000);
  }

  function buildNav() {
    el.nav.innerHTML = "";
    flat.forEach((q, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "btn btn-sm btn-outline-secondary section-nav-item";
      b.textContent = typeof q.id === "number" ? q.id : q.id;
      b.title = q.groupTitle;
      b.addEventListener("click", () => {
        currentIdx = i;
        renderQuestion();
      });
      b.dataset.idx = i;
      el.nav.appendChild(b);
    });
  }

  function updateNav() {
    el.nav.querySelectorAll("button").forEach((btn, i) => {
      const q = flat[i];
      const key = String(q.id);
      btn.classList.toggle("active", i === currentIdx);
      btn.classList.toggle("answered", answers[key] !== undefined);
    });
  }

  function renderQuestion() {
    const q = flat[currentIdx];
    el.qNum.textContent = "Question " + q.id;
    el.group.textContent = q.groupTitle;
    const sec = N2_SECTIONS.find((s) => s.id === q.sectionId);
    el.instruction.textContent =
      N2_SECTIONS.flatMap((s) => s.groups)
        .find((g) => g.title === q.groupTitle)?.instruction || "";

    if (q.passage) {
      el.passage.classList.remove("d-none");
      el.passage.textContent = q.passage;
    } else {
      el.passage.classList.add("d-none");
    }

    el.text.textContent = q.text;
    el.choices.innerHTML = "";

    q.choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn";
      btn.innerHTML = `<strong>${i + 1}.</strong> ${c}`;
      const key = String(q.id);
      if (answers[key] === i) btn.classList.add("selected");
      if (submitted) {
        if (i === q.answer) btn.classList.add("correct");
        else if (answers[key] === i) btn.classList.add("incorrect");
      }
      btn.disabled = submitted;
      btn.addEventListener("click", () => {
        if (submitted) return;
        answers[key] = i;
        renderQuestion();
        updateNav();
        saveProgress();
      });
      el.choices.appendChild(btn);
    });

    updateNav();
  }

  function saveProgress() {
    const data = JLPT.getStore();
    data.n2answers = answers;
    data.n2index = currentIdx;
    JLPT.setStore(data);
  }

  function loadProgress() {
    const data = JLPT.getStore();
    if (data.n2answers) Object.assign(answers, data.n2answers);
    if (typeof data.n2index === "number") currentIdx = data.n2index;
  }

  function submitTest(auto) {
    if (submitted) return;
    submitted = true;
    clearInterval(timerInterval);

    let correct = 0;
    flat.forEach((q) => {
      if (answers[String(q.id)] === q.answer) correct++;
    });

    const pct = Math.round((correct / flat.length) * 100);
    el.results.classList.remove("d-none");
    el.scoreText.innerHTML = `
      <p class="display-6 mb-2">${correct} / ${flat.length}</p>
      <p class="text-muted">${pct}% correct${auto ? " (time up)" : ""}</p>
      <p class="small">JLPT pass threshold varies by section; use this for practice only.</p>
    `;
    renderQuestion();
    document.getElementById("btnSubmit").disabled = true;
  }

  document.getElementById("btnPrevQ").addEventListener("click", () => {
    if (currentIdx > 0) {
      currentIdx--;
      renderQuestion();
    }
  });

  document.getElementById("btnNextQ").addEventListener("click", () => {
    if (currentIdx < flat.length - 1) {
      currentIdx++;
      renderQuestion();
    }
  });

  document.getElementById("btnSubmit").addEventListener("click", () => {
    if (confirm("Submit test and see results?")) submitTest(false);
  });

  document.getElementById("btnReset").addEventListener("click", () => {
    if (!confirm("Clear all answers and restart?")) return;
    Object.keys(answers).forEach((k) => delete answers[k]);
    submitted = false;
    currentIdx = 0;
    timerSec = N2_TEST_META.languageMinutes * 60;
    document.getElementById("btnSubmit").disabled = false;
    el.results.classList.add("d-none");
    const data = JLPT.getStore();
    delete data.n2answers;
    JLPT.setStore(data);
    startTimer();
    renderQuestion();
  });

  loadProgress();
  buildNav();
  renderQuestion();
  startTimer();
})();
