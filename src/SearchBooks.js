import React from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import DebounceInput from 'react-debounce-input';

class SearchBooks extends React.Component {
    state = {
        searchResults: []
    }

    //Keeps track of the input value
    search = (e) => {
        const query = e.target.value;
        if (!query) {
            this.setState({searchResults: []});
            return;
        }

        //Call to the search API
        BooksAPI
            .search(query, 20)
            .then(searchResults => {
                if (!searchResults || searchResults.error) {
                    this.setState({searchResults: []});
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

    render() {
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
                            onChange={this.search}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResults && this
                            .state
                            .searchResults
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
}

export default SearchBooks