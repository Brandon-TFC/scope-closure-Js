//Variables

var a; //declaracion
var b = 'b' //Asignacion y declaracion
b = 'bb' //Reasignando
var a = 'aa' //Redeclaracion de la variable


//Global Scope
var fruit = 'Apple'; //global

function bestFruit(){
    console.log(fruit);
}
bestFruit();

function countries(){
    country = 'Colombia'; // declaracion global 
    console.log(country); 

}
countries();
console.log(country)