//01 - Salvando valores em variáveis
console.log("01 - Salvando valores em variáveis");

let nome = "Whinderson";
console.log(nome);

nome = "Whinderson Nunes";
console.log(nome);

const idade = 26;
console.log(idade);

//02 - Aprofundando em variáveis
console.log("02 - Aprofundando em váriaveis");

let a=10,b=20,c=30;
console.log(a,b,c);

const nomecompleto = "Whinderson Nunes";
const nomeCompleto = "Everson Zoio";

console.log(nomecompleto);
console.log(nomeCompleto);

//simbolos permitidos na criação de variaveis
let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

/*

//03 - Prompt
console.log("03 - Prompt");
const age = prompt("Digite a sua idade");
console.log(`Você tem ${age} anos.`);

//04 - Alert
console.log("04 - Alert");
alert(`Sua idade é ${age}`);

*/


//05 - Objeto Math
console.log("05 - Função Math");

console.log(Math.max(1,2,4,5,6,7,8));
console.log(Math.floor(9.6));
console.log(Math.ceil(9.6));

//06 - Objeto console
console.log("06 - Console");
console.log("teste!");
console.error("Erro");
console.warn("Opa! testando");

//07 - If
const m = 10;
const user = "Teste";

if(m > 5){
    console.log("M é sim maior que 5");
}

if(user === "Teste"){
    console.log("Olá Teste!");
}

if(user === "Mario"){
    console.log("Olá Mário!");
}


//08 - If Else
console.log("08 - If Else");
const loffedIn  = false;

if(loffedIn){
    console.log("Está autenticado!");
}else{
    console.log("Erro ao entrar");
}

//09 - Else if
console.log("09 - Else if")
const userName = "user";
const userAge = 32;

if(userName === "José"){
    console.log("Bem vindo José");
}else if(userName === "user" && userAge === 32){
    console.log("Olá user, você tem 32 anos");
}else{
    console.log("Dados inválidos");
}

//10 - While
console.log("10 - While");
let p = 0;

while(p < 5){
    console.log(`Repetindo${p}`);
    p = p + 1;
}

//11 - Do While
console.log("11 - Do While");
let o = 10;

do{
    console.log(`Valor de o: ${o}`);
    o--;
}while(o > 1);

//12 - For
console.log("12 - For");
for(let t = 0; t < 10; t++){
    console.log(`Contando... > ${t}`)
}

//13 - Break
console.log("13 - Break");

for(let g = 20; g > 10; g--){
    console.log(`Valor de g é: ${g}`)
    if(g === 12){
        console.log(`O g é 12`);
        break;
    }
}

//14 - Continue
console.log("14 - Continue");
for(let s = 0; s < 10; s = s+1){
    if(s % 2 === 0){
        console.log("Número par!");
        continue;
    }
    console.log(s);
}

//15 - Switch
console.log("15 - Switch");

const job = "Advogado";

switch(job){
    case "Programador":
        console.log("Você é um programador")
        break;
    case "Advogado":
        console.log("Você é um advogado!");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro")
        break;
    default:
        console.log("Profissão não encontrada");
}






















































