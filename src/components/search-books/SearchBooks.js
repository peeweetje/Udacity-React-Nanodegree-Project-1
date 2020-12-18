import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from '../../utils/BooksAPI';
import Book from '../book/Book';
import DebounceInput from 'react-debounce-input';

const SearchBooks = () =>  {
    const [searchResults, setSearchResults] =  useState([])
   
    //Keeps track of the input value
     const search = (e) => {
        const query = e.target.value;
        if (!query) {
           setSearchResults({searchResults: []});
            return;
        }

        //Call to the search API
        BooksAPI
            .search(query, 20)
            .then(searchResults => {
                if (!searchResults || searchResults.error) {
                   setSearchResults({searchResults: []});
                    return;
                }
                // map over the books returned from the search API, and check if they are on the
                // shelf or not
                searchResults = searchResults.map((book) => {
                    const bookOnShelf = this
                        .props
                        .books
                        .find(b => b.id === book.id);
                    book.shelf = bookOnShelf
                        ? bookOnShelf.shelf
                        : "none";
                    return book;
                });

                this.setState({searchResults});
            });
    };

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={325}
                            element="input"
                            type="text"
                            placeholder="Search by title or author"
                            onChange={search}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResults && 
                            searchResults
                            .map((book, index) => (
                                <li key={book.id + index}>
                                    <Book book={book} onShelfChange={this.props.onShelfChange}/>
                                </li>
                            ))}
                    </ol>
                </div>
            </div>

        )
}

export default SearchBooks