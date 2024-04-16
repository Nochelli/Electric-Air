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