import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOffer, editOffer } from '../../../../redux/offerses/offersesActions';
import { EditModelView } from '../../../edit/EditModelView';
import './styles/styles.scss'

export const ActionButtons = ({id}) => {

    const [idOffer, setIdOffer] = useState("");
    const [name, setNewName] = useState("");
    const [description, setNewDescription] = useState("");
    const [price, setNewPrice] = useState("");
    const [offerseToEdit, setOfferseToEdit] = useState();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const {offerses} = useSelector(state => state.offerses)    
    const [offer] = offerses.filter(offer => offer._id === id); 

    const deleteOfferse = () => {        
        try {
            dispatch(deleteOffer(offer._id))
        } catch (error) {
            console.log(error);
        }   
    }

    const editOfferse = () => {
        setOfferseToEdit(offer);
        setIdOffer(offer._id);
        setNewName(offer.name);
        setNewDescription(offer.characteristics.description);
        setNewPrice(offer.characteristics.price);
        setShowModal(true);
    }

    const saveEditOfferse = () => {
        const newOfferse = {
            ...offerseToEdit,
            name,
            description,
            price
        };
        dispatch(editOffer(newOfferse));
        setShowModal(false);
    }

    return (
        <div className='actionButton'>
            <button
                onClick={deleteOfferse}
            > <i className="fa-solid fa-trash style-trash"></i> </button>
            <button
                onClick={editOfferse}
            > <i className="fa-solid fa-pen-to-square style-edit"></i> </button>
            <EditModelView 
                show={showModal}
                cancel={() => setShowModal(false)}
                handleName={(e) => setNewName(e.target.value)}
                handleDescription={(e) => setNewDescription(e.target.value)}
                handlePrice={(e) => setNewPrice(e.target.value)}
                id={idOffer}
                name={name}
                description={description}
                price={price}
                save={saveEditOfferse}
            />
        </div>
        
    );
}