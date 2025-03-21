import BookCardComponent from "./book-card-component";
import StorageService from "../services/storage-service";

export default class HomePageComponet {
    constructor(bookService, storageService) {
        this.bookService = bookService
        this.storageService = storageService
        this.books = [];
    }


    async start() {
        const nextButton = document.getElementById("next-btn");
        nextButton.addEventListener('click', () => this.onNextClick ());

        const previousButton = document.getElementById("prev-btn");
        previousButton.addEventListener('click', () => this.onPrevClick ());

        this.books = await this.bookService.getBooksByPage();

        this.render();
console.log(this.books);

    }

    render() {
        const mainContainer = document.getElementById("main-container");
        mainContainer.innerHTML = '';

        for (const book of this.books) {
            const bookInfo = {
                title: book.title,
                author: book.authors[0],
                imgUrl: book.formats['image/jpeg'],
                id: book.id
            }
            const bookCard = new BookCardComponent(bookInfo, this.storageService);
            const card = bookCard.createBookCardHtml();
            // mainContainer.appendChild(card);

        }
    }

    async onNextClick(){
        this.books = await this.bookService.getNextPage();
        this.render();
    }

    async onPrevClick(){
        this.books = await this.bookService.getPrevPage();
        this.render();
    }


}