const entrar = document.querySelector("button")
const inputSenha = document.getElementById('inputSenha')

entrar.addEventListener("click", (e) => {
    e.preventDefault()
    if (!inputSenha.value.trim()) {
      alert('Por favor, preencha o ID do Quarto.')
      inputSenha.focus()
    } else {
        window.location.href = "tela-principal.html"
    }
  })