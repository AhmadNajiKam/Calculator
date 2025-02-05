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
  return a / b;
}

const calcInput = () => {
  let total = 0, operator1, operator2;
}
const operate = (op, a, b) => {
  switch (op) {
    case '+': return Add(a, b);
    case '-': return Sub(a, b);
    case '*': return Mul(a, b);
    case '/': return Div(a, b);
  }
}
