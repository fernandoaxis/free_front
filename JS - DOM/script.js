//01 - Movendo-se pelo DOM

console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

//02 - Selecionando elementos por tag

const listItens = document.getElementsByTagName("li");
console.log(listItens);

//03 - Selecionando elementos por id

const title = document.getElementById("title");
console.log(title);

//04 - Selecionando elementos por classe

const product = document.getElementsByClassName("product");
console.log(product);

//05 - Selecionando elementos por regras de CSS

const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

//06 - InsertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

//07 - AppendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

//08 - ReplaceChild
const h2 = document.createElement("h2");
h2.textContent = "Novo título";
header.replaceChild(h2, title);

//09 - createTextNode
const myText = document.createTextNode("Colocando mais um título");
console.log(myText);

const h3 = document.createElement("h3");
h3.appendChild(myText);
console.log(h3);

mainContainer.appendChild(h3);

//10 - Atributos
const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://google.com");
console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

//11 - Altura e largura
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientWidth); 

//12 - Posição do elemento
const product1 = product[0];
console.log(product1.getBoundingClientRect());

//13 - CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "3px";

//14 - Alterando estilo de vários itens
for(const li of listItens){
    li.style.backgroundColor = "red";
}






















































