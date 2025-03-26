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
particlesJS("particles-js", {
    particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});