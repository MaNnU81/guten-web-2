class BookService {

    static URL_Base = "https://gutendex.com/books/";


    constructor(currentPage = 1,) {
        this.currentPage = currentPage;



    }


    getBooksByPage() {

        const url = BookService.URL_Base + '?page=' + this.currentPage;
        return fetch(url)
            .then(res => res.json())
            .then(data => data.results)
            .catch(err => console.log(err))




    }

    async getBookById(id) {
        const url = BookService.URL_Base + id + '/';
        console.log("URL generato:", url);
        const res = await fetch(url);
        return await res.json();
    }

    getNextPage() {

        //controllare che non sia minore di zero
        this.currentPage++
        return this.getBooksByPage();

    }

    getPrevPage() {
        //controllare che non sia maggiore dell'ultima pagina
        this.currentPage--
        return this.getBooksByPage();
    }

}

export default BookService