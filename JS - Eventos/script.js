//01 - Adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log("Clicou aqui");
})

//02 - Removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem)
})

//03 - Objeto do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

//04 - Propagando eventos
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
});

//05 - Removendo evento padrão
a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou a página");
});

//06 - Eventos da tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
})

//07 - Eventos de mouse
const mouseEvent = document.querySelector("#mouse");

mouseEvent.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
});

mouseEvent.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});

//08 - Movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo x: ${e.x}`);
    // console.log(`No eixo y: ${e.y}`);
});

//09 - Evento por scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("Passamos de 200px");
    }
})

//10 - Focus/Blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu do input");
});

//11 - Evento de carregamento de página
 window.addEventListener("load", (e) => {
    console.log("A página carregou!");
 });

 window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Teste";
 })

 //12 - Debounce

 const debounce = (f, delay) => {
    let timeout;

    return(...arguments) => {
        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);


    };
 };

 window.addEventListener("mousemove", debounce(() => {
        console.log("Executando a cada 400ms");
    }, 400) 
); 


































