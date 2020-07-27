// funcion construcrtora que llena el objeto crado en el loop

function Persona (nome,idade){
    this.nome = nome;
    
    this.idade = idade;
   
}

//array vacio para guardar nuevos datos que se producen con el loop
let resultados = [];



while (true){ 

// aqui se recopilan los datos

   let nome = prompt("coloque seu nome")
   
   let idade = Number (prompt( "coloque sua idade"))
 

  

   // comando para crear nuevo objeto
   let nuevo = new Persona(nome,  idade); 

   //comando para guardar nuevos datos en el array
   resultados.push(nuevo);


   // pregunta para confirmar si el loop continua o para
   let pregunta = prompt ("deseja registrar outro usuario? (s/n)"); 

   //comando para parar el array

    if(pregunta == "n" || pregunta == "N" || pregunta === "não") {
        break;
    }
}

//comparando quien es la persona mas vieja de la lista resultados

function verificarEdad (lista){

    // variables que solo sirven dentro de esta funcion

    let maiorIdade;
    let pessoaMaisVelha;

    //el funcionamiento es el siguiente ; la funcion va a comparar las edades a medida que vayan entrando a la lista y la edad mayor la va a guardar en las variables
    // que están dentro de la funcion

    for (let pessoa of lista){  //todo esto es soo una formula, los nombres pueden ser cualquiera
        if (typeof maiorIdade == "undefined"){
            maiorIdade = pessoa.idade;           //esto es para la primera persona que llegue a la lista
            pessoaMaisVelha = pessoa;
        }
        //ahora esto es para las siguientes personas de la lista


        else{
            if(pessoa.idade > maiorIdade){
                maiorIdade = pessoa.idade;  //aqui se compara una nueva persona con la condicion de la primera persona
                pessoaMaisVelha = pessoa;

            }
        }

        return pessoaMaisVelha 

    }

}
 function mostrarRegistros (lista) {

    console.log ("esses são as pessoas inmortais desta lista")
    lista.forEach (lista =>{
        console.log( `${lista.nome} possui ${lista.idade} anos` )
    })
 }


console.log (mostrarRegistros(resultados))
let velho = verificarEdad(resultados)
console.log (`@ ${velho.nome} é Dracula`)





