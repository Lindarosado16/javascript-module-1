var mentor1 ="Daniel" 
var mentor2 ="Irina" 
var mentor3 ="Mimi" 
var mentor4 ="Rob" 
var mentor5 ="Yohannes" 

function profesores(mentor) {
  const UpperCaseNames = mentor.toUpperCase()
  ;
    return UpperCaseNames 
  ;
}
 /*console.log(profesores(mentor1));
 console.log(profesores(mentor2));
 console.log(profesores(mentor3));
 console.log(profesores(mentor4));
 console.log(profesores(mentor5));*/

 function saludoAGritos(mentor){
     return "HELLO" + " " + profesores(mentor)
 }

 console.log(saludoAGritos(mentor1))
 console.log(saludoAGritos(mentor2))
 console.log(saludoAGritos(mentor3))
 console.log(saludoAGritos(mentor4))
 console.log(saludoAGritos(mentor5))
 