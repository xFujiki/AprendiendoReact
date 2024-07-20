import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const root=ReactDOM.createRoot(document.getElementById('root'))

const Button=({text})=>{
  return(<button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
      </svg>
      {text}
  </button>)
}

{/*
root.render(
  <React.Fragment>
    {Button({text:"Hola mundo"})}
    {Button({text:"Hola domun"})}
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
      </svg>
      Hola button
</button>
    <button>Hola button</button>
    <button>Hola button</button>
    <Button text="Prueba"/>
  </React.Fragment>
)*/}

const root1=ReactDOM.createRoot(document.getElementById('root1'))

root1.render(
  <App/>
)