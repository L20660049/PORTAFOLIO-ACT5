// Variable para controlar si la calculadora está en estado de error
let isError = false;

// Función para insertar números y puntos en la pantalla
function inputNumber(number) {
    let display = document.getElementById("display");

    // Si hay un error o "undefined", no permite agregar nada
    if (isError || display.value === "undefined") {
        return;
    }

    let currentValue = display.value;
    let lastChar = currentValue.slice(-1); // Último carácter ingresado

    // Validación para evitar dos puntos decimales en un mismo número
    if (number === '.') {
        // Busca si ya hay un punto en el número actual (después del último operador)
        let lastOperator = Math.max(currentValue.lastIndexOf('+'), currentValue.lastIndexOf('-'), currentValue.lastIndexOf('*'), currentValue.lastIndexOf('/'));
        let currentNumber = currentValue.slice(lastOperator + 1);
        
        // Si ya hay un punto en el número actual, no se añade otro
        if (currentNumber.includes('.')) {
            return;
        }
    }
    
    // Añade el número o el punto
    display.value += number;
}

// Función para insertar operadores (+, -, *, /)
function inputOperator(operator) {
    let display = document.getElementById("display");

    // Si hay un error o "undefined", no permite agregar operadores
    if (isError || display.value === "undefined") {
        return;
    }

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
    isError = false; // Restablece el estado de error
}

// Función para eliminar el último carácter ingresado
function deleteLast() {
    let display = document.getElementById("display");

    // Si hay un error, reinicia la pantalla en lugar de borrar el último carácter
    if (isError || display.value === "undefined") {
        clearDisplay();
        return;
    }

    display.value = display.value.slice(0, -1);
}

// Función para calcular el resultado de la operación
function calculateResult() {
    let display = document.getElementById("display");
    try {
        // Evalúa la expresión matemática
        let result = eval(display.value);

        // Si el resultado es indefinido o NaN, mostrar "Error"
        if (result === undefined || isNaN(result)) {
            throw new Error("Resultado indefinido");
        }

        display.value = result;
        isError = false; // El cálculo fue exitoso, no hay error
    } catch (error) {
        // Si ocurre un error, se muestra el mensaje "Error"
        display.value = "Error";
        isError = true; // Marca la calculadora en estado de error
    }
}
