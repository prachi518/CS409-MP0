// Toggle bio when avatar is clicked
const avatar = document.getElementById("avatar");
const bio = document.getElementById("bio");

// Change card color when button is clicked
const card = document.querySelector(".card");
const buttons = document.querySelectorAll(".controls button");

avatar.addEventListener("click", () => {
  bio.classList.toggle("hidden");
  card.classList.toggle("collapsed");
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    card.classList.remove("red", "blue", "green");
    const color = btn.getAttribute("data-color");
    card.classList.add(color);
  });
});