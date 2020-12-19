import React from 'react'
import Book from '../book/Book'

const BookShelf =({bookshelfTitle, bookshelfBooks, onShelfChange}) =>{

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookshelfBooks
                        .map((book) => {
                            return <li key={book.id}>
                                <Book book={book} onShelfChange={onShelfChange}/>
                            </li>
                        })
                      }
                </ol>
            </div>
        </div>
    )
}

export default BookShelf