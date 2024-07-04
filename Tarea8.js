// Funcion fabrica para crear una cuenta bancaria
function crearCuentaBancaria(saldoInicial) {
    // Propiedad privada
    var saldo = saldoInicial;
    // Método privado para depositar dinero
    function depositar(cantidad) {
      if (cantidad > 0) {
        saldo += cantidad;
      } else {
        console.log("La cantidad a depositar debe ser mayor a cero.");
      }
    }
    // Método privado para retirar dinero
    function retirar(cantidad) {
      if (cantidad > 0 && cantidad <= saldo) {
        saldo -= cantidad;
      } else {
        console.log(
          "La cantidad a retirar debe ser mayor a cero y no exceder el saldo disponible."
        );
      }
    }
    // Retornamos un objeto con métodos públicos
    return {
      consultarSaldo: function () {
        return saldo;
      },
      realizarDeposito: function (cantidad) {
        depositar(cantidad);
      },
      realizarRetiro: function (cantidad) {
        retirar(cantidad);
      },
    };
  }
  
  // Ejemplo de uso
  var miCuenta = crearCuentaBancaria(1000);
  console.log("Saldo inicial: " + miCuenta.consultarSaldo()); // Saldo inicial: 1000
  miCuenta.realizarDeposito(500);
  console.log("Saldo después del depósito: " + miCuenta.consultarSaldo()); // Saldo después del depósito: 1500
  miCuenta.realizarRetiro(200);
  console.log("Saldo después del retiro: " + miCuenta.consultarSaldo()); // Saldo después del retiro: 1300
  // Intento de acceder a métodos privados (no funcionará)
  
  //Como manejar excepciones en JavaScript utilizando try  catch
  try {
    //El codigo dentro de try se ejecuta. Si no hay errores, el bloque catch se omite.
    miCuenta.depositar(100); // Error: miCuenta.depositar is not a function
  } catch (e) {
    //el parámetro e es una referencia al objeto de excepción que fue lanzado
    console.log(e.message); //message es la propiedad del objeto e, contiene una string describiendo el error
  }
  try {
    miCuenta.retirar(100); // Error: miCuenta.retirar is not a function
  } catch (e) {
    console.log(e.message);
  }