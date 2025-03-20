export default class DetailPageComponent {
    constructor(BookService) {
        this.BookService = BookService;
    }
    async start() {

        const params = new URLSearchParams(window.location.search)
        const id = params.get('id')

        const book = await this.BookService.getBookById(id);
        console.log("Libro recuperato:", book);

        this.renderDetail(book);
    }

    renderDetail(book) {
        const mainContainer = document.getElementById("main-container");
        mainContainer.innerHTML = '';

        const bookInfo = {
            title: book.title,
            author: book.authors[0]?.name || "Unknown Author",
            imgUrl: book.formats['image/jpeg']
        };

        const detailHtml = `
            <div class="detail-container">
                <div class="img-container">
                    <img src="${bookInfo.imgUrl}" alt="${bookInfo.title}">
                </div>
                <div class="book-info">
                    <h1>${bookInfo.title}</h1>
                    <p><strong>Author:</strong> ${bookInfo.author}</p>
                </div>
            </div>
        `;
        mainContainer.innerHTML = detailHtml;

    }


}



