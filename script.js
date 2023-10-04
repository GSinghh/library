class Book {
    constructor(title, author, numPages, finished) {
            this.title = title;
            this.author = author;
            this.numPages = numPages;
            this.finished = finished;
    };
}

const myLibrary = [];
const openDialogButton = document.getElementById('open-dialog');
const dialog = document.getElementById('dialog-input');
const bookName = document.getElementById('name');
const authorName = document.getElementById('author');
const totalPages = document.getElementById('pages');
const submit = document.getElementById('submit');

const addBook = (Book) => {
    myLibrary.push(Book);
}


openDialogButton.addEventListener("click", () => {
    
    dialog.showModal();
});


