let continuar = "si";
let precioEntrada, nombre, edad, cantidadEntradas, entradaUsuario, montoTotal = 0, importe;

// Solicitar nombre y edad del cliente 
nombre = prompt("Ingresa tu nombre");
edad = prompt("Ingrese su edad:");
edad = Number(edad);

// Verificar si es mayor de edad
if (edad < 18) {
    alert("Solo pueden comprar mayores de edad");
} else {
    do {
        continuar = prompt("¿Desea comprar entradas? si/no").toLowerCase();

        if (continuar === "no") {
            break;
        }

        // Mostramos los precios de las entradas
        console.log("El precio de la platea alta es de: $25.000");
        console.log("El precio de la platea media es de: $28.000");
        console.log("El precio del campo es de: $30.000");
        console.log("El precio del campo vip es de: $50.000");
        console.log("El precio de la platea preferencial es de: $50.000");

        // pedimos el tipo de entrada que quieran comprar
        entradaUsuario = prompt("¿Qué tipo de entrada quiere comprar?").toLowerCase();

        switch (entradaUsuario) {
            case "campo":
                precioEntrada = 30000;
                break;
            case "campo vip":
                precioEntrada = 50000;
                break;
            case "platea preferencial":
                precioEntrada = 50000;
                break;
            case "platea alta":
                precioEntrada = 28000;
                break;
            case "platea media":
                precioEntrada = 25000;
                break;
            default:
                alert("Tipo de entrada no válido");
                continue;
        }

        // preguntamos cuántas entradas quieren comprar
        cantidadEntradas = prompt("¿Cuántas entradas de " + entradaUsuario + " desea comprar?");
        cantidadEntradas = Number(cantidadEntradas);

        // Calculamos el importe y sumamos al monto total
        importe = precioEntrada * cantidadEntradas;
        montoTotal += importe;

        alert("El importe actual es de $" + montoTotal + " pesos");

        // Preguntamos si quieren seguir comprando
        continuar = prompt("¿Desea seguir comprando más entradas? si/no").toLowerCase();
    } while (continuar === "si");

    // Mostamos el monto total y pasamos al pago
    alert("El monto total a pagar es de $" + montoTotal + " pesos. Gracias por su compra.");

    medioPago = prompt("Como desea abonar? debito, credito o efectivo?").toLowerCase()   

    switch(medioPago){
        case "efectivo":
            alert("Usted pagara en efectivo $" + montoTotal + "pesos" )
        case "credito":
            alert("Usted pagara con credito $" + montoTotal + "pesos" )
        case "debito":
            alert("Usted pagara con debito $" + montoTotal + "pesos" )
        }
}



//alert("Hola " + nombre)



