import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Total = () => {
    
    const [info, setInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get('https:/localhost:5000/data')
                setInfo(res.data)
                console.log(res.data)
            } catch (error){
                console.log(error)
            }
        }
        fetchData()
    },[])

    return (
        <div className='cont-el-t'>
            <h4>Totals</h4>
            <span>911</span>   
        </div>
    )
}

export default Total ;