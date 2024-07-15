//1 - Arrays
const lista = [1,2,3,4,5]
console.log(lista);
console.log(typeof lista);

const itens = ["Matheus", true, 2, 2.2]

//2 - Acessando item

const arr = ["a", "b", "c", "d"];

console.log(arr[2]);

//3 - Propriedades
const number = [4,5,6]

console.log(number.length);
console.log(number["length"]);

const myName = "Julio";
console.log(myName.length);

//4 - Métodos
const otherNumbers = [1,2,3];
const allNumber = number.concat(otherNumbers);

console.log(allNumber);

const text = "Flor de cerejeira";
console.log(text.toUpperCase());
console.log(text.indexOf("c"));

//5 - Objetos
const person = {
    name: "Mateus",
    age: 31,
    job: "Programador"
}

console.log(person);
console.log(person.name);
console.log(person.name.length);

//6 - Criando e deletando propriedades

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km:20000
}

console.log(car);
car.door = 4;

console.log(car);

delete car.km;
console.log(car);

//7 - Mais sobre objetos

const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);

console.log(obj2);
console.log(obj);

//8 - Conhecendo melhor os objetos
console.log("8 - Conhecendo melhor os objetos");
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));
console.log(Object.entries(obj));

//9 - Mutação
console.log("Mutação");

const a = {
    name: "Matheus"
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

//10 - Loop em arrays
console.log("Loop de arrays");

const user = ["Matheus", "João", "Pedro", "Miguel"];

for (let i=0; i<user.length; i++){
    console.log(`Listando usuários: ${user[i]}`);
}


//11 - Push e Pop
console.log("Push e Pop");

const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z","x","y");

//12 - Shift e Unshift
console.log("12 - Shift e Unshift");

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

console.log(letters);

//13 - IndexOf e lastIndexOf
console.log("indexOf e lastIndexOf");

const myElements = ["Morango", "Maçã", "Pera", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

//14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2,4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray);

const subArray3 = testeSlice.slice(10,20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

//15 - Foreach
const nums = [1,2,3,4,5];

nums.forEach((numero)=> {
    console.log(`O número é ${numero}`);
    });

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"}
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`);
});

//16 - Includes
const brands = ["BMW", "VW", "FIAT"];

if(brands.includes("BMW")){
    console.log("Há carros da BMW na lista")
}

//17 - Reverse
const reverseTest = [1,2,3,4,5,6,7];

reverseTest.reverse();

console.log(reverseTest);

//18 - Trim
const trimTeste = " testando /n ";

console.log(trimTeste);

console.log(trimTeste.trim());

console.log(trimTeste.length);

console.log(trimTeste.trim().length);

//19 - Padstart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10,"0");

console.log(testePadEnd);

//20 - Split
const frase = "As coisas ainda podem melhorar - Lei de Murphy Reversa";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

//21 - Join
const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDaCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDaCompra);

//22 - Repeat
const palavra = "Testando ";
palavra.repeat(5);

//23 - Rest operator
const somaInfinita = (...args) => {
    let total = 0;

    for (let i=0; i<args.length; i++){
        total += args[i];
    }

    return total;
};

console.log(somaInfinita(1,2,3));

//24 - Estrututa For Of
const somaInfita2 = (...args) => {
    let total = 0;

    for (num of args){
        total += num;
    }

    return total;
};

console.log(somaInfinita(1,2,3));
console.log(somaInfita2(1,2,3,4,5,6,7));

//25 - Destructuring em objetos
const userDetails = {
    firstName: "Matheus",
    lastName: "Battisti",
    job: "Programador",
};

const {firstName, lastName, job} = userDetails;
console.log(firstName, lastName, job);

//Renomeando váriaveis
const {firstName: primeiroNome} = userDetails;
console.log(firstName);


//26 - Destructuring em array
const myList = ["Avião", "Submarino", "Carro", "Trator"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA,veiculoB,veiculoC);


//27 - JSON
const myJson = '{"name":"Matheus", "age": 31}';

//28 - Conversão JSON
const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);






























































































































































