// library to store all books.
const myLibrary = [];

// constructor for making book objects.

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${this.title}, by ${this.author}, ${this.pages}, ${this.status}`;
  };
}

// takes input from the user and stores them in the form of objects inside the library(array).

function addBookToLibrary() {
  let title = prompt("Enter title: ");
  let author = prompt("Author's name: ");
  let pages = prompt("No. of pages: ");
  let status = prompt("Have you read the book?");
  myLibrary.push(new Book(title, author, pages, status));
}

//  displays all the books 

function displayBooks(books) {
  books.forEach(book => {
    console.table(book);
  });
}

const modal = document.querySelector('#modal');
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');


// opens modal
openModal.addEventListener("click", () => {
  modal.show()
})

// close modal

closeModal.addEventListener("click", () => {
  modal.close()
})

