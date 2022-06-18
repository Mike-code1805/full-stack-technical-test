import React from 'react';
import './styles/styles.scss'

export const ActionButtons = () => {
    return (
        <div className='actionButton'>
            <button> <i className="fa-solid fa-trash style-trash"></i> </button>
            <button> <i className="fa-solid fa-pen-to-square style-edit"></i> </button>
        </div>
    );
}