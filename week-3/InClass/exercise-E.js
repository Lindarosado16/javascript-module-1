//para hacerlo en los a;os actuales "new Date().getFullYear()"
function age(birthYear) {
    return new Date().getFullYear() -birthYear
    
}

birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
let ages = birthYear.map(age)

console.log(ages)