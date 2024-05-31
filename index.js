const myLibrary = [];

function Book(
    title, author, pages, status
) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.status}`;
    }
}

function addBookToLibrary() {
    const title = "bullshit"
    const authorName = "pengy"
    const pages = 33
    const status = "have read."
    myLibrary.push(new Book(title, authorName, pages, status));
}

function displayBooks(myLibrary) {
    for (let i = 0; i <= myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

