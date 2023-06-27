function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana'){
        console.log('Hello', userName) 
    }
}
greeting();
console.log(userName); //No lo detecta ya que esta fuera de la funcion y no es global scope