document.addEventListener('DOMContentLoaded', () => {
    const lluvia = document.getElementById('lluvia');

    function crearCorazon() {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon-caido');
        
        // Caracter de corazón aleatorio
        corazon.innerText = '❤';
        
        // Posición horizontal aleatoria
        corazon.style.left = Math.random() * 100 + "vw";
        
        // Tamaño aleatorio
        const size = Math.random() * 20 + 10 + "px";
        corazon.style.fontSize = size;
        
        // Duración de caída aleatoria (entre 3 y 6 segundos)
        const duracion = Math.random() * 3 + 3;
        corazon.style.animationDuration = duracion + "s";
        
        // Opacidad aleatoria
        corazon.style.opacity = Math.random();

        lluvia.appendChild(corazon);

        // Borrar el elemento después de que termine la animación
        setTimeout(() => {
            corazon.remove();
        }, duracion * 1000);
    }

    // Crear un corazón cada 200ms
    setInterval(crearCorazon, 200);
});