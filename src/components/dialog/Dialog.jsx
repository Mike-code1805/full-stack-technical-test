import React, { useState } from "react";
import './styles/styles.scss'

const Dialog = () => {
    const [stateDialog, setStateDialog] = useState(false);
    const handleClickOpen = () => {        
        setStateDialog(true);
    }
    const handleClickClose = () => {        
        setStateDialog(false);
    }
    return (  
        <div className={["dialogcontainer"]}>
            <button className={["button"]} onClick={handleClickOpen}>Agregar artículo</button>
            <dialog typeof="modal" className={["dialog"]} open={stateDialog}>
                <form>
                    <label>Ingrese código:</label>
                    <input type="number" placeholder="Código"/>
                    <label>Ingresa descripción:</label>
                    <input type="text" placeholder="Descripción"/>
                    <label>Ingrese precio:</label>
                    <input type="number" placeholder="Precio"/>
                    <hr></hr>
                    <button onClick={handleClickClose}>Cerrar</button>
                    <input type="submit" value="Submit"/>
                </form> 
            </dialog>            
        </div>            
    );
}

export default Dialog;