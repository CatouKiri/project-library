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
  }
];

// function Book(name, author, pages, description, genre) {
//   this.name = name
//   this.author = author
//   this.pages = pages
//   this.description = description
//   this.genre = genre
// }

function addBookToLibrary() {
    let tableNumber = 1;

    for (const book of myLibrary) {
      const newRow = document.createElement("tr");
      const bookName = document.createElement("td");
      const bookAuthor = document.createElement("td");
      const bookPages = document.createElement("td");
      const bookGenre = document.createElement("td");
      const bookStatus = document.createElement("td");
      const tableBody = document.querySelector("tbody");

      tableBody.appendChild(newRow).className = `table-row-${tableNumber}`;
      newRow.appendChild(bookName).textContent = `${book.name}`;
      newRow.appendChild(bookAuthor).textContent = `${book.author}`;
      newRow.appendChild(bookGenre).textContent = `${book.genre}`;
      newRow.appendChild(bookPages).textContent = `${book.pages}`;
      newRow.appendChild(bookGenre).textContent = `${book.genre}`;
      newRow.appendChild(bookStatus).textContent = `${book.status}`;
      tableNumber++;
    }
    // for (const book of myLibrary) {
    //   console.log("Name: " + book.name);
    //   console.log("Author: " + book.author);
    //   console.log("Genre: " + book.genre);
    //   console.log("Pages: " + book.pages);
    //   console.log("Status: " + book.status);
    //   console.log("-----------");
    // }
}

addBookToLibrary();