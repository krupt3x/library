const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function() {
    return `${this.title}, by ${this.author}, ${this.pages}, ${this.status}`;
  };
}

function addBookToLibrary() {
  let title = prompt("Enter title: ");
  let author = prompt("Author's name: ");
  let pages = prompt("No. of pages: ");
  let status = prompt("Have you read the book?");
  myLibrary.push(new Book(title, author, pages, status));
}

const dialog = document.querySelector("dialog");
const addBook = document.querySelector(".add-book");
const closeBtn = document.querySelector(".close-btn");

addBook.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

