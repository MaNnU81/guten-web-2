class BookService {

    static URL_Base = "https://gutendex.com/books/";


    constructor(currentPage = 1, ) {
        this.currentPage = currentPage;
        


    }


    getBooksByPage() {

        const url = BookService.URL_Base + '?page=' + this.currentPage;
        return fetch(url)
            .then(res => res.json())
            .then(data => data.results)
            .catch(err => console.log(err))



    }

    getBookById() {

    }

    getNextPage() {
        this.currentPage++
        return this.getBooksByPage();

    }

    getPrevPage() {
        this.currentPage--
        return this.getBooksByPage();
    }

}

export default BookService