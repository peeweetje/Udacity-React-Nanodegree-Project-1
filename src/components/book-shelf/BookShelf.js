import React from 'react'
import Book from '../book/Book'
import {BookShelfs, BookShelfTitle, BookShelfBooks, BooksGrid} from './BookShelf.styles';

const BookShelf =({bookshelfTitle, bookshelfBooks, onShelfChange}) =>{
    

    return ( 
        <BookShelfs>
            <BookShelfTitle>{bookshelfTitle}</BookShelfTitle>
            <BookShelfBooks>
                <BooksGrid>
                    {bookshelfBooks
                        .map((book) => {
                            return <li key={book.id}>
                                <Book book={book} onShelfChange={onShelfChange}/>
                            </li>
                        })
                      }
                </BooksGrid>
            </BookShelfBooks>
        </BookShelfs>
    )
}

export default BookShelf