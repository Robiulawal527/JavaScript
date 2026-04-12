class Calculator {
  constructor(previousEl, currentEl) {
    this.previousEl = previousEl;
    this.currentEl = currentEl;
    this.clear();
  }

  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    if (this.currentOperand === '0') return;
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    if (this.currentOperand === '') this.currentOperand = '0';
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand === '0' && number !== '.') {
      this.currentOperand = number.toString();
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') this.compute();
    
    // Map symbols to internal operations if needed, but display handles it
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+': computation = prev + current; break;
      case '-': computation = prev - current; break;
      case '×': computation = prev * current; break;
      case '÷': computation = prev / current; break;
      default: return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentEl.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousEl.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousEl.innerText = '';
    }
  }
}

const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equal');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const previousEl = document.querySelector('.previous-operand');
const currentEl = document.querySelector('.current-operand');

const calculator = new Calculator(previousEl, currentEl);

numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtns.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsBtn.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
});

clearBtn.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
});
