let count = 0;
const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", function() {
  count++;
  counter.innerHTML = count;
});

decrementButton.addEventListener("click", function() {
  count--;
  counter.innerHTML = count;
}); 

resetButton.addEventListener("click", function() {
  count = 0;
  counter.innerHTML = count;
});

