function getAgeInDays(){ 
    const date = new Date();
    return date.getFullYear(2022); 

}

function calculateBornYear(age){
    return getAgeInDays() - age;

}
function getInfoPerson(name, age) {
    const bornAge = calculateBornYear (age);
    return "Mi nombre es " + name + " y nací en el año " + calculateBornYear (age)
}
const greeting = getInfoPerson("Linda", 26);
console.log(greeting);

console.log(greeting);