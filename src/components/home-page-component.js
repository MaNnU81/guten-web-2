import BookCardComponent from "./book-card-component";

export default class HomePageComponet {
    constructor(bookService) {
        this.bookService = bookService
        this.books = [];
    }

    async start() {
        const nextButton = document.getElementById("next-btn");
        nextButton.addEventListener('click', () => this.onNextClick ());

        const previousButton = document.getElementById("prev-btn");
        previousButton.addEventListener('click', () => this.onPrevClick ());

        this.books = await this.bookService.getBooksByPage();

        this.render();

    }

    render() {
        const mainContainer = document.getElementById("main-container");
        mainContainer.innerHTML = '';

        for (const book of this.books) {
            const bookInfo = {
                title: book.title,
                author: book.authors[0],
                imgUrl: book.formats['image/jpeg'],
            }
            const bookCard = new BookCardComponent(bookInfo);
            const card = bookCard.createBookCardHtml();
            mainContainer.appendChild(card);

        }
    }

    async onNextClick(){
        this.books = await this.bookService.getNextPage();
        this.render();
    }

    async onPrevClick(){
        this.books =await this.bookService.getPrevPage();
        this.render();
    }


}