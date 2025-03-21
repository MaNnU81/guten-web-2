
import StorageService from "../services/storage-service.js";
export default class BookCardComponent {
  constructor(bookInfo, StorageService) {
      this.bookInfo = bookInfo;
      this.StorageService = StorageService;
  }
 

  createBookCardHtml() {
      const bookContainer = document.createElement('div');
      bookContainer.classList.add("book-container");
     

      // Controlla se il libro è già tra i preferiti
      const isStarred = this.StorageService.isBookStarred(this.bookInfo);
      const heartSymbol = isStarred ? "❤️" : "♡";

      bookContainer.innerHTML = `
        <div class="img-container">
          <img src="${this.bookInfo.imgUrl}" alt="">
        </div>
        <div class="book-info">
          <h3>
            <a href="/detail.html?id=${this.bookInfo.id ?? 0}" target="_blank">${this.bookInfo.title}</a>
          </h3>
          <p>By: ${this.bookInfo.author.name}</p>
        </div>

        <div class="btn-container">
          <b class="btn favorite-btn">${heartSymbol}</b>
        </div>
      `;

      // Aggiunge il listener per il click sul cuore
      const favoriteBtn = bookContainer.querySelector(".favorite-btn");
      favoriteBtn.addEventListener("click", () => {
          this.toggleFavorite(favoriteBtn);
      });

      return bookContainer;
  }

  toggleFavorite(favoriteBtn) {
      StorageService.save(this.bookInfo);
      
      // Aggiorna il simbolo del cuore
      const isNowStarred = this.StorageService.isBookStarred(this.bookInfo);
      favoriteBtn.textContent = isNowStarred ? "❤️" : "♡";
  }
}