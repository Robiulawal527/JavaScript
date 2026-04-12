const form = document.getElementById('tip-form');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');

const resultsDiv = document.getElementById('results');
const tipAmountEl = document.getElementById('tip-amount');
const totalAmountEl = document.getElementById('total-amount');
const perPersonEl = document.getElementById('per-person');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const bill = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value);
  
  if (isNaN(bill) || bill <= 0) return;
  
  const tipAmount = bill * (tipPercentage / 100);
  const totalAmount = bill + tipAmount;
  const perPerson = totalAmount / people;
  
  tipAmountEl.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`;
  perPersonEl.textContent = `$${perPerson.toFixed(2)}`;
  
  resultsDiv.classList.remove('hidden');
});
