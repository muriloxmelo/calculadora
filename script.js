const displayEquacao = document.querySelector(".conta");
const displayPrincipal = document.querySelector(".numb-display");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelectorAll(".clear");
const equal = document.querySelector(".equal");
const operator = document.querySelectorAll(".operador");

const doido = "0";

function mostrarDisplay(event) {
  const tecla = event.target.innerText;
  if (displayPrincipal.innerText === doido) {
    displayPrincipal.innerText = "";
  } else if (displayPrincipal.innerText === String(displayResultado)) {
    displayPrincipal.innerText = "";
  } else if (displayPrincipal.innerText === maluco) {
    displayPrincipal.innerText = "";
  }
  displayPrincipal.innerText += tecla;
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
}

let maluco = "";
function operacoes(e) {
  let operadorClicado = e.currentTarget.innerText;
  if (operadorClicado === "X") {
    operadorClicado = "*";
  }
  const equacaoDisplay = displayPrincipal.innerText + operadorClicado;
  displayEquacao.innerText += equacaoDisplay;
  return (maluco = displayPrincipal.innerText);
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
