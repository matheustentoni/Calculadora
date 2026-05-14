const display = document.getElementById("display");

function add(valor){
  display.value += valor;
}

function limpar(){
  display.value = "";
}

function calcular(){
  display.value = eval(display.value);
}