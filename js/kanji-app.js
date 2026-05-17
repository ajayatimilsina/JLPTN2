(function () {
  const list = KANJI_BY_LEVEL.N4;
  let index = 0;

  const store = JLPT.getStore();
  if (typeof store.kanjiIndex === "number" && store.kanjiIndex < list.length) {
    index = store.kanjiIndex;
  }

  const el = {
    kanji: document.getElementById("kanjiChar"),
    reading: document.getElementById("kanjiReading"),
    en: document.getElementById("meaningEn"),
    ne: document.getElementById("meaningNe"),
    vi: document.getElementById("meaningVi"),
    example: document.getElementById("kanjiExample"),
    exampleNe: document.getElementById("kanjiExampleNe"),
    progress: document.getElementById("kanjiProgress"),
    progressBar: document.getElementById("kanjiProgressBar"),
    counter: document.getElementById("kanjiCounter")
  };

  function render() {
    const k = list[index];
    el.kanji.textContent = k.kanji;
    el.reading.textContent = k.reading;
    el.en.textContent = k.en;
    el.ne.textContent = k.ne;
    el.vi.textContent = k.vi;
    el.example.textContent = k.example;
    el.exampleNe.textContent = k.exampleNe;
    const pct = Math.round(((index + 1) / list.length) * 100);
    el.progress.textContent = `${index + 1} / ${list.length}`;
    el.counter.textContent = `Card ${index + 1} of ${list.length}`;
    el.progressBar.style.width = pct + "%";
    el.progressBar.setAttribute("aria-valuenow", pct);

    const data = JLPT.getStore();
    data.kanjiIndex = index;
    JLPT.setStore(data);
  }

  document.getElementById("btnPrev").addEventListener("click", () => {
    index = (index - 1 + list.length) % list.length;
    render();
  });

  document.getElementById("btnNext").addEventListener("click", () => {
    index = (index + 1) % list.length;
    render();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") document.getElementById("btnNext").click();
    if (e.key === "ArrowLeft") document.getElementById("btnPrev").click();
  });

  render();
})();
