/** Shared utilities for JLPT Study Hub */
const JLPT = {
  storageKey: "jlpt-study-hub",

  getStore() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || "{}");
    } catch {
      return {};
    }
  },

  setStore(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  },

  markNavActive() {
    const page = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === page);
    });
  },

  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  pickRandom(arr, count, exclude) {
    const pool = arr.filter((x) => x !== exclude);
    return this.shuffle(pool).slice(0, count);
  }
};

document.addEventListener("DOMContentLoaded", () => JLPT.markNavActive());
