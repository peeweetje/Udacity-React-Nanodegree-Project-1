import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../book-shelf/BookShelf';
import { ListBooksContents, OpenSearch } from './listBooks.styles';

interface IlistBooksProps {
  books: any[];
  onShelfChange: any;
}

const ListBooks: FC<IlistBooksProps> = ({ books, onShelfChange }) => {
  //Filter the books according to the shelf they belong to.
  const currentlyReading = books.filter(
    (book: { shelf: string }) => book.shelf === 'currentlyReading'
  );
  const wantToRead = books.filter(
    (book: { shelf: string }) => book.shelf === 'wantToRead'
  );
  const read = books.filter((book: { shelf: string }) => book.shelf === 'read');

  return (
    <ListBooksContents>
      <BookShelf
        bookshelfTitle='Currently Reading'
        bookshelfBooks={currentlyReading}
        onShelfChange={onShelfChange}
      />
      <BookShelf
        bookshelfTitle='Want to Read'
        bookshelfBooks={wantToRead}
        onShelfChange={onShelfChange}
      />
      <BookShelf
        bookshelfTitle='Read'
        bookshelfBooks={read}
        onShelfChange={onShelfChange}
      />
      <OpenSearch>
        <Link to='/search'>Add a book</Link>
      </OpenSearch>
    </ListBooksContents>
  );
};
export default ListBooks;
