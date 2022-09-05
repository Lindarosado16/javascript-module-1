function filterArray(messyArray){
const arrayFiltered = messyArray.filter(data => typeof data ==="string")
    .map(data => data.toUpperCase())
    .map(data => data + "!")
return arrayFiltered
}
const array = [100,"iSMael", 55, 45,"sANyiA", 66,"JaMEs","eLAmIn", 23,"IsMael", 67, 19,"ElaMIN"];
console.log(filterArray(array));