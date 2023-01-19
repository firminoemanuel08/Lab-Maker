const camposDoFormulario = document.querySelectorAll('[required]')

const listaREspostas = {
    "nome": e.target.elements["nome"].value,
    "email": e.target.elements["email"].value,
    "mensagem": e.target.elements["mensagem"].value
}