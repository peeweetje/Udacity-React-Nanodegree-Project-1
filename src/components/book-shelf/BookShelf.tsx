import React, { FC, useState } from 'react';
import Book, { BookType } from '../book/Book';
import {
  BookShelfs,
  BookShelfTitle,
  BookShelfBooks,
  BooksGrid,
} from './BookShelf.styles';
import ReactStars from 'react-rating-stars-component';

interface IbookShelfProps {
  bookshelfTitle: string;
  bookshelfBooks: any;
  onShelfChange: () => void;
}

const BookShelf: FC<IbookShelfProps> = ({
  bookshelfTitle,
  bookshelfBooks,
  onShelfChange,
}) => {
  const [newRating, setNewRating] = useState([]);

  const starConfig = {
    size: 20,
    value: 0,
    count: 5,
    a11y: true,
    isHalf: true,
  };

  const ratingStarsChanged = () => {
    return setNewRating(newRating);
  };

  return (
    <BookShelfs>
      <BookShelfTitle>{bookshelfTitle}</BookShelfTitle>
      <BookShelfBooks>
        <BooksGrid>
          {bookshelfBooks.map((book: BookType) => {
            return (
              <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange} />
                <ReactStars onChange={ratingStarsChanged} {...starConfig} />
              </li>
            );
          })}
        </BooksGrid>
      </BookShelfBooks>
    </BookShelfs>
  );
};

export default BookShelf;
