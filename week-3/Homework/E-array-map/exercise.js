// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiple(number){
    return number * 100;
}

let numbers2 = numbers.map(multiple);

console.log(numbers2);