function falar(texto) {
    // 1. Configuração da mensagem
    const mensagem = new SpeechSynthesisUtterance();
    mensagem.text = texto;
    mensagem.lang = 'pt-BR'; // Português do Brasil
    mensagem.rate = 1.0; // Velocidade normal (pode ser ajustada para 0.8 se for muito rápida)
    mensagem.pitch = 1.1; // Tom de voz ligeiramente mais infantil (opcional)

    // 2. Tocar a fala (para o navegador falar)
    window.speechSynthesis.speak(mensagem);

    // 3. Feedback visual (Opcional - mas bom para o TCC)
    // Encontrar o elemento que foi clicado e adicionar uma animação rápida
    // Isso é bom para crianças autistas terem feedback imediato do toque.
    const elementoClicado = event.currentTarget;
    elementoClicado.style.transform = "scale(0.95)"; // Diminui um pouco
    
    setTimeout(() => {
        elementoClicado.style.transform = "scale(1)"; // Volta ao normal
    }, 150); // após 150ms
}

// Pequeno ajuste para navegadores específicos (como Safari/Chrome em dispositivos móveis)
// Garante que as vozes estejam pré-carregadas.
if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = function() {
        speechSynthesis.getVoices();
    };
} else {
    console.log("Este navegador não suporta a API de fala.");
}