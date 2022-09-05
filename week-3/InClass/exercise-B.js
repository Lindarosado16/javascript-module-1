//Malla
const claseA = [ "Linda", "Graciela", "Andrea", "Karelys"];
const claseB = ["Nathy", "Xio","jacobo", "Fernanda" ];

const totalEstudiantes = claseA.concat(claseB)
console.log(totalEstudiantes.sort());

function verificarPersona(nombre, claseA){
  if(claseA.includes(nombre)){
    return nombre+ " is not at the class with "+ claseA
  }
else{return nombre+ " is at the class with "+claseA}
}
verificarPersona("Andrea", totalEstudiantes)

