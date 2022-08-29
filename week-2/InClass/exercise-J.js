const array = ["Linda" , "Andrea" , "Karelis"];
function secondMatchesAmy(array) {
  if (array [1] === "Andrea" ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}
console.log (secondMatchesAmy(array));