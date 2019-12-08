function logar() {
    usuario = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
    if (usuario == "eu" && senha == "123") {
        window.open("cardapio.html");
    } else {
        alert("Usuario ou senha incorreta");
    }
}
