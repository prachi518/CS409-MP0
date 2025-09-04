/* Your JS here. */
const surpriseBtn = document.getElementById("surpriseBtn");
const card = document.querySelector(".card");
const link = card.querySelector("a");

if (surpriseBtn) {
  const palettes = [
    ["#6d28d9", "#0ea5e9"],
    ["#ef4444", "#f59e0b"],
    ["#10b981", "#3b82f6"],
    ["#f472b6", "#a78bfa"]
  ];

  surpriseBtn.addEventListener("click", () => {
    const [a, b] = palettes[Math.floor(Math.random() * palettes.length)];
    card.style.background = `linear-gradient(180deg, ${a}22, ${b}22), #fff`;
    link.style.background = `linear-gradient(135deg, ${a}, ${b})`;
  });
}