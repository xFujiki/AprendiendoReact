import { useState } from 'react'
import './TextBoxLogin.css'

export function TextBoxLogin({tituloText, isPassword}){
    const [esVisible,setVisibiblidad]=useState(false);
    const clickIcon=()=>{
        setVisibiblidad(!esVisible);
    }

    const srcEye="https://cdn-icons-png.flaticon.com/512/3423/3423234.png";
    const srcEyeSlash="https://cdn-icons-png.flaticon.com/512/565/565655.png";
    const typeTextBox=(isPassword)=>{
        if(isPassword){
            return esVisible ? "text":"password";
        }else{
            return "text";
        }
    };
    return(
        <>
        <div className="container-textBox">
            <span className="label-textbox">{tituloText}</span>
            <input className="cuadro-textbox" type={typeTextBox(isPassword)}></input>
            {isPassword && (
                <button className="btn-icon" onClick={clickIcon}>
                    <img className="icon-textbox" src={esVisible?srcEyeSlash:srcEye} alt="icon" />
                </button>
            )}
            <br/>
        </div>
        </>
    )
}