import React from 'react';
import { offers } from '../../jsonData';
import { ActionButtons } from './components/actionButtons/ActionButtons.jsx';

import './styles/offerse.scss'

export const Offerse = () => {
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
                        offers.map((item) => (
                            <tr>
                                <th scope="row">{item.id}</th>
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
