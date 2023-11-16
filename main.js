function validar() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;
  const expresion_regular = /^\d{1,3}$/;

  if (expresion_regular.test(numero1) && expresion_regular.test(numero2)) {
    calcular();
    document.getElementById("error").textContent = " ";
  } else {
    let mensaje = "Datos Erroneos";
    document.getElementById("error").textContent = mensaje;
    eliminar();
  }
}

function calcular() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;

  if (numero1.length == 1 && numero2.length == 1) {
    pasos1();
  } else if (
    (numero1.length == 1 && numero2.length == 2) ||
    (numero2.length == 1 && numero1.length == 2) ||
    (numero1.length == 2 && numero2.length == 2)
  ) {
    pasos2();
  } else {
    pasos3();
  }
}

function pasos1() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;

  var elementoFinal = document.getElementById("final");
  const operacion = parseInt(numero1) + parseInt(numero2);
  const operacionStr = operacion.toString();
  const primerNumero = parseInt(operacionStr.charAt(0));
  const ultimoNumero = parseInt(operacionStr.charAt(operacionStr.length - 1));

  let procedimiento = " PROCEDIMIENTO:";
  let paso1 = "PASO1";
  let paso2 = "PASO2";
  let paso3 = "PASO3";
  let resultado = "RESULTADO: ";
  let signo = "+";
  let numeros = numero1 + " + " + numero2 + " =";
  let linea = "--------";

  var ocultar = document.getElementById("ocultar");
  var ocultar2 = document.getElementById("ocultar2");
  document.getElementById("procedimiento").textContent = procedimiento;
  document.getElementById("paso1").textContent = paso1;
  document.getElementById("num1").textContent = numero1;
  document.getElementById("signo1").textContent = signo;
  document.getElementById("num2").textContent = numero2;
  document.getElementById("linea1").textContent = linea;
  document.getElementById("resu1").textContent = operacion;
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("numeros").textContent = numeros;
  document.getElementById("final").textContent = operacion;

  ocultar.style.display = "none";
  ocultar2.style.display = "none";
  elementoFinal.style.color = "red";
  elementoFinal.style.border = "1px solid red";
  elementoFinal.style.borderRadius = "25px";
  elementoFinal.style.width = "auto";
  elementoFinal.style.height = "40px";
}

function pasos2() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;
  var elementoFinal = document.getElementById("final");
  const operacion = parseInt(numero1) + parseInt(numero2);
  const operacionStr = operacion.toString();
  const primerNumero = parseInt(operacionStr.charAt(0));
  const ultimoNumero = parseInt(operacionStr.charAt(operacionStr.length - 1));

  let procedimiento = " PROCEDIMIENTO:";
  let paso1 = "PASO1";
  let paso2 = "PASO2";
  let paso3 = "PASO3";
  let resultado = "RESULTADO: ";
  let signo = "+";
  let numeros = numero1 + " + " + numero2 + " =";
  let linea = "--------";

  var ocultar = document.getElementById("ocultar");
  var ocultar2 = document.getElementById("ocultar2");
  document.getElementById("procedimiento").textContent = procedimiento;
  document.getElementById("paso1").textContent = paso1;
  document.getElementById("paso2").textContent = paso2;
  document.getElementById("num1").textContent = numero1;
  document.getElementById("num2").textContent = numero2;
  document.getElementById("nume1").textContent = numero1;
  document.getElementById("nume2").textContent = numero2;
  document.getElementById("signo1").textContent = signo;
  document.getElementById("signo2").textContent = signo;
  document.getElementById("resu1").textContent = ultimoNumero;
  document.getElementById("resu2").textContent = operacion;
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("numeros").textContent = numeros;
  document.getElementById("final").textContent = operacion;
  document.getElementById("linea1").textContent = linea;
  document.getElementById("linea2").textContent = linea;

  ocultar2.style.display = "none";
  ocultar.style.display = "block";
  elementoFinal.style.color = "red";
  elementoFinal.style.border = "1px solid red";
  elementoFinal.style.borderRadius = "25px";
  elementoFinal.style.width = "auto";
  elementoFinal.style.height = "40px";
}

function pasos3() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;
  var elementoFinal = document.getElementById("final");
  const operacion = parseInt(numero1) + parseInt(numero2);
  const operacionStr = operacion.toString();

  let ultimosDosDigitos = operacionStr.slice(-2);
  const ultimoNumero = parseInt(operacionStr.charAt(operacionStr.length - 1));

  let procedimiento = " PROCEDIMIENTO:";
  let paso1 = "PASO1";
  let paso2 = "PASO2";
  let paso3 = "PASO3";
  let resultado = "RESULTADO: ";
  let signo = "+";
  let numeros = numero1 + " + " + numero2 + " =";
  let linea = "--------";

  var ocultar = document.getElementById("ocultar");
  var ocultar2 = document.getElementById("ocultar2");
  document.getElementById("procedimiento").textContent = procedimiento;
  document.getElementById("paso1").textContent = paso1;
  document.getElementById("paso2").textContent = paso2;
  document.getElementById("paso3").textContent = paso3;
  document.getElementById("num1").textContent = numero1;
  document.getElementById("num2").textContent = numero2;
  document.getElementById("nume1").textContent = numero1;
  document.getElementById("nume2").textContent = numero2;
  document.getElementById("nume3").textContent = numero1;
  document.getElementById("nume4").textContent = numero2;
  document.getElementById("signo1").textContent = signo;
  document.getElementById("signo2").textContent = signo;
  document.getElementById("signo3").textContent = signo;
  document.getElementById("resu1").textContent = ultimoNumero;
  document.getElementById("resu2").textContent = ultimosDosDigitos;
  document.getElementById("resu3").textContent = operacion;
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("numeros").textContent = numeros;
  document.getElementById("final").textContent = operacion;
  document.getElementById("linea1").textContent = linea;
  document.getElementById("linea2").textContent = linea;
  document.getElementById("linea3").textContent = linea;

  ocultar2.style.display = "block";
  ocultar.style.display = "block";
  elementoFinal.style.color = "red";
  elementoFinal.style.border = "1px solid red";
  elementoFinal.style.borderRadius = "25px";
  elementoFinal.style.width = "auto";
  elementoFinal.style.height = "40px";
}

function eliminar() {
  var elementoFinal = document.getElementById("final");

  document.getElementById("procedimiento").textContent = " ";
  document.getElementById("paso1").textContent = " ";
  document.getElementById("paso2").textContent = " ";
  document.getElementById("paso3").textContent = " ";
  document.getElementById("num1").textContent = " ";
  document.getElementById("num2").textContent = " ";
  document.getElementById("nume1").textContent = " ";
  document.getElementById("nume2").textContent = " ";
  document.getElementById("nume3").textContent = " ";
  document.getElementById("nume4").textContent = " ";
  document.getElementById("signo1").textContent = " ";
  document.getElementById("signo2").textContent = " ";
  document.getElementById("signo3").textContent = " ";
  document.getElementById("resu1").textContent = " ";
  document.getElementById("resu2").textContent = " ";
  document.getElementById("resu3").textContent = " ";
  document.getElementById("resultado").textContent = " ";
  document.getElementById("numeros").textContent = " ";
  document.getElementById("final").textContent = " ";
  document.getElementById("linea1").textContent = " ";
  document.getElementById("linea2").textContent = " ";
  document.getElementById("linea3").textContent = " ";

  elementoFinal.style.border = "none";
}
