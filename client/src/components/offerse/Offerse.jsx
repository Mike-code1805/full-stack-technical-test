import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { offersesAPI } from '../../axios/apiURL';
// import { initOfferses } from '../../redux/offerses/offersesActions';
import { ActionButtons } from './components/actionButtons/ActionButtons.jsx';

import './styles/offerse.scss'

export const Offerse = () => {

    const [offerses , setOfferses] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    // const dispatch = useDispatch();

    const getData = async () => {
        try {
            setIsLoading(true)
            const { data } = await offersesAPI.get('/api/offerses')
            setOfferses(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
        //dispatch -> request http
    }

    // useEffect(() => {
    //     dispatch(initOfferses())
    // }, [dispatch]);

    useEffect(() => {
        offersesAPI.get('/api/offerses')
        .then(({ data }) => setOfferses(data))
        getData();
    }, []);

    if (isloading) return <h2>is loading</h2>
    
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
                                <tr>
                                    <th scope="row">{item._id}</th>
                                    <td>{item.name}</td>
                                    <td> {item.characteristics.description} </td>
                                    <td><ActionButtons/></td> 
                                </tr>                      
                            ))
                        }
                </tbody>
            </table>
        </div>
    );
}
