import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ fetchdata }) => {

    const books = fetchdata.map((book, index) => {
        let { title, subtitle, publisher, publishedDate, description, imageLinks,
            infoLink } = book.volumeInfo;
        return (
            <div key={index} className="book">
                <a href={infoLink} target="_blank">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{publisher}, {publishedDate}</p>
                    <img src={imageLinks !== undefined ? imageLinks.smallThumbnail : ''} alt="" />
                    <p>{description}</p>
                </a>
            </div>
        );
    });

    return (
        <div className="gallery">
            {books}
        </div>
    );

};

Gallery.propTypes = {
    fetchdata: PropTypes.array
}

export default Gallery;
