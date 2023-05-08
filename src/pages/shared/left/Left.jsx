import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Left = () => {

    const [catagories, setCatagories] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data=>setCatagories(data))
    }, [])

    return (
        <div>
            <h1>All Catagory</h1>
            <div className='ps-4 pt-4'>
            {
                catagories.map(catagory => < p key={catagory.id}> <Link to={`catagories/${catagories.id}`} className='text-decoration-none'>{catagory.name }</Link></p>)
            }
            </div>
        </div>
    );
};

export default Left;