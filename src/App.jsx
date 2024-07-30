import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem';
import Frase from './components/Frase';
import Calculadora from './components/Calculadora';

function Saudacao() {
  return <h1>Olá, mundo!</h1>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Saudacao/>
      <Mensagem texto={"Meu texto"}/>
      <Frase/>
      <Calculadora/>
    </>
  )
}

export default App
