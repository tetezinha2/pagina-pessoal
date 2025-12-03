document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de navegação
    const navButtons = document.querySelectorAll('.nav-button');
    // Seleciona todas as seções de conteúdo
    const contentSections = document.querySelectorAll('.content-section');
    // Seleciona a seção de boas-vindas
    const welcomeSection = document.getElementById('welcome');

    /**
     * Função para mostrar a seção selecionada e aplicar a animação.
     * @param {string} targetSectionId - O ID da seção a ser exibida (ex: 'about', 'course').
     */
    function showSection(targetSectionId) {
        // 1. Oculta e remove a classe 'active' de todas as seções e do botão 'active'
        contentSections.forEach(section => {
            if (section.id !== targetSectionId) {
                // Adiciona a classe 'hidden' após a transição para otimização
                setTimeout(() => {
                    section.classList.remove('active');
                    section.classList.add('hidden');
                }, 500); // 500ms é a duração da transição CSS
            }
        });
        
        navButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Oculta a seção de boas-vindas se não for ela a ser mostrada
        if (welcomeSection) {
            welcomeSection.classList.add('hidden');
            welcomeSection.classList.remove('active');
        }

        // 2. Encontra a nova seção e prepara para exibir
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            // Remove 'hidden' para permitir a animação CSS
            targetSection.classList.remove('hidden'); 
            
            // Força o navegador a recalcular o layout antes de adicionar 'active'
            // Isso garante que a transição de transform: translateX(100%) para (0) funcione
            void targetSection.offsetWidth; 

            // 3. Adiciona a classe 'active' para iniciar a animação
            targetSection.classList.add('active');
        }

        // 4. Ativa o botão correspondente
        const activeButton = document.querySelector(`.nav-button[data-section="${targetSectionId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Adiciona o evento de clique a todos os botões de navegação
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Opcional: Para começar com a seção "Sobre mim" ativada:
    // showSection('about');
});