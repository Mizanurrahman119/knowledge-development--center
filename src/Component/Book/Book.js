import React from 'react';
import './Book.css'

const Book = (props) => {
    const {name, teacher, img} = props.book;
    return (
        <div className= "book-details">
            <div className= "book-detail">
            <img style={{width:"200px", height:"250px"}} src={img} alt="" />
            <h3>Subject: {name}</h3>
            <h5>Writer: {teacher}</h5>
            </div>

        </div>
    );
};

export default Book;