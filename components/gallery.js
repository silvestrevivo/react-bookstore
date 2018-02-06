import React, { Component } from 'react';

const Gallery = ({ datafetch }) => {
    const gallery = datafetch.map((book, index) => {
        console.log(book.volumeInfo);
        let {
            title,
            subtitle,
            publisher,
            publishedDate,
            description,
            imageLinks,
            infoLink
        } = book.volumeInfo;
        return (
            <li key={index}>
                <a href={infoLink} target="_blank">
                    <h3>{title}</h3>
                    <h5>{subtitle}</h5>
                    <p>
                        {publisher}, {publishedDate}
                    </p>
                </a>
                <img
                    src={
                        imageLinks !== undefined
                            ? imageLinks.smallThumbnail
                            : ''
                    }
                    alt="image-book"
                />
                <p>{description}</p>
            </li>
        );
    });

    return (
        <div>
            <h3 className="text-center">gallery component</h3>
            <ul>{gallery.slice(0, 6)}</ul>
        </div>
    );
};

export default Gallery;
