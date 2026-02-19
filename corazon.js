document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particles-container');
    const mainHeart = document.getElementById('corazon');

    function createHeart(isExplosion = false) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.className = 'floating-heart';
        
        const size = isExplosion ? Math.random() * 30 + 10 : Math.random() * 20 + 5;
        heart.style.fontSize = `${size}px`;
        
        const startX = Math.random() * window.innerWidth;
        heart.style.left = `${startX}px`;
        heart.style.top = `-50px`;
        
        const duration = Math.random() * 3 + 2;
        heart.style.animation = `fall ${duration}s linear forwards`;
        
        // Si es explosión, salen del centro
        if (isExplosion) {
            heart.style.left = '50vw';
            heart.style.top = '50vh';
            heart.style.transition = 'all 0.5s ease-out';
            setTimeout(() => {
                heart.style.transform = `translate(${(Math.random()-0.5)*500}px, ${(Math.random()-0.5)*500}px)`;
                heart.style.opacity = '0';
            }, 10);
        }

        container.appendChild(heart);

        setTimeout(() => heart.remove(), duration * 1000);
    }

    // Lluvia constante
    setInterval(() => createHeart(false), 300);

    // Evento de clic profesional
    mainHeart.addEventListener('click', () => {
        for(let i=0; i<15; i++) {
            createHeart(true);
        }
        mainHeart.style.filter = 'brightness(1.5) drop-shadow(0 0 30px #fff)';
        setTimeout(() => {
            mainHeart.style.filter = 'drop-shadow(0 0 20px var(--primary))';
        }, 200);
    });
});