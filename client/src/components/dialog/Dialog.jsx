import React, { useState } from "react";
import './styles/styles.scss'

const Dialog = () => {
    const [stateDialog, setStateDialog] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    console.log({name, price, description});

    const handleClickOpen = () => {        
        setStateDialog(true);
    }
    const handleClickClose = (e) => { 
        e.preventDefault();       
        setStateDialog(false);
    }
    return (  
        <div className={["dialogcontainer"]}>
            <button className={["button"]} onClick={handleClickOpen}>Agregar artículo</button>
            <dialog typeof="modal" className={["dialog"]} open={stateDialog}>
                <form>
                    <label>Ingrese nombre:</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Código"/>
                    <label>Ingresa descripción:</label>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Descripción"/>
                    <label>Ingrese precio:</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Precio"/>
                    <hr></hr>
                    <button onClick={handleClickClose}>Cerrar</button>
                    <input type="submit" value="Submit"/>
                </form> 
            </dialog>            
        </div>            
    );
}

export default Dialog;