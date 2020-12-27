import React, {useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import SearchBooks from './components/search-books/SearchBooks'
import ListBooks from './components/list-books/ListBooks'
import * as BooksAPI from './utils/BooksAPI'
import {ListBooksTitle} from './appstyles'

const BooksApp = () => {
   let [books, setBooks] = useState([])


  useEffect(() => {
    BooksAPI
           .getAll()
           .then(results => {
            setBooks(results)
           })
   
  });

   const onShelfChange = (book, shelf) => {
       book.shelf = shelf
       setBooks(books => {
         return ({
           books: books
             .filter(b => b.id !== book.id)
             .concat([book])
         })
       })
         BooksAPI.update(book, shelf)
       }
      
    

  return( 
        <>
           <Route
             path="/"
             exact
             render={() => (
           <>
               <ListBooksTitle>
                 <h1>MyReads</h1>
               </ListBooksTitle>
               <ListBooks books={books} onShelfChange={onShelfChange}/>
             </>
           )}/>
  
          <Route
             path="/search"
             render={({history}) => (
             <SearchBooks
             onShelfChange={onShelfChange}
             history={history}
            books={books}/>)}
            />
        </>)
}

export default BooksApp;

