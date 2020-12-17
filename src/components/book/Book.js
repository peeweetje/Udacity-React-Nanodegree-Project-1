import React from 'react'

const Book = ({book, onShelfChange}) => {

     const ShelfChanger = (e) => {
        const shelf = e.target.value;
     onShelfChange(book, shelf);
    };

    let image = book.imageLinks ? book.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'

    return (
        <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${ image}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}/>
            <div className="book-shelf-changer">
                <select onChange={ShelfChanger} value={book.shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
             </div>
         </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(", ")  :"  Author Unknown " }</div>
    </div>

    )
}

export default Book;

