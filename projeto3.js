console.clear();
const prompt = require("prompt-sync")();


//array com os itens a ser ganhos em batalha
let lista =["Faquinha cega maledeta","Espada dos Deuses","Elixir do alcool "];
// variáveis
let diaRegrecivo = 2
let dia = 1
let resposta ;
//objeto
let personagem = 
{
    nome:"Ax Bettler",
    ataque:5,
    vida:3,
//função para ganhos de pontos

statusGanho: function(){
    this.ataque++
    this.vida++
},
//função para perda de pontos

 statusPerda: function(){
 
    this.ataque--
    this.vida--

},
//Possível ver os atributos do personagem como ataque e vida.
caracteristica: function(){
    console.log(`\nStatus do nosso guerreiro: `)
    console.log(`\nNome: ${this.nome}`)
    console.log(`Pontos de ataque: ${this.ataque}`)
    console.log(`Pontos de vida: ${this.vida}`)
   
},// funções para adicionar ou subtrair pontos
menosAtaque: function(){
   this.ataque -=2

},
maisAtaque: function(){
    this.ataque +=2
},
maisVida: function(){
    this.vida++
},
menos1DeVida: function(){
    this.vida --
},


    
};

// objeto inimigo
let deathAdder = {
    nome: "Death Adder",
    vida:3,

    caracteristica2: function(){
        console.log(`\nStatus do Death Adder `)
        console.log(`Pontos de vida: ${this.vida}`)

},
menosUmDeVida: function(){
    this.vida--
}

}

//primeiro bloco de opções 
let bloco1 =
[
    "[0]Ir para o castelo. Leva 6 horas ",
    "[1]lutar contra os invasores. Dura 2 horas ",
    "[2]recuperar Vida. Dura 4 horas ",
];
//segundo bloco de opções
let bloco2 = [
    "[0]Unir forças com Death Adder ",
    "[1]lutar contra o Death Adder. Dura 2 horas ",
    "[2]recuperar Vida. Dura 4 horas ",

]


//finaliza o jogo caso o jogador decida se juntar ao inimigo.
function finalizarJogo(){
    
    return true
}



fimDeJogo = () =>{
    console.log(`Os dias acabaram ${personagem.nome} falhou! `)
    return true
}


//caso seus pontos de vida chegue a zero
dead = () =>{
    console.log("Você foi derrotado GAME OVER! ")
    return true
}


//Sorteios dos itens que podem ser ganhos nas batalhas
function listaAleatoria(){
let pc2 = Math.ceil(Math.random()*6)
    if(pc2 == 1){
        console.log(`Você acaba de ganhar ${lista[0]} - 2 de ataque`)
        personagem.menosAtaque()
       // personagem.caracteristica()
    }else if(pc2 == 2){
        console.log(`Você acaba de ganhar ${lista[1]} + 2 de ataque`)
        personagem.maisAtaque()
       // personagem.caracteristica()
    }else if(pc2 ==3){
        console.log(`Você acaba de ganhar ${lista[2]} + 1 de vida `)
        personagem.maisVida()
        //personagem.caracteristica()
    }else{
        console.log("Você não ganhou nehum item nesta batalha! ")
    }
}


// objeto horas
let horas ={
    valorHora: 12,
// funções para controle da hora
horaMais6: function(){
   this.valorHora +=6
    },
    horaMais2: function(){

        this.valorHora +=2
         },
         horaMais4: function(){

            this.valorHora +=4
             },
             horaMenos: function(){
                this.valorHora =1
                 }
}


//função com números aleatórios para o computador. Exencial para dizer quem ganhou as batalhas.
function aleatórios(){
    let pc = Math.ceil(Math.random()*10)
    console.log(`Número adverásario: ${pc}`)
    console.log(`Seus pontos:  ${personagem.ataque}`)
    if(personagem.ataque>pc){
    console.log(`${personagem.nome} derrotou o inimigo! `)
    listaAleatoria()
    }else{
    console.log("Você sofreu dano ")
    personagem.statusPerda()
    }

}


//função para a luta do Death Adder
function aleatórios2(){
    let pc = Math.ceil(Math.random()*10)
    console.log(`Número adverásario: ${pc}`)
    console.log(`Seus pontos:  ${personagem.ataque}`)
    if(personagem.ataque>pc){
    console.log(`${personagem.nome} causou dano ao inimigo! `)
    listaAleatoria()
    deathAdder.menosUmDeVida()
    deathAdder.caracteristica2()
    }else{
    console.log("Você sofreu dano ")
    personagem.statusPerda()
    }




}


//título
console.log(`---Barbaros Sem Barba----

Todos os direitos reservados anos 2022.
Plataforma VSCode`);
prompt("\nAperte Enter para continuar! ")
//início
console.log(`\nEm uma era onde os conflitos eram disputados com a lámina,
surge um guerreiro chamado ${personagem.nome} que precisava salvar o rei das mãos do Death Adder.
Nosso guerreiro começa sua jornada na Turtle Village e possui ${diaRegrecivo} dias para deixar
seu nome na história. `);






//while(diaRegrecivo>0 && dia !=0){ 
for(;diaRegrecivo >0 && dia >0;){ 
    console.log(`Agora são:  ${horas.valorHora}:00 `)
    prompt(`-Seu guerreiro-`)
   personagem.caracteristica()
    console.log(`restão:  ${diaRegrecivo} dias`)
    prompt()

function TurtleVillage(){
    console.log(`${personagem.nome} \nterá suas primeiras 
    escolhas a fazer `)


console.log(bloco1)
resposta = +prompt(`O que nosso guerreiro vai fazer? Digite o número
correspondente a ação: `)



if(resposta == 0){
    console.log("\nNosso guerreiro vai até o castelo para batalha final. ")
       dia = 0
       horas.horaMais6()


}else if(resposta == 1){
aleatórios()
horas.horaMais2()


}else if(resposta == 2){
    console.log("----------------------------")
    console.log(`Atributos:
    ataque +1
    vida +1 `)
    horas.horaMais4()
    personagem.statusGanho();


}else{
    resposta = +prompt("Resposta inválida. Digite um número válido: ")
}


if(horas.valorHora >= 24){
horas.horaMenos()
diaRegrecivo--
}

}

if(personagem.vida == 0){
    dead()
    break

}
if(diaRegrecivo == 0){
    fimDeJogo()
    break
}
TurtleVillage()
//}
}


let dialogo =(`Nosso guerreiro ${personagem.nome} chegou ao castelo das tartarugas para enfrentar o
podereso Death Adder. Será que nosso querreiro está forte o suficiente? `)

if(resposta == 0){
console.log(dialogo)

}

while(diaRegrecivo>0){ 

//for(; diaRegrecivo>0;diaRegrecivo--){
    console.log(`Agora são:  ${horas.valorHora}:00 `)

    if(personagem.vida==0){
        dead()
        break
    }

   prompt(`-Seu guerreiro-`)
   personagem.caracteristica()
   console.log(`restão:  ${diaRegrecivo} dias`)
   prompt()

function castelo(){
    console.log(`${personagem.nome} \nterá suas promeiras 
    escolhas a fazer `)
    console.log(bloco2)
    resposta = +prompt(`O que nosso guerreiro vai fazer? Digite o número
    correspondente a ação. `)


    if(resposta == 0){
   console.log(`Nosso guerreiro ${personagem.nome} se juntou ao mal e agora eles dominam a Turtle Village`)
   finalizarJogo()

    }else if (resposta == 1){
        aleatórios2()
        deathAdder.caracteristica2()
        horas.horaMais2()

        
    }else if(resposta == 2){
        console.log(`Atributos:
        ataque +1
        energia +1
         `)
        horas.horaMais4()
       
        personagem.statusGanho();
    }else{
        resposta = +prompt("Resposta inválida. Digite um número válido  ")

    }
    if(horas.valorHora >= 24){
        horas.horaMenos()
        diaRegrecivo--
        }
    
}

if(diaRegrecivo == 0){
    fimDeJogo()
    break
}

if (deathAdder.vida == 0){
    console.log(`Nosso guerreiro ${personagem.nome} derrotou o grande Death Adder e agora a 
    paz reina na Turtle Village. `)
    break
}

if(personagem.vida==0){
    dead()
    break
}
  castelo()
  if(resposta == 0){
      break
  }

}
//}