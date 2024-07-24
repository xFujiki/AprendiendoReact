import { useState } from "react";
import { Casilla } from "./Casilla"
import "./Matriz.css"
export function Matriz(){
    //Codigo para identificar el turno:
    const [switchTurno,setTurno]=useState(true);

    const labelTurno=switchTurno?"Es el turno del jugador 1":"Es el turno del jugador 2";

    //Codigo para actualizar el tablero en los hijos
    const [tableroActual,setTableroActual]=useState(Array(9).fill(0));

    //Codigo para identificar al ganador:
    const [stateJuego,setStateJuego]=useState(true);

    const handleGanador=()=>{
        return switchTurno ? "2" : "1";
    }
    
    const handleReset=()=>{
        setStateJuego(true);
        setTableroActual(Array(9).fill(0));
        setTurno(true);
    }

    return(
        <>
            <div className="juego-container">
                {stateJuego && <span>{labelTurno}</span>}
                <div className="matriz-container">
                    {/*Forma 2 de Realizar la disposicion*/}
                    {stateJuego && tableroActual.map((c,index) => (
                        <Casilla key={index} indice={index} 
                        stateJuego={stateJuego} setStateJuego={setStateJuego}
                        tableroActual={tableroActual} setTableroActual={setTableroActual} 
                        switchTurno={switchTurno} setTurno={setTurno}/>
                    ))}
                    {!stateJuego && (
                        <>
                        <div id="blank"></div>
                        <div className="mensajeGanador">
                            <span>{`Felicidades jugador ${handleGanador()}`}</span>
                            <button onClick={handleReset}>Reiniciar Juego</button>
                        </div>
                        </>
                    )
                    }
                    {/*Forma 1 de Realizar la disposicion*/}

                    {/*
                    <div className="fila-matriz">
                        <Casilla switchTurno={switchTurno} setTurno={setTurno}/>
                        <Casilla switchTurno={switchTurno} setTurno={setTurno}/>
                        <Casilla switchTurno={switchTurno} setTurno={setTurno}/>
                    </div>
                    <div className="fila-matriz">
                        <Casilla switchTurno={switchTurno} setTurno={setTurno}/>
                        <Casilla switchTurno={switchTurno} setTurno={setTurno}/>
                        <Casilla switchTurno={switchTurno} setTurno={setTurno}/>
                    </div>
                    <div className="fila-matriz">
                        <Casilla switchTurno={switchTurno} setTurno={setTurno}/>
                        <Casilla switchTurno={switchTurno} setTurno={setTurno}/>
                        <Casilla switchTurno={switchTurno} setTurno={setTurno}/>
                    </div>
                    */}
                </div>
            </div>  
        </>
    )
}