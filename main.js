let operation = null, accumulator = null, operator = null;
const Add = (a, b) => {
  return a + b;
}

const Sub = (a, b) => {
  return a - b;
}

const Mul = (a, b) => {
  return a * b;
}

const Div = (a, b) => {
  if (b == 0)
    return "Error";
  return a / b;
}
const operate = (op, a, b) => {
  switch (op) {
    case "+": return Add(a, b);
    case "-": return Sub(a, b);
    case "*": return Mul(a, b);
    case "/": return Div(a, b);
  }
}
const pressOnEqual = document.querySelector(".equal");
pressOnEqual.addEventListener('click', () => {
  const screen = document.querySelector(".screen");
  accumulator = operate(operation, accumulator, operator);
  screen.textContent = accumulator;
  if (accumulator === undefined)
    screen.textContent = "Please Enter a Number";
});

const calcInput = () => {
  const ops = document.querySelector(".right");
  ops.childNodes.forEach(element => {
    element.addEventListener("click", () => {
      operation = element.textContent;
    });
  })
}

const populateDisplay = () => {
  const screen = document.querySelector(".screen");
  const buttons = document.querySelector(".left");
  let chosenValue;
  buttons.childNodes.forEach(element => {
    element.addEventListener('click', () => {
      screen.textContent = (!isNaN(Number(element.textContent)) ? Number(element.textContent) : element.textContent === '.' ? element.textContent : null);
      chosenValue = Number(screen.textContent);
      if (element.textContent === 'C') {
        operation = null;
        accumulator = null;
        operator = null;
        chosenValue = null;
      }
      if (operation === null) accumulator = chosenValue;
      else operator = chosenValue;
    });
  });
}
populateDisplay();
calcInput();
