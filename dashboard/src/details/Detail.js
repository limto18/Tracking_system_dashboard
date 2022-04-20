import React from 'react'
import Total from './total/Total';
import Retravailler from './retravailler/Retravailler';
import Jetter from './jetter/Jetter';
import Objectif from './objectif/Objectif';
import Conforme from './conforme/Conforme';
import './detail.css';


const Detail = () => {
    return (
        <div className='cont-group'>
             <Total />
            <Retravailler />
            <Jetter />
            <Objectif />
            <Conforme /> 
        </div>
    )
}

export default Detail ;