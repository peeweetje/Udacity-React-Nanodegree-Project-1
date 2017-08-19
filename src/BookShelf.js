import React from 'react'
import Book from './Book'

function BookShelf(props) {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props
                        .bookshelfBooks
                        .map((book) => {
                            return <li key={book.id}>
                                <Book book={book} onShelfChange={props.onShelfChange}/>
                            </li>
                        })
                      }
                </ol>
            </div>
        </div>
    )
}

export default BookShelf