# MyReads - Book Tracking App

This Udacity project required me to take some starter code, which was a book tracking app containing a library of books.  I had to then add interactivity to the app by refactoring the code to use React.

## Installing

1. Clone this repo.
2. In a terminal, install all project dependencies with `npm install`.
3. Then, start the development server with `npm start`.
4. This will automatically open a webpage `localhost:3000`, where you can access the app.

## Backend Server

As part of the project, the backend server was provided by Udacity.

## The App

This bookshelf app allows you to select and categorize books you have read, are currently reading, or want to read.

The main page displays the following categories, which can contain a number of books:

* Currently reading
* Want to Read
* Read

Each book has a control, via which the user can amend the category, or bookshelf, the book
resides in.

In addition, the user can also select the link at the lower right of the page to access the search page.  Here the user can enter the title or author of the book to search for, with the results appearing automatically.

Note, that there is also a limited set of search terms that can also be used, but these are strictly limited to the words denoted in [SEARCH_TERMS.md](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md).

Similar to the main page, the user can move a selected book to a particular bookshelf, where it can be seen when returning to the main page.

## Acknowledgements

The Udacity starter code for this project can be found at their [Github page](https://github.com/udacity/reactnd-project-myreads-starter.git).

Details on how React works within this project can be found [here](https://reactjs.org/).
