// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para o header fixo
                behavior: 'smooth'
            });
        }
    });
});

// Animação simples ao rolar a página (Fade In)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.servico-card, .depoimento-card, .sobre-img, .sobre-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Log de carregamento para debug
console.log("Landing Page carregada com sucesso!");

// --- MODO EDITOR VISUAL ---
// Permite editar textos clicando neles.
// Para usar: Pressione 'E' no teclado para ativar/desativar o modo de edição.

let isEditMode = false;

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'e' && !e.ctrlKey && !e.metaKey) {
        toggleEditMode();
    }
});

function toggleEditMode() {
    isEditMode = !isEditMode;
    const editableElements = document.querySelectorAll('h1, h2, h3, p, span, li, .logo');
    
    if (isEditMode) {
        alert("Modo de Edição ATIVADO! Clique em qualquer texto para alterar. Pressione 'E' novamente para desativar.");
        editableElements.forEach(el => {
            el.contentEditable = "true";
            el.style.border = "1px dashed #007bff";
            el.style.padding = "2px";
        });
    } else {
        alert("Modo de Edição DESATIVADO! As alterações são temporárias nesta visualização. Para salvar permanentemente, edite o arquivo index.html.");
        editableElements.forEach(el => {
            el.contentEditable = "false";
            el.style.border = "none";
            el.style.padding = "0";
        });
    }
}
