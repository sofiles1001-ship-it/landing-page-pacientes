// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animação simples ao rolar a página (Fade In)
const observerOptions = { threshold: 0.1 };
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

// --- MODO EDITOR VISUAL ---
let isEditMode = false;
const editBtn = document.getElementById('edit-mode-btn');

if (editBtn) {
    editBtn.addEventListener('click', () => {
        isEditMode = !isEditMode;
        const editableElements = document.querySelectorAll('h1, h2, h3, p, span, li, .logo');
        
        if (isEditMode) {
            editBtn.innerHTML = '<i class="fas fa-save"></i> Desativar Edição';
            editBtn.classList.add('active');
            editableElements.forEach(el => {
                el.contentEditable = "true";
                el.style.border = "1px dashed #007bff";
                el.style.padding = "2px";
            });
            alert("Modo de Edição ATIVADO! Clique em qualquer texto para alterar.");
        } else {
            editBtn.innerHTML = '<i class="fas fa-edit"></i> Ativar Edição';
            editBtn.classList.remove('active');
            editableElements.forEach(el => {
                el.contentEditable = "false";
                el.style.border = "none";
                el.style.padding = "0";
            });
            alert("Modo de Edição DESATIVADO! Lembre-se: as alterações são temporárias nesta visualização. Para salvar permanentemente, edite o arquivo index.html no GitHub.");
        }
    });
}
