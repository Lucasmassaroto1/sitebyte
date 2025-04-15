// ========== LOADING ==========
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