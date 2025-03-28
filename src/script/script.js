const botao = document.querySelector('.toggle');
const menuLateral = document.querySelector('.menu-lateral');
const linksMenu = document.querySelectorAll('.menu-lateral a');
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
    linksMenu.forEach(link =>{
        link.addEventListener('click', () =>{
            botao.classList.remove('ativo')
            menuLateral.classList.remove('ativo')
            conteudo.classList.remove('ativo')
            background.classList.remove('ativo')
        });
    });
}
// ANIMAÇÔES
const links = document.querySelectorAll("nav ul li a");
for (const link of links){
    link.addEventListener("click", smoothScroll);
}
function smoothScroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth"
    });
}
document.addEventListener("scroll", () =>{
    const elements = document.querySelectorAll(".fade");
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if(position < screenPosition){
            element.classList.add("visible");
        }else{
            element.classList.remove("visible");
        }
    });
});
document.addEventListener('DOMContentLoaded', () =>{
    const loader = document.getElementById('loader');
    const fadeSection = document.querySelectorAll(".fade");

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    window.addEventListener('load', function(){
        setTimeout(() =>{
            loader.style.display = 'none';
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';

            fadeSection.forEach((section) =>{
                section.classList.add('visible');
            });
        },4000);
    });
});