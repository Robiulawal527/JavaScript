const colors = ["#ef4444", "#f97316", "#f59e0b", "#84cc16", "#22c55e", "#06b6d4", "#3b82f6", "#6366f1", "#a855f7", "#ec4899"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  const selectedColor = colors[randomNumber];
  
  document.body.style.backgroundColor = selectedColor;
  color.textContent = selectedColor;
  color.style.color = selectedColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
