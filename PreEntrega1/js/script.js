const preciounPaseo = 1800;
const descuentodosPaseos = 0.15;
const descuentotresOmas = 0.25;

let nombreIngresado = prompt("Bienvenido al menu de reservas. \n Ingresar nombre:");
let cantidaddeReservas = prompt("Cantidad de paseos:");

if(cantidaddeReservas == 1){
	totalapagar = preciounPaseo * cantidaddeReservas
}
else if(cantidaddeReservas == 2){
    totalapagar = (preciounPaseo * cantidaddeReservas) - (preciounPaseo * cantidaddeReservas * descuentodosPaseos)
}
else if(cantidaddeReservas >= 3){
    totalapagar = (preciounPaseo * cantidaddeReservas) - (preciounPaseo * cantidaddeReservas * descuentotresOmas)
}

alert("Hola " + nombreIngresado + ", quedo realizada tu reserva, la cantidad es de " + cantidaddeReservas + " reserva/s.\n El total a pagar es de " + totalapagar + ". \n En unos minutos recibiras un mail para concluir el pago.")