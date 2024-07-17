//1 - Métodos
console.log("1 - Métodos");

const animal = {
    nome: "Bob",
    latir: function(){
        console.log("Au au")
    }
}

console.log(animal.nome);
animal.latir();

//2 - Aprofundamento em métodos
console.log("2 - Aprofundamento em métodos");

const pessoa = {
    nome: "Matheus",

    getNome: function(){
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }
};

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Joaquina");
console.log(pessoa.getNome())

//3 - Prototypes
console.log("3 - Prototypes");

const text = "teste";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(Object.getPrototypeOf(arr));

//4 - Mais sobre prototypes
console.log("4 - Mais sobre prototypes");

const myObject = {
    a: "b"
};

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(mySecondObject.a);

//5 - Classes básicas
console.log("5 - Classes básicas");

const cachorro = {
    raca: null,
    patas: 4
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao.raca);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog.raca);

//6 - Funções como classe
console.log("6 - Funções como classe");

function criarCachorro(nome, raca){
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira Lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);

//7 - Funções construtoras
console.log("7 - Função construtora");

function Cachorro(nome, raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);


//8 - Métodos em funções construtoras
console.log("9 - Métodos em funções construtoras")

Cachorro.prototype.uivar = function(){
    console.log("Teste");
};

console.log(cachorro.prototype);
husky.uivar();

//9 - Classes em JavaScript 
console.log("9 - Classes em JavaScript");

class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

//10 - Mais sobre classes
console.log("10 - Mais sobre classes");

class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhão(){
        console.log(`Este caminhinão tem ${this.eixos} e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");
console.log(scania);

scania.descreverCaminhão();
Caminhao.motor = 4;

const c2 = new Caminhao(4, "Preto");
console.log(c2);
console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");
console.log(c3);
console.log(c3.motor);

//11 - Override
console.log("11 - Override");

class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const matheus = new Humano("Matheus", 31);

console.log(matheus);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";

console.log(matheus.idade);

console.log(Humano.prototype.idade);

//12 - Symbol
console.log("12 - Symbol");

class Aviao{
    constructor(marca, turbinas){
       this.marca = marca;
       this.turbinas = turbinas;
    }
}


const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

//13 - Getter e setter
 console.log("13 - Getter e setter")

 class Post{
    constructor(titulo, descricao, tags){
        this.titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
 }

 const myPost = new Post("Algum post", "É um post sobre microcontroladores");

 console.log(myPost);

 console.log(myPost.exibirTitulo);

 myPost.adicionarTags = "ESP32, Arduino Uno, STM32";

 console.log(myPost);

 //14 - Herança
 console.log("Herança");

 class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
 }

 class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas);
        this.nome = nome;
    }
 }

 const shark = new Lobo(4, "Shark");

 console.log(shark);

 console.log(shark.patas);

 //15 - Instaceof
console.log("15 - Instanceof")

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Lobo);

































































































































