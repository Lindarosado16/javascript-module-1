function exponential(number) {
  return number * number;
}

function isEven (number) {
  return number % 2 === 0;
}

for (let number = 5; number < 20 ; number ++ ){
if(isEven(number)){

  console.log(`The exponential of ${number} is ${exponential (number)}`)
}
}