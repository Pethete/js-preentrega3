const preciounPaseo = 1800;
const descuentodosPaseos = 0.15;
const descuentotresOmas = 0.25;
const cantidadMaxPorPaseo = 8;
const diasPaseos = ["Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
const horaPaseos = ["12:00 PM", "14:00 PM", "16:00 PM"]

function reservar (){
    if(cantidaddeReservas == 1){
        totalapagar = preciounPaseo * cantidaddeReservas
    }
    else if(cantidaddeReservas == 2){
        totalapagar = (preciounPaseo * cantidaddeReservas) - (preciounPaseo * cantidaddeReservas * descuentodosPaseos)
    }
    else if(cantidaddeReservas >= 3){
        totalapagar = (preciounPaseo * cantidaddeReservas) - (preciounPaseo * cantidaddeReservas * descuentotresOmas)
    }
    }

let nombreIngresado = prompt("Bienvenido al menu de reservas. \n Ingresar nombre:");
let diaSeleccionado = prompt("Por favor selecciona el dia que prefieras, los dias disponible son los siguientes: \n Obs. debes indicar con el numero seleccionado al día. \n1 - " + diasPaseos[0] + ".\n2 - " + diasPaseos[1] + ".\n3 - " + diasPaseos[2] + ".\n4 - " + diasPaseos[3] + ".\n5 - " + diasPaseos[4] + ".\n6 - " + diasPaseos[5] + ".");
let horaSeleccionada = prompt("Por favor selecciona el horario de tu preferencia, los paseos disponibles ese día son: \n Obs. debes indicar con el numero seleccionado al día. \n1 - " + horaPaseos[0] + ". 2 - " + horaPaseos[1] + ". 3 - " + horaPaseos[2] + ".");
let cantidaddeReservas = prompt("Cantidad de paseos:\n Obs. Indique cantidad de pasajes que desea comprar.");
reservar()
alert("Hola " + nombreIngresado + ", quedo realizada tu reserva, la cantidad es de " + cantidaddeReservas + " reserva/s.\n El día " + diasPaseos[diaSeleccionado -1] + " a las " + horaPaseos[horaSeleccionada -1] + ". El total a pagar es de " + totalapagar + ". \n En unos minutos recibiras un mail para concluir el pago.")