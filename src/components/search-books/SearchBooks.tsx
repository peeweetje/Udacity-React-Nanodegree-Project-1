import React, { FC, useState } from 'react';
import * as BooksAPI from '../../utils/BooksAPI';
import Book, { BookType } from '../book/Book';
import DebounceInput from 'react-debounce-input';
import { BooksGrid } from '../book-shelf/BookShelf.styles';
import {
  SearchBooksBar,
  SearchBooksInputWrapper,
  SearchBooksResults,
  CloseSearch,
} from './SearchBooks.styles';

interface IsearchBooksProps {
  books: BookType[];
  onShelfChange: any;
  history: any;
}

const SearchBooks: FC<IsearchBooksProps> = ({ books, onShelfChange }) => {
  const [searchResults, setSearchResults] = useState([]);

  //Keeps track of the input value
  const searchForBooks = (e: { target: { value: any } }) => {
    const query = e.target.value;
    if (!query) {
      setSearchResults([]);
      return;
    }

    //Call to the search API
    BooksAPI.search(query, 20).then((results) => {
      if (!results || results.error) {
        setSearchResults([]);
        return;
      }
      // map over the books returned from the search API, and check if they are on the
      // shelf or not
      const booksFound = results.map((book: { id: string; shelf: string }) => {
        const bookOnShelf = books.find((b: any) => b.id === book.id);
        book.shelf = bookOnShelf ? bookOnShelf.shelf : 'none';
        return book;
      });
      setSearchResults(booksFound);
    });
  };

  return (
    <>
      <SearchBooksBar>
        <CloseSearch to='/'>Close</CloseSearch>
        <SearchBooksInputWrapper>
          <DebounceInput
            minLength={2}
            debounceTimeout={325}
            element='input'
            type='text'
            placeholder='Search by title or author'
            onChange={searchForBooks}
          />
        </SearchBooksInputWrapper>
      </SearchBooksBar>
      <SearchBooksResults>
        <BooksGrid>
          {searchResults?.map((book: BookType) => (
            <li key={book.id}>
              <Book book={book} onShelfChange={onShelfChange} />
            </li>
          ))}
        </BooksGrid>
      </SearchBooksResults>
    </>
  );
};

export default SearchBooks;
