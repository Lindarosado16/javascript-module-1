function getAge(birthYear) {
    return new Date().getFullYear() - birthYear
}
function getDrivingStatus(birthYear){
    const age = getAge(birthYear)
    if (age >= 17){
    return `Born in ${birthYear} can drive`;
} else {
    const yearsToDrive = 17- age
    return `Born in ${birthYear} can drive in ${yearsToDrive} years`;
}
}

function printYear(text) {
    console.log(text)
}

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
const drivingStatuses = birthYears.map(getDrivingStatus);
drivingStatuses.forEach(printYear)