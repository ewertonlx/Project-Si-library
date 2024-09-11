function verificarLogin(event) {
    const user = document.getElementById('text').value;
    const senha = document.getElementById('password').value;
    const diverror = document.querySelector('.error');
    if(!user || !senha) {
        event.preventDefault();
        diverror.style.display = 'block';
    }
    if(user == 'admin' && senha == 'admin123') {
        event.preventDefault();
        diverror.style.display = 'none';
        window.location.href = "cadastrarLivro.html";
    } else {
        event.preventDefault();
        diverror.style.display = 'block';
    }
}