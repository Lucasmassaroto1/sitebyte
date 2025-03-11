const botao = document.querySelector('.toggle');
const menuLateral = document.querySelector('.menu-lateral');
const conteudo = document.querySelector('.conteudo');
const background = document.querySelector('.background');

function virar(elemento){
    elemento.querySelector('.card').classList.toggle('virado');
}
if(botao && menuLateral && conteudo && background){
    botao.addEventListener('click', () =>{
        botao.classList.toggle('ativo')
        menuLateral.classList.toggle('ativo')
        conteudo.classList.toggle('ativo')
        background.classList.toggle('ativo')
    });
    background.addEventListener('click', () =>{
        botao.classList.remove('ativo')
        menuLateral.classList.remove('ativo')
        conteudo.classList.remove('ativo')
        background.classList.remove('ativo')
    });
}