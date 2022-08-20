const numberOfStudents= 15;
const numberOfMentors= 8;
const total= numberOfStudents + numberOfMentors;

const porcentajeStudents= Math.round ((numberOfStudents/total)*100);
const porcentajeMentors= Math.round ((numberOfMentors/total)*100); 
console.log("Porcentage Students" , porcentajeStudents ,"%");
console.log("Porcentage Mentors" , porcentajeMentors ,"%");