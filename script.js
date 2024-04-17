if ('IntersectionObserver' in window) {
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const elements = document.querySelectorAll('.hidden');

    elements.forEach((element) => myObserver.observe(element));
} else {
    console.log('Seu navegador não suporta IntersectionObserver.');
}
    // script hidden and show



    //menu mobile
function animar(){
    const btn = document.getElementById('btn-menu')  
    btn.classList.toggle('ativar')

}

const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')

}



