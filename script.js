function falar(texto) {
    // Cria um objeto de fala
    const mensagem = new SpeechSynthesisUtterance();
    
    // Define o texto que será falado
    mensagem.text = texto;
    
    // Define o idioma para Português do Brasil
    mensagem.lang = 'pt-BR';
    
    // Ajusta a velocidade (opcional)
    mensagem.rate = 1.0; 

    // Executa a fala
    window.speechSynthesis.speak(mensagem);
}

// Pequeno truque para garantir que as vozes carreguem em alguns navegadores
window.speechSynthesis.getVoices();