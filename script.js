const myLibrary = [
  {
    name: "Meditations",
    author: "Marcus Aurelius",
    genre: "Philosophy",
    pages: "254",
    status: "reading"
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    pages: "285",
    status: "not read"
  },
  {
    name: "The Intelligent Investor",
    author: "Benjamin Graham",
    genre: "Finance",
    pages: "623",
    status: "read"
  },
];

function book(name, author, genre, pages, status) {
  this.name = name;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.status = status;
}

let inputName = document.querySelector("#input-name").value;
let inputAuthor = document.querySelector(".input-author");
let inputGenre = document.querySelector(".input-genre");
let inputPages = document.querySelector(".input-pages");
let inputStatus = document.querySelector(".input-status");

// let inputName = document.getElementById("input-name").value;
// let inputAuthor = document.getElementById("input-author").value;
// let inputGenre = document.getElementById("input-genre").value;
// let inputPages = document.getElementById("input-pages").value;
// let inputStatus = document.getElementById("input-status").value;

document.getElementById("add-button").addEventListener("click", addBookToLibrary(inputName,inputAuthor,inputGenre,inputPages,inputStatus));

function addBookToLibrary(name, author, genre, pages, status) {
  let newBook = new book(name, author, genre, pages, status);
  myLibrary.push(newBook);
}

function displayBookToLibrary() {
  let tableNumber = 1;
  for (const book of myLibrary) {
    const tableBody = document.querySelector("tbody");
    const newRow = document.createElement("tr");
    const bookNameColumn = document.createElement("td");
    const bookAuthorColumn = document.createElement("td");
    const bookPagesColumn = document.createElement("td");
    const bookGenreColumn = document.createElement("td");
    const bookStatusColumn = document.createElement("td");
      bookStatusColumn.setAttribute('class','book-status-column');
    const deleteColumn = document.createElement("td");
      deleteColumn.setAttribute('class','delete-button-column');
    const deleteButton = document.createElement("button");
      deleteButton.setAttribute('class','delete-button');

    tableBody.appendChild(newRow).className = `table-row-${tableNumber}`;
    newRow.appendChild(bookNameColumn).textContent = `${book.name}`;
    newRow.appendChild(bookAuthorColumn).textContent = `${book.author}`;
    newRow.appendChild(bookGenreColumn).textContent = `${book.genre}`;
    newRow.appendChild(bookPagesColumn).textContent = `${book.pages}`;
    newRow.appendChild(bookStatusColumn).textContent = `${book.status}`;
    newRow.appendChild(deleteColumn);
    deleteColumn.appendChild(deleteButton).textContent = "Delete";
    tableNumber++;
  }
}

displayBookToLibrary();