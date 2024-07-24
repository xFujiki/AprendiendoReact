import { useState } from "react";

export function Casilla({indice,stateJuego,setStateJuego, tableroActual,setTableroActual,switchTurno,setTurno}){

    const handleTurno = () => {
        setTurno(!switchTurno);
    };

    const [stateBox,setBox]=useState("blank");

    const handleBox=()=>{
        if(stateBox=="blank" && stateJuego){
            const nuevoTablero=[...tableroActual];
            //Esto es una mala practica?
            /*
            tableroActual[indice]=1;
            setTableroActual(tableroActual);
            */
            if(switchTurno){
                setBox("circle");
                nuevoTablero[indice]=1;
            }else{
                setBox("ex");
                nuevoTablero[indice]=2;
            }

            setTableroActual(nuevoTablero);
            /*const arrayComoCadena = nuevoTablero.join(", ");
            alert(arrayComoCadena);*/

            /*const arrayComoCadena = tableroActual.join(", ");
            alert(arrayComoCadena);*/
            
            handleTurno();
            vefGanador(nuevoTablero); 
            /*aqui debo pasarle el tablero actualizado,
             no utilizar el que pase como parametro, 
             ya que este no se actualiza solo (es una prop, debe cambiar en el padre)*/
        }
    };

    const vefGanador=(tablero)=>{
        for (let i = 0; i < 3; i++) {
            //revisando col
            if(tablero[i]!=0 && tablero[i+3]!=0 && tablero[i+6]!=0 
                && tablero[i]==tablero[i+3] && tablero[i]==tablero[i+6]){
                    setStateJuego(false);
                    //alert("Tenemos un ganador");
            }
            //revisando fila
            if(tablero[i*3]!=0 && tablero[3*i+1]!=0 && tablero[3*i+2]!=0 
                && tablero[i*3]==tablero[3*i+1] && tablero[i*3]==tablero[3*i+2]){
                    setStateJuego(false);
                    //alert("Tenemos un ganador");
            }
            //revisando diagonales
            if(tablero[0]!=0 && tablero[4]!=0 && tablero[8]!=0 
                && tablero[0]==tablero[4] && tablero[0]==tablero[8]){
                    setStateJuego(false);
                    //alert("Tenemos un ganador");
            }
            if(tablero[6]!=0 && tablero[4]!=0 && tablero[2]!=0 
                && tablero[6]==tablero[4] && tablero[6]==tablero[2]){
                    setStateJuego(false);
                    //alert("Tenemos un ganador");
            }
        }

        /*Falta el caso en que ninguno gana, pero es solo un estado mas ganador y setGanado al juego, seria un enum
        1,2,3 o "primero", "segundo", "ninguno" y eso se imprimiria en el padre*/
    }

    return(
        <>
        <button className="casilla-btn" onClick={handleBox}>
            {stateBox==="ex" && <img src="https://cdn.icon-icons.com/icons2/1238/PNG/512/letterx_83737.png"></img>}
            {stateBox==="circle" && <img src="https://cdn-icons-png.freepik.com/512/59/59870.png"></img>}
        </button>
        </>
    )
}