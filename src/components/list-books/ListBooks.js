import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from '../book-shelf/BookShelf'
import {ListBooksContents, OpenSearch } from './listBooks.styles'


const  ListBooks= ({books, onShelfChange}) =>{

   //Filter the books according to the shelf they belong to.
   const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading') 
   const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
   const read = books.filter((book) => book.shelf === 'read')
  
 
   return(
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
         <OpenSearch >
            <Link to="/search">Add a book</Link>
        </OpenSearch >
    </ListBooksContents>
  )
}
export default ListBooks