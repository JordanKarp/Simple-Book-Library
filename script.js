let myLibrary = [];

class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        isRead = false
    ) {
        this.title = title
        this.author = author
        this.isRead = isRead
    }
}

const bookshelf = document.getElementById('bookshelf')
const addBookForm = document.getElementById('addBookForm')
const modal = document.querySelector("[data-modal]")
const openModal = document.querySelector('[data-open-modal]')
const closeModal = document.querySelector('[data-close-modal]')

openModal.addEventListener("click", () => {
    modal.showModal()
})
closeModal.addEventListener("click", () => {
    resetModal()
    modal.close()
})

function drawLibrary() {
    bookshelf.innerHTML = ''

    // myLibrary.sort((a, b) => {
    //     return a[1] - b[1];
    // })


    for (let book of myLibrary) {
        const bookTitle = book[0]
        const bookAuthor = book[1]
        const bookIsRead = book[2]

        const bookCard = document.createElement('div')
        const title = document.createElement('p')
        const author = document.createElement('p')
        const readIcon = document.createElement('p')

        bookCard.classList.add('card')
        bookCard.classList.add('cover')
        readIcon.classList.add('readIcon')


        title.textContent = bookTitle
        author.textContent = bookAuthor
        if (bookIsRead) {
            readIcon.textContent = '☑'
        } else {
            readIcon.textContent = '☐'
        }

        bookCard.appendChild(title)
        bookCard.appendChild(author)
        bookCard.appendChild(readIcon)
        bookshelf.appendChild(bookCard)
    }
}

function resetModal() {
    const title = document.getElementById('title')
    const author = document.getElementById('author')
    const isRead = document.getElementById('isRead')
    title.value = ''
    author.value = ''
    isRead.checked = false
}

const addBookToLibrary = (e) => {
    // do stuff here
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isRead = document.getElementById('isRead').checked
    const book = [title, author, isRead]
    myLibrary.push(book)
    modal.close()
    resetModal()
    drawLibrary()
}

addBookForm.onsubmit = addBookToLibrary

