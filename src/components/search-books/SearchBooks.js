import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from '../../utils/BooksAPI';
import Book from '../book/Book';
import DebounceInput from 'react-debounce-input';

const SearchBooks = ({books, onShelfChange}) =>  {
    const [searchResults, setSearchResults] =  useState([])
   
    //Keeps track of the input value
     const searchForBooks = (e) => {
        const query = e.target.value;
        if (!query) {
           setSearchResults([]);
            return;
        }

        //Call to the search API
        BooksAPI
            .search(query, 20)
            .then(results => {
                if (!results || results.error) {
                   setSearchResults([]);
                    return;
                }
                // map over the books returned from the search API, and check if they are on the
                // shelf or not
                const booksFound = results.map((book) => {
                    const bookOnShelf = books
                        .find(b => b.id === book.id);
                    book.shelf = bookOnShelf
                        ? bookOnShelf.shelf
                        : "none";
                    return book; 
                })
            
                setSearchResults(booksFound);

                
            });
    };

        return (
            <div className="search-books" >
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={325}
                            element="input"
                            type="text"
                            placeholder="Search by title or author"
                            onChange={searchForBooks}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResults?.map((book, index) => (
                                <li key={book.id + index}>
                                    <Book book={book} onShelfChange={onShelfChange}/>   
                                </li>
                            ))}
                               
                    </ol>
                </div>
            </div>

        )
}

export default SearchBooks