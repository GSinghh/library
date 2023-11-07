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
let index = 0;

// const printAll = () => {
//     for(let i = 0; i < myLibrary.length; i++)
//     {
//         console.log(myLibrary[i]);
//     }
// }

const addBookToStorage = (Book) => {
    myLibrary.push(Book);
    addBook(Book);
    printAll();
    index++;
}

const addBook = (bookObject) => {

    /* This function assigns all values from the book object accordingly */
    /* This function also creates a div then adds all values into it accordingly */

    const newDiv = document.createElement('div');
    newDiv.className = "book";
    newDiv.setAttribute('data-index', index);

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
    
    statusButton.onclick = () => {
        if (statusButton.classList.contains('finished'))
        {
            statusButton.innerText = "In Progress";
            statusButton.classList.remove('finished');
            statusButton.classList.add('in-progress');
            myLibrary[parseInt(newDiv.getAttribute('data-index'))].finished = false;
        }
        else
        {
            statusButton.innerText = "Finished";
            statusButton.classList.remove('in-progress');
            statusButton.classList.add('finished');
            myLibrary[parseInt(newDiv.getAttribute('data-index'))].finished = true;
        }
    }

    
    const deleteButton = document.createElement('button');
    deleteButton.onclick = () => {
        myLibrary.splice(parseInt(newDiv.getAttribute('data-index')), 1);
        newDiv.remove();
    }
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
