// Función para insertar números en la pantalla
function inputNumber(number) {
  let display = document.getElementById("display");
  display.value += number; // Se añade el número presionado a la pantalla
}

// Función para insertar operadores (+, -, *, /)
function inputOperator(operator) {
  let display = document.getElementById("display");
  let lastChar = display.value.slice(-1); // Captura el último carácter ingresado en la pantalla

  // Evitar que se añadan operadores consecutivos o que un operador sea el primer carácter
  if ("+-*/".includes(lastChar) || display.value === "") {
      display.value = display.value.slice(0, -1) + operator;
  } else {
      display.value += operator;
  }
}

// Función para limpiar la pantalla
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Función para eliminar el último carácter ingresado
function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Función para calcular el resultado de la operación
function calculateResult() {
  let display = document.getElementById("display");
  try {
      // Evalúa la expresión matemática
      display.value = eval(display.value);
  } catch (error) {
      // Si ocurre un error, se muestra el mensaje "Error"
      display.value = "Error";
  }
}
