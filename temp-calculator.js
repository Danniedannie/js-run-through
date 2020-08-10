function convert(temp) {
  let celsius = ((temp - 32) * 5) / 9;
  let kelvin = ((temp - 32) * 5) / 9 + 273.15;
  let faehrenheit = temp;
  return {
    Celsius: celsius,
    Kelvin: kelvin,
    Fahrenheit: faehrenheit,
  };
}

let temp = convert(21);

console.log(temp);
