import React, {useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import SearchBooks from './components/search-books/SearchBooks'
import ListBooks from './components/list-books/ListBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'


const BooksApp = () => {
   let [books, setBooks] = useState([])


  useEffect(() => {
    BooksAPI
           .getAll()
           .then(results => {
            setBooks(results)
           })
   
  }, []);

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
        <div className="app">
           <Route
             path="/"
             exact
             render={() => (
           <div>
               <div className="list-books-title">
                 <h1>MyReads</h1>
               </div>
               <ListBooks books={books} onShelfChange={onShelfChange}/>
             </div>
           )}/>
  
          <Route
             path="/search"
             render={({history}) => (
             <SearchBooks
             onShelfChange={onShelfChange}
             history={history}
            books={books}/>)}
            />
        </div>)
}

export default BooksApp;

