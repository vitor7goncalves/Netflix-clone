
document.getElementById('error-box').hidden = true;

function LoginIn() {
    let email = document.getElementById('username');
    let pass = document.getElementById('password');

    if (email.value == "vitor@exemple.com" && pass.value == "123") {
        window.location.href = "D:/Meus%20Projetos/Netflix2/index.html";
    } else {
        document.getElementById('error-box').hidden = false;
    }
}