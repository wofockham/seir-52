import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = (props) => {

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');

    const _search = async (event) => {
        event.preventDefault();
        const { data } = await axios.get('https://www.googleapis.com/books/v1/volumes?q=title:' + title);
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        setCover(cover);
    };

    return (
        <div>
            <form onSubmit={ _search }>
                <label>
                    Book title:
                    <input
                      type="search"
                      placeholder="Jaws"
                      autoFocus 
                      required
                      onChange={ (e) => setTitle(e.target.value) } />
                </label>
            
                <button>Search</button>
            </form>

            <img src={ cover } />
        </div>
    );

};

export default BookSearch;