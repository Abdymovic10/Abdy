const loader = document.querySelector("[data-loader]");
window.addEventListener("load", () => {
  window.setTimeout(() => loader?.classList.add("is-hidden"), 1400);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

function playSyntheticHit() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(160, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(52, context.currentTime + 0.1);
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.16, context.currentTime + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.16);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.18);
}

function playFootballSound() {
  const audio = new Audio("public/audio/football-hit.mp3");
  audio.volume = 0.22;
  audio.play().catch(playSyntheticHit);
}

document.querySelectorAll("[data-sound]").forEach((element) => {
  element.addEventListener("mouseenter", playFootballSound);
  element.addEventListener("focus", playFootballSound);
});
