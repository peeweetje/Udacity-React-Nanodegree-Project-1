import React, { useState, useEffect, FC } from 'react';
import { Route } from 'react-router-dom';
import SearchBooks from './components/search-books/SearchBooks';
import ListBooks from './components/list-books/ListBooks';
import * as BooksAPI from './utils/BooksAPI';
import { ListBooksTitle } from './appstyles';

const BooksApp: FC = () => {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((results) => {
      setBooks(results);
    });
  }, []);

  const onShelfChange = (book: any, shelf: any) => {
    book.shelf = shelf;
    setBooks((books) => {
      return books.filter((b: any) => b.id !== book.id).concat([book] as any);
    });
    BooksAPI.update(book, shelf);
  };

  return (
    <>
      <Route
        path='/'
        exact
        render={() => (
          <>
            <ListBooksTitle>
              <h1>Book Shelfs</h1>
            </ListBooksTitle>
            <ListBooks books={books} onShelfChange={onShelfChange} />
          </>
        )}
      />

      <Route
        path='/search'
        render={({ history }) => (
          <SearchBooks
            onShelfChange={onShelfChange}
            history={history}
            books={books}
          />
        )}
      />
    </>
  );
};

export default BooksApp;
