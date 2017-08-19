
## My-Reads: A Book Tracking App


This is the first project for the Udacity React Nanodegree programm.
This application allows you to search for books and place the selected books on to shelf. There are two pages: The Homepage shows the three bookshelfs, currently reading, want to read, and read. The search page will allow the user to search for books. 

## Getting Started

After downloading or cloning the repository  run `npm install`. 
Once installed use `npm start` to launch the project.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found Down below. That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## Allowed Search Terms

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend.



## PROJECT SPECIFICATION

### Application Setup

#### MEETS SPECIFICATIONS

Is the application easy to install and start?

The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.

Does the application include README with clear installation and launch instructions?

A README is included with the project. The README includes clear instructions for installing and launching the project.

## Main Page

### CRITERIA
### MEETS SPECIFICATIONS

Does the main page show three categories (or “bookshelves”) for books (currently reading, want to read, and read)?

The main page shows 3 shelves for books.

Does the main page allow users to move books between shelves?

The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance.

Does information persist between page refreshes?

When the browser is refreshed, the same information is displayed on the page.

## Search Page

### CRITERIA
### MEETS SPECIFICATIONS

Does the search page have a search input that lets users search for books?

The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.

Do the search results allow a user to categorize a book as “currently reading”, “want to read”, or “read”?

Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

Do selections made on the search page show up on the main page?

When an item is categorized on the search page, and the user navigates to the main page, it appears on that shelf in the main page.

## Routing

### CRITERIA
### MEETS SPECIFICATIONS

Does the main page link to the search page?

The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.

Does the search page link back to the main page?

The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

## Code Functionality

### CRITERIA
### MEETS SPECIFICATIONS

Does the project code handle state management appropriately?

Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.

Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.

Is JSX formatted properly?

All JSX code is formatted properly and functional.








## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

