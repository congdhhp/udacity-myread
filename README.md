# MyReads Project

## Project Overview

The **MyReads** project is a bookshelf app that allows users to categorize books they have read, are currently reading, or want to read. This app was built as the final assessment for Udacity's React Fundamentals course, focusing on using React to create dynamic user interfaces and managing state effectively across components.

The app allows users to move books between three shelves:
1. **Currently Reading**
2. **Want to Read**
3. **Read**

In addition to this, users can search for new books using the provided search functionality and add them to their shelves.

## Project Features

- View books categorized into different shelves.
- Change the category of a book using a dropdown menu.
- Search for new books to add to the shelves.
- The app persists shelf states by interacting with an external API.

## Installation and Setup

To get the project up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/congdhhp/udacity-myread.git

2. **Navigate to the project directory:**
   ```bash
   cd myreads

3. **Install the project dependencies::**
   ```bash
   npm install

4. **Start the development server:**
   ```bash
   npm start

The app will open in your default browser at `http://localhost:3000`


## Project Structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## How to Use the App

- **Viewing and organizing books**: When the app starts, you will see three bookshelves: "Currently Reading", "Want to Read", and "Read". You can move books between shelves by selecting an option from the dropdown menu on each book.
- **Searching for books**: Click the "Add a book" button to go to the search page. Type in the search box to find new books. The search results will show books that can be added to your shelves.

Note: The backend API is limited to a set of specific search terms. You can find the available search terms in the SEARCH_TERMS.md file.

## Author

This project was developed by **Cong Do Hong** as part of the Udacity React Nanodegree program.

## License

This project is licensed under the MIT License - see the LICENSE file for details.