import React from 'react'
import { createGlobalStyle } from "styled-components"
import Inicio from './Components/Inicio.jsx'
import Sobre from './Components/Sobre.jsx'
import Projetos from './Components/Projetos.jsx'
import Navegacao from './Components/Navegacao.jsx'
//import './App.css'


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  text-decoration: none;
}
`

function App() {

  return (
    <>
      <GlobalStyle />
      <Navegacao />
      <Inicio />
      <Sobre />
      <Projetos />
    </>
  )
}

export default App
