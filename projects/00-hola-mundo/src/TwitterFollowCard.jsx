import { useState } from "react"

export function TwitterFollowCard ({children,elementoVef,formatUsuario,nombre,usuario}){
    //const imgSource=`https://unavatar.io/${usuario}`
    /*const state=useState(false) //El estado inicial
    const estaSiguiendo=state[0] //El valor
    const setEstaSiguiendo=state[1] //El interruptor o forma de actualizar*/

    const [estaSiguiendo, setEstaSiguiendo] =useState(false)

    const text=estaSiguiendo? 'Siguiendo' : 'Seguir'
    const buttonClassName=estaSiguiendo ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleCLick =() =>{
        setEstaSiguiendo(!estaSiguiendo)
    }

    return (    
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img alt="El avatar de un pudge" className="tw-followCard-avatar" src={`https://unavatar.io/${usuario}`}/>
            <div className='tw-followCard-info'>
                <strong>{nombre}</strong>
                <span>{formatUsuario(usuario)}</span>
                {elementoVef}
                <span>{elementoVef}</span>
                <strong>{children}</strong>
            </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleCLick}>
                    {text}
                </button>
            </aside>
        </article>
    )

}