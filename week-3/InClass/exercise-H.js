const names= ["Linda", "Andrea", "Litzy", "Kare", "Luis"];
function nameList (names){
      if (names.find(nombre=> nombre === "Ali")){
    return `Found me!`;
    } else {
        return `Haven't found me :( `
        }
}
console.log(nameList(names));