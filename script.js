const displayEquacao = document.querySelector(".conta");
const displayPrincipal = document.querySelector(".numb-display");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelectorAll(".clear");
const equal = document.querySelector(".equal");
const operator = document.querySelectorAll(".operador");
const backspace = document.querySelector(".backspace");

let arrayDisplay = [];
function mostrarDisplay(event) {
  let tecla = event.target.innerText;
  if (displayPrincipal.innerText === undefined) {
    displayPrincipal.innerText = "0";
  } else if (displayPrincipal.innerText === "0") {
    displayPrincipal.innerText = "";
  } else if (displayPrincipal.innerText === String(displayResultado)) {
    displayPrincipal.innerText = "";
  } else if (displayPrincipal.innerText === maluco) {
    displayPrincipal.innerText = "";
  }
  displayPrincipal.innerText += tecla;
  return (maluco = "0"), arrayDisplay.push(tecla);
}

numbers.forEach((i) => {
  i.addEventListener("click", mostrarDisplay);
});

clear.forEach((i) => {
  i.addEventListener("click", limparPrincipal);
});

function limparPrincipal() {
  displayPrincipal.innerText = "0";
  displayEquacao.innerText = "";
  arrayDisplay = [];
}

let arrayAfter = [];
let maluco = "";
function operacoes(e) {
  let operadorClicado = e.currentTarget.innerText;
  if (operadorClicado === "X") {
    operadorClicado = "*";
  }
  const equacaoDisplay = displayPrincipal.innerText + operadorClicado;
  displayEquacao.innerText += equacaoDisplay;
  return (
    (maluco = displayPrincipal.innerText),
    (arrayAfter = arrayDisplay),
    (arrayDisplay = [])
  );
}

operator.forEach((i) => {
  i.addEventListener("click", operacoes);
});

let displayResultado = "";
let resultado = "";
function mostrarResultado(e) {
  return (
    (resultado = displayEquacao.innerText += displayPrincipal.innerText),
    (displayResultado = displayPrincipal.innerText = eval(resultado)),
    (displayEquacao.innerText = "")
  );
}

equal.addEventListener("click", mostrarResultado);

function apagarBack(e) {
  arrayDisplay.pop();
  arrayAfter.pop();
  if (displayPrincipal.innerText === String(displayResultado)) {
    (displayPrincipal.innerText = "0"), (arrayDisplay = []);
  } else if (arrayDisplay.length > 0) {
    return (
      (displayPrincipal.innerText = arrayDisplay.join("")), (arrayAfter = [])
    );
  } else if (arrayAfter.length > 0) {
    return (displayPrincipal.innerText = arrayAfter.join(""));
  } else displayPrincipal.innerText = "0";
}

backspace.addEventListener("click", apagarBack);
