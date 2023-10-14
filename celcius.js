function celsiusAFahren(celsius) {
    return (celsius * 9/5) + 32;
  };
   
  function celsiusAKelvin(celsius) {
    return celsius + 273.15;
  };

  function num(valor) {
    return !isNaN(parseFloat(valor))
  };
 
  function convertirTemp(){
    let input = prompt("ingrese la temperatura en grados celsius que desea convertir: ")
  };


  if (num(input)) {
    const celsius = parseFloat(input);
    const fahrenheit = celsiusAFarehn(celsius);
    const kelvin = celsiusAKelvin(celsius);

    console.log(`${celsius} grados Celsius son equivalentes a ${fahrenheit} grados Fahrenheit.`);
    console.log(`${celsius} grados Celsius son equivalentes a ${kelvin} grados Kelvin.`);
  } else {
    console.log("peeeeeenca ese no es un numero .");
    convertirTemp(); 
  };
  
convertirTemperatura();

  
  