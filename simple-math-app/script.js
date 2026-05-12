const input1 = document.querySelector("#Bir");
const input2 = document.querySelector("#Iki");
const resultDisplay = document.querySelector(".result");

function calculate(op) {
  const val1 = input1.value;
  const val2 = input2.value;

  // Boş xana yoxlaması
  if (val1 === "" || val2 === "") {
    resultDisplay.innerText = "Ədəd daxil edin";
    resultDisplay.style.color = "#e74c3c";
    return;
  }

  const a = Number(val1);
  const b = Number(val2);
  let res;

  switch (op) {
    case "*":
      res = a * b;
      break;
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "/":
      res = b === 0 ? "Bölmək olmur" : (a / b).toFixed(2).replace(/\.00$/, '');
      break;
    default:
      res = 0;
  }

  resultDisplay.innerText = res;
  resultDisplay.style.color = "#333";
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    calculate(btn.dataset.op);
  });
});