import { useState } from 'react'
import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function App(){
    const formatUsuario=(usuario)=> `@${usuario}`
    const elementoVef=(<span>Verificado</span>)

    const elementoHijo=(<span>Soy el hijo</span>)
    
    const clientePrueba={estaSiguiendo:true, elementoVef:elementoVef, formatUsuario:formatUsuario, usuario:"sung1523", nombre:"Tabatha"}

    const [name,setName]=useState("fujiki");

    //const handleName=()=>{setName("pavoReal")}

    return(
        <section className='App'>
            <TwitterFollowCard {...clientePrueba}>
                {elementoHijo}
            </TwitterFollowCard>
            <TwitterFollowCard estaSiguiendo={false} elementoVef={elementoVef} formatUsuario={formatUsuario} usuario="pudge48" nombre="Pudge">
                {elementoHijo}
            </TwitterFollowCard>
            <TwitterFollowCard formatUsuario={formatUsuario} usuario="sung198" nombre="Samantha"/>
            <TwitterFollowCard formatUsuario={formatUsuario} usuario="nitendo69" nombre="Nintendo"/>
            <TwitterFollowCard formatUsuario={formatUsuario} usuario="pbferal" nombre="Pablo"/>

            <TwitterFollowCard formatUsuario={formatUsuario} usuario="CanonD" nombre={name}/>
            <button onClick={()=>{setName("fujioka")}}>
                Cambiar nombre
            </button>
        </section>
    )
}