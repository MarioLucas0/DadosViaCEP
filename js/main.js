const inputCep = document.querySelector('.js-input-cep')
const btnBuscarCep = document.querySelector('.js-btn-buscar-cep')
const inputBairro = document.querySelector('.js-input-bairro')
const inputCepDados = document.querySelector('.js-input-cep-dados')
const inputLogradouro = document.querySelector('.js-input-logradouro')
const inputEstado = document.querySelector('.js-input-estado')
const btnSalvar = document.querySelector('.js-salvar')
const btnLimpar = document.querySelector('.js-limpar')
const dadosInput = document.querySelectorAll('input')
const areaBuscar = document.querySelector('.js-area-buscar')
const btnFecharDados = document.querySelector('.image')
const ApagarDados = document.querySelector('.js-apagar')

const msgErro = document.getElementById('js-error')
const areaDados = document.getElementById('js-dados')

function buscarCep() {
  if (inputCep.value != '') {
    axios({
      method: 'GET',
      url: `https://viacep.com.br/ws/${inputCep.value}/json/`
    }).then(response => {
      let data = response.data

      inputBairro.value = data.bairro
      inputCepDados.value = data.cep
      inputLogradouro.value = data.logradouro
      inputEstado.value = data.uf
    })

    areaDados.style.display = 'block'
    msgErro.style.display = 'none'
  } else {
    areaDados.style.display = 'none'
    msgErro.style.display = 'block'
  }
}
function salvar() {
  axios({
    method: 'GET',
    url: `https://viacep.com.br/ws/${inputCep.value}/json/`
  }).then(response => {
    let data = response.data
    console.log(data)

    const dadosSalvos = document.createElement('div')
    dadosSalvos.classList = 'dados-salvos'
    areaBuscar.appendChild(dadosSalvos)

    const containerDados = document.createElement('div')
    containerDados.classList = 'container3'
    dadosSalvos.appendChild(containerDados)

    const fundo = document.createElement('div')
    fundo.classList = 'fundo'
    containerDados.appendChild(fundo)

    const dadosBairro = document.createElement('h3')
    fundo.appendChild(dadosBairro)
    dadosBairro.textContent = data.bairro

    const dadosCep = document.createElement('span')
    fundo.appendChild(dadosCep)
    dadosCep.textContent = data.cep

    const dadosLogradouro = document.createElement('h3')
    fundo.appendChild(dadosLogradouro)
    dadosLogradouro.textContent = data.logradouro

    const dadosUf = document.createElement('h3')
    fundo.appendChild(dadosUf)
    dadosUf.textContent = data.uf

    const iconApagarDados = document.createElement('div')
    iconApagarDados.classList = 'image js-apagar'
    fundo.appendChild(iconApagarDados)

    const imageApagarDados = document.createElement('img')
    imageApagarDados.src = '/img/cruz.png'
    iconApagarDados.appendChild(imageApagarDados)

    function apagarDados() {
      dadosSalvos.innerHTML = ''
      console.log('apagarDados clicked')
    }
    imageApagarDados.addEventListener('click', apagarDados)
  })
}
function limpar() {
  const inputCepDados = document.querySelectorAll('input')

  inputCepDados.forEach(valor => {
    valor.value = ''
  })
}
function fechaDados() {
  areaDados.style.display = 'none'
}

btnLimpar.addEventListener('click', limpar)
btnSalvar.addEventListener('click', salvar)
btnBuscarCep.addEventListener('click', buscarCep)
btnFecharDados.addEventListener('click', fechaDados)

/* axios({
  method: 'GET',
  url: 'https://api.coinlore.net/api/tickers/?start=100&limit=100'
}).then(response => {
  console.log(response)
})
 */
