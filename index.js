function Book(
    title, author, pages, status
)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
            return `${this.title} by ${this.author}, ${this.pages}, ${this.status}`;
    }
}

const book1 = new Book("penguins", "pengy", 230, "have read");
console.log(book1.info());