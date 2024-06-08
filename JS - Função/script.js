//1 - Criando uma função
console.log("1 - Criando uma função em JS");

function minhaFuncao(){
    console.log("Base função JS");
}
minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    console.log("Função em váriavel");
}
minhaFuncaoEmVariavel();

function funcaoComParametro(txt){
    console.log(`Imprimindo: ${txt}`)
}
funcaoComParametro("Imprimindo alguma coisa");

//2 - Return
console.log("2 - Return");
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

//3 - Escopo das funções
console.log("3 - Escopo das funções");
let y = 10;

function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo();

console.log(`Y fora da função é: ${y}`);

testandoEscopo();

//4 - Escopo aninhado
console.log("4 - Escopo aninhado");
let m = 10;

function EscopoAninhado(){
    let m = 20;
    if(true){
        let = 30;

        if(true){
            let m = 40;

            console.log(m);
        }

        console.log(m);

    }

    console.log(m);
}

EscopoAninhado();
console.log(m);

//5 - Arrow function
console.log("5 - Arrow function");

const testeArrow = () => {
    console.log("Esta é uma arrow function");
}

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("Par")
        return
    }

    console.log("Impar");
}

parOuImpar(5);
parOuImpar(10);

//6 - + Arrow function
console.log("6 - Mais de arrow function");

const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5));
console.log(raizQuadrada2(12));

const helloworld = () => console.log("Hello World <3")
helloworld()

//7 - Parametro opcional
console.log("7 - Parametro opcional");

const multiplication = function(m, n){
    if(n === undefined){
        return m * 2
    }else{
       return m * n
    }
}

console.log(multiplication(5));
console.log(multiplication(4,4));

//8 - Default
console.log("8 - Default");

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}! `
}

console.log(customGreeting("Matheus"));
console.log(customGreeting("Henrique", "Bom dia"))


//9 - Closure
console.log("9 - Closure");

function someFunction(){
    let txt = "Alguma coisa";

    function display(){
        console.log(txt);
    }
    display();
}

someFunction();

//10 - Mais de Closure 
console.log("10 - Mais de Closure")

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

//11 - Recursão 
console.log("11 - Recursão")

function factorial(x){
    if(x === 0){
        return 1;
    }else{
        return x * factorial(x -1);
    }
}

const num = 6;
const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}`);

































































































