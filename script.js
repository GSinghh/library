class Book {
    constructor(title, author, numPages, finished) {
            this.title = title;
            this.author = author;
            this.numPages = numPages;
            this.finished = finished;
    };
}

const openDialogButton = document.getElementById('open-dialog');
const dialog = document.getElementById('dialog-input');
const form = document.getElementById('form');
const gridContainer = document.getElementById('grid-container');

let myLibrary = [];

const addBookToStorage = (Book) => {
    myLibrary.push(Book);
    addBook(Book);
}

const addBook = (bookObject) => {

    /* This function assigns all values from the book object accordingly */
    /* This function also creates a div then adds all values into it accordingly */

    const newDiv = document.createElement('div');
    newDiv.className = "book";

    const title = document.createElement('p');
    title.className = "title"
    title.textContent = bookObject.title;

    const author = document.createElement('p');
    author.className = "author"
    author.textContent = bookObject.author;

    const pages = document.createElement('p');
    pages.className = "pages"
    pages.textContent = bookObject.numPages + ' Pages';

    const statusButton = document.createElement('button');
    statusButton.innerText = bookObject.finished ? "Finished" : "In Progress";
    const additionalClass = bookObject.finished ? "finished" : "in-progress";
    statusButton.className = "btn" + ' ' + additionalClass;

    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.className = "btn delete"

    newDiv.appendChild(title);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(statusButton);
    newDiv.appendChild(deleteButton);

    gridContainer.appendChild(newDiv);


}

openDialogButton.addEventListener("click", () => { 
    dialog.showModal();
});

form.addEventListener("submit", (event) => {

    /* This function grabs input from the form and stores them inside a book object */ 

    event.preventDefault();

    const bookName = form.elements.name.value;
    const authorName = form.elements.author.value;
    const totalPages = form.elements.pages.value;
    const checkBox = form.elements.checkbox.checked;

    // console.log("Book Name: ", bookName);
    // console.log("Author Name: ", authorName);
    // console.log("Total Pages: ", totalPages);
    // console.log("Yes or No: ", checkBox);

    addBookToStorage(new Book(bookName, authorName, totalPages, checkBox));

    form.reset();
    dialog.close();
});
