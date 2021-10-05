import React from 'react';
import './Books.css'

const Books = (props) => {
    const {name, img, teacher} = props.books;
    return (

        <div className="books-details">
            <img style={{width:"180px", height:"250px"}} src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Writer: {teacher}</p>
            <button type="button" class="btn btn-primary btn-sm">Read More</button>
        </div>
    );
};

export default Books;