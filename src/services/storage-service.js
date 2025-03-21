
export default class StorageService {
    constructor() {}

    save(book) {
        const starredBooks = this.getStarredBook();
        
        const index = starredBooks.findIndex(item => item.id === book.id);

        if (index !== -1) {
            // Se il libro è già nei preferiti, lo rimuove
            starredBooks.splice(index, 1);
        } else {
            // Altrimenti lo aggiunge
            starredBooks.push(book);
        }

        localStorage.setItem("starred", JSON.stringify(starredBooks));
    }

    getStarredBook() {
        return JSON.parse(localStorage.getItem("starred")) || [];
    }

    isBookStarred(book) {
        const starredBooks = this.getStarredBook();
        return starredBooks.some(item => item.id === book.id);
    }
    
}





