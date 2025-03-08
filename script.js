//variavel

/**
 * tipos de variavel
 * nome = joze
 * avr => pode alterar o valor e ele visivel no scrpti enteiro
 * let => pode alterar o valor e ele visivel so onde esta sendo usado
 * const => nao altera o valor
 * 
 * str = ""
 * int = 1
 * flooat 1.0 
 * boolan = true/false
 */

var nome = "carlos"
console.log(nome)
/**
 * condicionai
 * if verificar uma condiçao (nome == marcos) (10 > 2)
 * else if tem que ter um if antes e tb verificar uma condiçao
 * else so presisa de um if antes
*/

if (nome == "carlos"){
    console.log("que nome comum, melhore!!!")
}
else if(nome === "jonas"){
    console.log("voce faz parte de uma banda ?")
}
else{
    window.alert("nao sabia que esse nome esistia")
}

/**
 * + adiçao
 * - subtraçao
 * / divisao
 * * multplicaço
 * % resto de de divisao 10 % 3 = 1
 */
// operadores racionais
/**
 * > maior que
 * < menor que
 * >= maior igual
 * <= menor igual
 * == igual
 * === igual de tipos de dados de valor 
 * != diferente
 */

var idade = window.prompt("digite seua idade: ")
idade = parseInt(idade)
if (Number.isInteger(idade)){
  
  if (idade == 18){
    console.log("hora de se alistar")
}

    else if (idade > 18){
        console.log("ta ficando velho")
    }
    else if (idade < 18){
        console.log("nao deveria estar aqui volte para escola")
    }

}
else {
    window.alert("idade e so um numero cara")
}

/**
 * ! nao - negaçao
 * and && e - conjuçao
 * or || ou - disjunçao
 */

/**
 * let ano_nacimento = 2012
 * let mes_nacimento = fevereiro
 * let dia_nacimento = 14
 * if(mes_nacimento == "fevereiro"){
 * if (dia_nacimento== "14"){   
 * let idade 2025 - ano_nacimento
 * console.log("parabens hoje e seu dia especial, como e ter${idade}")
 *      }
 *            }
 *
 * */
 const frutas = ["banana", "pera", "maça"]
 console.log(frutas[2])
 
 for (let fruta in frutas){
    console.log(frutas[fruta])
}
frutas.forEach((fruta) => {
  console.log(fruta[frutas])
})