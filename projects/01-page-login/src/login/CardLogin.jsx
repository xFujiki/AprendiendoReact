import { TextBoxLogin } from "./TextBoxLogin";

export function CardLogin(){

    return(
            <>
            <div className="cardLogin">
                <span style={{ marginBottom: '5px', display:'block',fontSize:'20px'}}>Bienvenido</span>
                <br/>
                <TextBoxLogin tituloText={"Usuario"} isPassword={false}/>
                <TextBoxLogin tituloText={"Contraseña"} isPassword={true}/>
                <button className="btn-ingresar">Ingresar</button>
            </div>
        </>
    )
}