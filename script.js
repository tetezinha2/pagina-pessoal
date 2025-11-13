// Obtém o elemento de animação
const animacaoBox = document.getElementById('animacao-box');

// Variável para controlar o estado da animação
let isExpanded = false;

// Adiciona um 'listener' de evento para o clique
animacaoBox.addEventListener('click', () => {
    // Verifica o estado atual
    if (isExpanded) {
        // Se estiver expandido, volta ao tamanho original (reset)
        animacaoBox.style.transform = 'scale(1)';
        animacaoBox.style.backgroundColor = '#D8BFD8'; // Roxo Claro
        isExpanded = false;
    } else {
        // Se não estiver expandido, expande (animação)
        animacaoBox.style.transform = 'scale(1.5)';
        animacaoBox.style.backgroundColor = '#8A2BE2'; // Roxo um pouco mais escuro
        isExpanded = true;
    }
    
    // Adiciona uma transição suave para a animação
    animacaoBox.style.transition = 'transform 0.5s ease-in-out, background-color 0.5s ease-in-out';
});
