const inputSenha = document.getElementById('senha');
const eyeIcon = document.querySelector('.bi-eye');
const eyeSlashIcon = document.querySelector('.bi-eye-slash');
eyeIcon.hidden = false;

eyeIcon.addEventListener('click', () => {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        eyeIcon.hidden = true;
        eyeSlashIcon.hidden = false;
    }
});

eyeSlashIcon.addEventListener('click', () => {
    if (inputSenha.type === 'text') {
        inputSenha.type = 'password';
        eyeIcon.hidden = false;
        eyeSlashIcon.hidden = true;
    }
});
