// Scroll suave ao clicar no menu
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}


// Envio assíncrono do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(this); // Coleta os dados do formulário
    const mensagemStatus = document.getElementById('mensagem-status'); // Elemento para exibir mensagens

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                mensagemStatus.textContent = 'Mensagem enviada com sucesso!'; // Mensagem de sucesso
                this.reset(); // Limpa o formulário
            } else {
                mensagemStatus.textContent = 'Erro ao enviar a mensagem. Tente novamente.'; // Mensagem de erro
            }
        })
        .catch(error => {
            mensagemStatus.textContent = 'Erro ao enviar a mensagem. Tente novamente.'; // Mensagem de erro
        });
});