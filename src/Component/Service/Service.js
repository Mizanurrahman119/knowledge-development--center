import React, { useEffect, useState } from 'react';
import Books from '../books/Books';
import './Service.css'

const Service = () => {
    const [booked, setBooked] = useState([])
    useEffect( () => {
        fetch('./library.JSON')
        .then(res => res.json())
        .then(data => setBooked(data))
    },[])
    return (
        <div className="book-content">
            {
                booked.map(books => <Books books={books}></Books>)
            }
        </div>
    );
};

export default Service;