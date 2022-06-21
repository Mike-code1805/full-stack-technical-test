import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initOfferses } from '../../redux/offerses/offersesActions';
import { ActionButtons } from './components/actionButtons/ActionButtons.jsx';

import './styles/offerse.scss'

export const Offerse = () => {

    const dispatch = useDispatch();
    const { offerses } = useSelector(state => state.offerses);

    useEffect(() => {
        try {
            dispatch(initOfferses())
        } catch (error) {
            console.log(error);
        }        
    }, [dispatch]);

    return (
        <div className={["container"]}>
            <table className={["table"]}>
                <thead>
                    <tr>
                        <th scope="col">CODIGO</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            offerses.map((item) => (
                                <tr key={item._id}>
                                    <th scope="row">{item._id}</th>
                                    <td>{item.name}</td>
                                    <td> {item.characteristics.description} </td>
                                    <td><ActionButtons id={item._id}/></td> 
                                </tr>                      
                            ))
                        }
                </tbody>
            </table>
        </div>
    );
}
