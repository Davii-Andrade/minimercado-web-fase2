// Função para abrir páginas
function abrirLogin() {
    window.location.href = "entrar.html";
}

function abrirCadastro() {
    window.location.href = "cadastro.html";
}

// Simula login
document.addEventListener("DOMContentLoaded", function() {
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Login realizado com sucesso!");
            window.location.href = "index.html";
        });
    }

    const formCadastro = document.getElementById("formCadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Cadastro realizado com sucesso!");
            window.location.href = "index.html";
        });
    }
});


// ----- CADASTRO -----
const formCadastro = document.getElementById("formCadastro");
if (formCadastro) {
  formCadastro.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  });
}

// ----- LOGIN -----
const formLogin = document.getElementById("formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login realizado com sucesso!");
    window.location.href = "index.html";
  });
}

// ----- COMPRA -----
const formCompra = document.getElementById("formCompra");
if (formCompra) {
  formCompra.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("emailCompra").value;
    const servico = document.querySelector("input[name='servico']:checked").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    alert(
      `Compra confirmada!\n\nE-mail: ${email}\nServiço: ${servico}\nData: ${data}\nHorário: ${hora}`
    );

    window.location.href = "index.html";
  });
}