const menu = document.getElementById('lista-menu');
const botaoMenu = document.querySelector('.bt-menu');
const cabecalho = document.querySelector('.cabecalho');
const cabecalhoAltura = document.querySelector('.cabecalho_container');
const divNumeros = document.querySelector('.experiencias_numeros');
const listaItensMenu = document.querySelectorAll('.item-menu a');
const btSubirAoTopo = document.querySelectorAll('#subir-ao-topo');
const btMenuSubir = document.querySelector('#subir-link-menu');
const btSubir = document.querySelector('.subir');

//DEBOUNCE PARA FUNÇÃO SCROLL
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


//CHAMA FUNÇÃO ABRIR MENU
botaoMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    abrirMenu();
})

//ANIMAÇÃO MENU E ADD CLASSES PARA TORNA-LO VISIVEL
function abrirMenu(){
    if(!menu.classList.contains('menu-ativo')){
        menu.classList.add('menu-ativo');
    }else{
        menu.classList.remove('menu-ativo');
    }
    botaoMenu.classList.toggle('ativo');
}


//FUNÇÃO QUE ESCONDE E MOSTRA CABECALHO DE ACORDO COM O SCROLL
let posAanteriorScroll = window.scrollY;
function esconderCabecalho(){

    if(menu.classList.contains('menu-ativo')){
        return;
    }
    const posAtualScroll = window.scrollY;
    
    if(posAanteriorScroll < posAtualScroll){
        cabecalho.style.top = '-100%';
    }else{
        cabecalho.style.top = '0';
    }
    posAanteriorScroll = posAtualScroll;
}


//EVENTOS DE SCROLL NA PÁGINA. EFEITOS E TRANSIÇÕES
window.addEventListener('scroll', debounce( ()=> {
     
    animaElementos();
    alteraEstiloMenu();
    esconderCabecalho();
    ativaBotaoSubir();

}), 200);

function animaElementos(){
    const topWindow = window.scrollY + (window.innerHeight * 3) / 4; 
    const posElemento = divNumeros.offsetTop;
    
    if(topWindow > posElemento){
        iniciaRepeticao();
    }  
}

function alteraEstiloMenu(){
    if(window.scrollY > 0){
        cabecalho.classList.add('cabecalho-scroll');
    }else{
        cabecalho.classList.remove('cabecalho-scroll');
    }
}
function ativaBotaoSubir(){
    const posPagina = window.scrollY;
    if(posPagina > 800){
        btSubir.classList.add('subir-ativo')
    }else{
        btSubir.classList.remove('subir-ativo')
    }
}

// TORNANDO NUMEROS DA SEÇÃO EXPERIENCIA DINAMICOS
const numSetores = document.querySelector('.setores');
const numClientes = document.querySelector('.clientes-numeros');
const numExperiencia = document.querySelector('.experiencia');
const numMaquinas = document.querySelector('.maquinas');
const numeros = document.querySelectorAll('.exepriencia-numeros');

numeros.forEach( num => {
    num.textContent = 0;
});

let contadorCliente = 0;
let contadorExperiencia = 0;
let contadorMaquina = 0;
let contadorSetor = 0;

function somaNumeros(){

    if( contadorCliente == 200){
        return;
    }else{
        const soma = contadorCliente + 1;
        numClientes.textContent = soma;
        contadorCliente = soma;
    }

    if( contadorExperiencia == 12){
        return;
    }else{
        const soma = contadorExperiencia + 1;
        numExperiencia.textContent = soma;
        contadorExperiencia = soma;
    }

    if( contadorSetor == 10){
        return;
    }else{
        const soma = contadorSetor + 1;
        numSetores.textContent = soma;
        contadorSetor = soma;
    }

    if( contadorMaquina == 10){
        return;
    }else{
        const soma = contadorMaquina + 1;
        numMaquinas.textContent = soma;
        contadorMaquina = soma;
    }
}

function iniciaRepeticao(){
    setInterval( ()=> {
        somaNumeros();
    }, 200)
}

//FECHANDO MENU AO CLICAR EM UM LINK 
listaItensMenu.forEach( item=> {    

    item.onclick = ()=>{
        abrirMenu();
    };
});

btSubirAoTopo.forEach( item => {
    item.onclick = ()=>{
        subirAoTopo();
}})

btMenuSubir.onclick = ()=> {
    subirAoTopo();
    abrirMenu();
}

function subirAoTopo(){
    window.scrollTo(0,0);
}


//ABRINDO E FECHANDO POP-UP WHATSAPP
const containerWpp = document.querySelector('.wpp-msg');
const botaoFecharPopup = document.querySelector('.botao-fechar-wpp')

function abrirOuFecharPopupWpp(){
    if(containerWpp.classList.contains('wpp-msg-ativo')){
        containerWpp.classList.remove('wpp-msg-ativo');
        botaoFecharPopup.classList.remove('botao-fechar-wpp-ativo');
    }else{
        containerWpp.classList.add('wpp-msg-ativo');
        botaoFecharPopup.classList.add('botao-fechar-wpp-ativo');
    }
}

setTimeout( ()=> {
    abrirOuFecharPopupWpp();
}, 2000)

botaoFecharPopup.onclick = ()=> abrirOuFecharPopupWpp();