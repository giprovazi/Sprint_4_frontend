const entrar = document.querySelector("button")
const inputSenha = document.getElementById('inputSenha')

entrar.addEventListener("click", (e) => {
  e.preventDefault()
  if (!inputSenha.value.trim()) {
    alert('Por favor, preencha o ID do Quarto.')
    inputSenha.focus()
  }else {
    window.location.href = "tela-principal.html"
  }
})

const falas = [
  "Oi! Ainda não me apresentei,né? <br> Eu sou o Leo, o leãozinho do NutriSabará!",
  "Estou aqui para te ajudar a contar o que você achou da sua refeição.",
  "Vamos lá! Me conta, gostou da comida de hoje? É só escolher a sua nota e mandar para a gente!",
]

const proximo = document.getElementById("proximo")
const darNota = document.getElementById("darNota")
let indice = 0
fala.innerHTML = falas[indice]

proximo.addEventListener("click", ()=>{
  const fala = document.getElementById("fala")
  if (indice < falas.length - 1) {
    indice++;
    fala.classList.add("opacity-0")
    setTimeout(() => {
      fala.innerHTML = falas[indice];
      fala.classList.remove("opacity-0")
    }, 500);
      }
  
  if (indice >= falas.length - 1){
    darNota.classList.remove("hidden");
    proximo.disabled = true
    proximo.classList.add("opacity-0", "cursor-not-allowed")
    setTimeout(() => {
      darNota.scrollIntoView({ behavior: 'smooth' })
    }, 3000)

  }  
})

const grupos = document.querySelectorAll('.avaliacao')

grupos.forEach(grupo => {
  const estrelas = grupo.querySelectorAll('img')
  let nota = 0;

  estrelas.forEach((estrela, index) => {
    estrela.addEventListener('click', () => {
      nota = index + 1;

      estrelas.forEach((e, i) => {
        e.src = i < nota 
          ? './src/assets/estrela_preenchida.png' 
          : './src/assets/estrela_vazia.png'
      })
    })
  })
})

const avaliar = document.getElementById("avaliar");

avaliar.addEventListener("click", () => {
  const fala = document.getElementById("fala")

  fala.classList.add("opacity-0")
  setTimeout(() => {
    fala.textContent = "Obrigado! Sua ajuda vai deixar as próximas refeições ainda mais gostosas!"
    fala.classList.remove("opacity-0")
  }, 500)

  darNota.classList.add("hidden")

  setTimeout(() => {
    window.location.href = "index.html"
  }, 5000);
});