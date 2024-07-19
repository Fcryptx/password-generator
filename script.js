// Modo estricto

'use strict';


// Seleccion de elementos del DOM
const length = document.getElementById("length");
const generar = document.getElementById("generar");
const passwd = document.getElementById("passwd");



// Password generator
const generatePassword = (base, longitud) => {

	let password = "";
	for ( let i = 0; i<longitud; i++ ){
		let rndm = Math.floor(Math.random()* base.length)
		password += base.charAt(rndm);
	}
	return password;
}

const generate = () => {


// Inicialisacion de constantes
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");


// Inicialisacion de variables
let longitud = parseInt(length.value);

let base = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz0123456789#-_@"
const numbers = "01234567899";
const symbols = "!-_@?=/()[]{}";


if (checkbox1.checked) base+=numbers;
if (checkbox2.checked) base+=symbols;

	passwd.innerText = generatePassword(base, longitud);
	passwd.value = generatePassword(base, longitud);
}


// Evento a clickear
window.addEventListener("DOMContentLoaded", () => {
	generar.addEventListener("click", () => {
		generate()
	});
});


// Copiar al portapapeles
document.getElementById("copy").addEventListener('click', function() {

	let textCopy = passwd.innerText;

	let textArea = document.createElement("textarea");
	textArea.value = textCopy;

	document.body.appendChild(textArea);

	textArea.select();
	document.execCommand('copy');
	textArea.style.display = "none";
});
