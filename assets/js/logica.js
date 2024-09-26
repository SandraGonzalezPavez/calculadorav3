
let valorActual = '';  // Para almacenar el valor actual
let operador = '';  // Para almacenar el operador actual (+, -, *, /)
let primerValor = null;  // Para almacenar el primer valor antes de la operación



let asignarEventos = () => {
    console.log('eventos asignados');
    document.getElementById('btn7').addEventListener('click', function () { agregarNumero('7'); });
    document.getElementById('btn8').addEventListener('click', function () { agregarNumero('8'); });
    document.getElementById('btn9').addEventListener('click', function () { agregarNumero('9'); });
    document.getElementById('btn4').addEventListener('click', function () { agregarNumero('4'); });
    document.getElementById('btn5').addEventListener('click', function () { agregarNumero('5'); });
    document.getElementById('btn6').addEventListener('click', function () { agregarNumero('6'); });
    document.getElementById('btn1').addEventListener('click', function () { agregarNumero('1'); });
    document.getElementById('btn2').addEventListener('click', function () { agregarNumero('2'); });
    document.getElementById('btn3').addEventListener('click', function () { agregarNumero('3'); });
    document.getElementById('btn0').addEventListener('click', function () { agregarNumero('0'); });
}

document.getElementById('btn+').addEventListener('click', function () { asignarOperador('+'); });
document.getElementById('btn-').addEventListener('click', function () { asignarOperador('-'); });
document.getElementById('btn*').addEventListener('click', function () { asignarOperador('*'); });
document.getElementById('btn/').addEventListener('click', function () { asignarOperador('/'); });

// Igual
document.getElementById('btn=').addEventListener('click', calcularResultado);
// Botón AC (limpiar)
document.getElementById('btnAC').addEventListener('click', limpiarTodo);

// Función para agregar números
function agregarNumero(numero) {
    valorActual += numero;
    mostrarEnPantalla(valorActual);
}

// Función para asignar un operador
function asignarOperador(op) {
    if (valorActual !== '') {
        operador = op;
        primerValor = parseFloat(valorActual);
        valorActual = '';
        mostrarEnPantalla(operador);
    }
}

// Función para calcular el resultado
function calcularResultado() {
    if (primerValor !== null && valorActual !== '') {
        let segundoValor = parseFloat(valorActual);
        let resultado;
        switch (operador) {
            case '+':
                resultado = primerValor + segundoValor;
                break;
            case '-':
                resultado = primerValor - segundoValor;
                break;
            case '*':
                resultado = primerValor * segundoValor;
                break;
            case '/':
                if (segundoValor === 0) {
                    resultado = 'Error';
                } else {
                    resultado = primerValor / segundoValor;
                }
                break;
        }
        mostrarEnPantalla(resultado);
        primerValor = null;
        valorActual = '';
        operador = '';
    }
}

// Función para limpiar la pantalla
function limpiarTodo() {
    valorActual = '';
    primerValor = null;
    operador = '';
    mostrarEnPantalla('0');
}

// Función para mostrar en la pantalla
function mostrarEnPantalla(contenido) {
    console.log("Mostrando en pantalla:", contenido);
    document.getElementById('result').value = contenido;
}

// Iniciar los eventos
asignarEventos();
