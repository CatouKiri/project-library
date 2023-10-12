const myLibrary = [
  {
    name: "Meditations", 
    author: "Marcus Aurelius",
    genre: "Philosophy",
    pages: "254",
    status: "reading"
  }
  {
    name: "Atomic Habits", 
    author: "James Clear",
    genre: "Self Help",
    pages: "285",
    status: "not read"
  }
  {
    name: "The Intelligent Investor", 
    author: "Benjamin Graham",
    genre: "Finance",
    pages: "623",
    status: "read"
  }
];

// const tableHead = document.querySelector("tr")

function Book(name, author, pages, description, genre) {
  // the constructor...
  this.name = name
  this.author = author
  this.pages = pages
  this.description = description
  this.genre = genre
}

function addBookToLibrary() {
  // do stuff here
}

// function displayBooks() {
//     const newRow = document.createElement("tr");
//     const bookName = document.createElement("td");
//     const bookAuthor = document.createElement("td");
//     const bookPages = document.createElement("td");
//     const bookDescription = document.createElement("td");
//     const bookGenre = document.createElement("td");
//     const bookStatus = document.createElement("td");
// }

// function bookStatus(name, status) {
//   this.name = name  
//   this.status = status
// }