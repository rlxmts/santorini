let termos = localStorage.getItem('aceito') || '';

window.addEventListener('load', ()=> {
    if(termos === ''){
        criarPopUp();
    }else{
        return;
    }
})

function criarPopUp(){
    const div = document.createElement('div');
    div.classList.add('popup');

    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = `
        Para sua maior segurança, atualizamos a 
            <a href="/Politica/" target="_blank" rel="noopener noreferrer">
                Politicas de Privacidade e Termos de Uso do site
            </a>. 
        Ao continuar navegando na nossa página, entendemos que você está ciente e de acordo.
    `

    const botao = document.createElement('button');
    botao.textContent = 'Li e aceito as Politicas de Privacidade e Termos de Uso.';
    botao.setAttribute('id', 'bt-popup');

    botao.onclick = ()=>{
        fecharPopUp(div);
        salvarOpcao();
    }

    div.appendChild(paragrafo);
    div.appendChild(botao);

    document.querySelector('body').appendChild(div)
}

function fecharPopUp(element){
    element.style.transform = 'translateY(100%)';
}

function salvarOpcao(){
    let termos = 'aceito'
    localStorage.setItem(termos, 'aceito')
}

