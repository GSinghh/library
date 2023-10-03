class Book {
    constructor(title, author, numPages, finished) {
            this.title = title;
            this.author = author;
            this.numPages = numPages;
            this.finished = finished;
    };
}

const myLibrary = [];

const addBook = (Book) =>
{
    myLibrary.push(Book);
}
