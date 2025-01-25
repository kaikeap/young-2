//let nome = "Gabriel";
//let idade  = "16";
//let time  = "São Paulo";
//
//let pessoa = {
//    nome: "Gabriel",
//    idade: "16",
//    time: "São Paulo",
//    peso: "68 kg",
//};
//
//console.log(`Meu nome é : ${pessoa.nome}`);
//console.log(`Meu nome é : ${pessoa.idade}`);
//console.log(`Meu nome é : ${pessoa.time}`);
//console.log(`Meu nome é : ${pessoa.peso}`);
//





let guerreiro = {
    nome: "Nal do Canal",
    vida: 900,
    ataque: 350,
    defesa: 300,
    arma: "porrete de madeira",
    poçao_magica: "corote",
    corote: "aumenta os atributos em 5x, mas o usuario perde a saniedade",
    porrete_de_madeira: 300,
};

let inimigo = {
    nome: "Tiringa",
    vida: 1000,
    ataque: 200,
    defesa:320,
}


let dano_sofrido_guerreiro = inimigo.ataque - guerreiro.defesa

console.log(guerreiro.vida)
guerreiro.vida -= dano_sofrido_guerreiro
console.log(guerreiro.vida)


let dano_sofrido_inimigo = guerreiro.ataque - inimigo.defesa

console.log(inimigo.vida)
inimigo.vida -= dano_sofrido_inimigo
console.log(inimigo.vida)

while (guerreiro.vida > 0 ){

    guerreiro.vida -= dano_sofrido_guerreiro
    console.log(`O inimigo deu ${dano_sofrido_guerreiro} de dano!`)
    inimigo.vida -= dano_sofrido_inimigo
   
     console.log(`Vida inimigo: ${inimigo.vida}`)
     console.log(`Vida guerreiro: ${guerreiro.vida}`)

     if(inimigo.vida <=0 ){
        console.log("Parabens Nal do Cana!!! pegue sua cerveja!!!")
        Break
     }else if(guerreiro.vida)
}
