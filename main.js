import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div id="app">
    <p>Vá para <a href="paginaCadastros.html">Cadastro</a></p>
  </div>
`

setupCounter(document.querySelector('#counter'))
