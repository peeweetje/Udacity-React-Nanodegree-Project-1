import React, { FC } from 'react';
import {
  BookContainer,
  BookTop,
  BookCover,
  BookShelfChanger,
  BookTitle,
  BookAuthors,
} from './book.styles';

interface IbookProps {
  book: any;
  onShelfChange: any;
}

const Book: FC<IbookProps> = ({ book, onShelfChange }) => {
  const ShelfChanger = (e: { target: { value: any } }) => {
    const shelf = e.target.value;
    onShelfChange(book, shelf);
  };

  let image = book.imageLinks
    ? book.imageLinks.thumbnail
    : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';

  return (
    <BookContainer>
      <BookTop>
        <BookCover
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${image}")`,
          }}
        />
        <BookShelfChanger>
          <select onChange={ShelfChanger} value={book.shelf}>
            <option value='none' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </BookShelfChanger>
      </BookTop>
      <BookTitle>{book.title}</BookTitle>
      <BookAuthors>
        {book.authors ? book.authors.join(', ') : '  Author Unknown '}
      </BookAuthors>
    </BookContainer>
  );
};

export default Book;
