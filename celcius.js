function celsiusAF(celsius) {
  return (celsius * 9/5) + 32;
}

function celsiusAK(celsius) {
  return celsius + 273.15;
}

function convertirTemp() {
  let valor = prompt("Ingrese el valor en grados Celsius que desea convertir:");

  if (!isNaN(valor)) {
    const celsius = parseFloat(valor);
    const fahrenheit = celsiusAF(celsius);
    const kelvin = celsiusAK(celsius);

    console.log(`${celsius} grados Celsius son equivalentes a ${fahrenheit} grados Fahrenheit.`);
    console.log(`${celsius} grados Celsius son equivalentes a ${kelvin} grados Kelvin.`);
  } else {
    console.log("Ingresa un numero valido .");
    convertirTemp(); 
  }
}

convertirTemp();
  
  