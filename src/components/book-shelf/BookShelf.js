import React, { useState } from 'react'
import Book from '../book/Book'
import {BookShelfs, BookShelfTitle, BookShelfBooks, BooksGrid} from './BookShelf.styles';
import ReactStars from "react-rating-stars-component";


const BookShelf =({bookshelfTitle, bookshelfBooks, onShelfChange}) =>{
    const [newRating, setNewRating] = useState([]);
   
    const starConfig = {
        size: 20,
        value: 0,
        count: 5,
        a11y: true,
      isHalf: true,
      };

      

      const ratingStarsChanged = () => {
        return(
           setNewRating(newRating)
            );
          
       };

    
    return ( 
        <BookShelfs>
            <BookShelfTitle>{bookshelfTitle}</BookShelfTitle>
            <BookShelfBooks>
                <BooksGrid>
                    {bookshelfBooks
                        .map((book) => {
                            return <li key={book.id}>
                                <Book book={book} onShelfChange={onShelfChange}/>
                                <ReactStars  onChange={ratingStarsChanged} {...starConfig} />
                            </li>
                        })
                      }
                       
                </BooksGrid>
            </BookShelfBooks>
        </BookShelfs>
    )
}

export default BookShelf