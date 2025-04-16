const botao = document.querySelector('.toggle');
const menuLateral = document.querySelector('.menu-lateral');
const linksMenu = document.querySelectorAll('.menu-lateral a');
const conteudo = document.querySelector('.conteudo');
const background = document.querySelector('.background');

// ========== MENU LATERAL ==========
function fecharMenu(){
    botao.classList.remove('ativo')
    menuLateral.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    background.classList.remove('ativo')
}
if(botao && menuLateral && conteudo && background){
    botao.addEventListener('click', () => {
        botao.classList.toggle('ativo');
        menuLateral.classList.toggle('ativo');
        conteudo.classList.toggle('ativo');
        background.classList.toggle('ativo');
    });
    background.addEventListener('click', fecharMenu);
    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
            fecharMenu();
        });
    });
}

// ========== ROLAGEM SUAVE PARA LINKS INTERNOS ==========
const links = document.querySelectorAll("a[href^='#']");
for (const link of links){
    link.addEventListener("click", smoothScroll);
}
function smoothScroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection){
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// ========== ANIMAÇÃO DE FADE ==========
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

// ========== ANIMAÇÃO DE FADE ==========
const btnTopo = document.getElementById('voltarTopo');
window.addEventListener('scroll', () =>{
    if(window.scrollY > 300){
        btnTopo.style.display = 'block';
    }else{
        btnTopo.style.display = 'none';
    }
});
btnTopo.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// ========== LIGHT/DARK MODE ==========
const toggleBtn = document.getElementById('toggleTheme');
if(toggleBtn){
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode')
        toggleBtn.innerHTML = document.body.classList.contains('light-mode') 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
    });
}
