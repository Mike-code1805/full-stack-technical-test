import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createOffer } from "../../redux/offerses/offersesActions";
import { CreateOfferse } from "./CreateOfferse";
import './styles/styles.scss'

const Dialog = () => {
    const [stateDialog, setStateDialog] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    
    const dispatch = useDispatch();

    const handleClickOpen = () => {        
        setStateDialog(true);
    }
    
    const saveOfferse = () => {
        const offer = {
            name,
            characteristics: ({
                name,
                price: parseInt(price),
                description
            })     
        };
        console.log(offer);
        dispatch(createOffer(offer));
        setName("");
        setDescription("");
        setPrice(0);
    }
    return (  
        <div className={["dialogcontainer"]}>
            <button className={["buttonAdd"]} onClick={handleClickOpen}>Agregar artículo</button>
            {/* <dialog typeof="modal" className={["dialog"]} open={stateDialog}>
                <form>
                    <label>Ingrese nombre:</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre"/>
                    <label>Ingresa descripción:</label>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Descripción"/>
                    <label>Ingrese precio:</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Precio"/>
                    <hr></hr>
                    <button onClick={handleClickClose}>Cerrar</button>
                    <button onClick={saveOfferse}> Crear </button>
                </form> 
            </dialog>             */}
            <CreateOfferse
                show={stateDialog}
                cancel={() => setStateDialog(false)}
                handleName={(e) => setName(e.target.value)}
                handleDescription={(e) => setDescription(e.target.value)}
                handlePrice={(e) => setPrice(e.target.value)}
                save={saveOfferse}
            />
        </div>            
    );
}

export default Dialog;