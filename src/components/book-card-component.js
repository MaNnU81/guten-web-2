export default class BookCardComponent {
    constructor(bookInfo) {
        this.bookInfo =  bookInfo;
    }

createBookCardHtml(){
    const bookContainer = document.createElement('div');
    bookContainer.classList.add("book-container")
    bookContainer.innerHTML = `
      <div class="img-container">
        <img src="${this.bookInfo.imgUrl}" alt="">
      </div>
      <div class="book-info">
        <h3>
        <a href="/detail.html?id=${this.bookInfo.id ?? 0}" target="_blank"> ${this.bookInfo.title}</a>
        </h3>
        <p>By: ${this.bookInfo.author.name}</p>
      </div>

      <div class="btn-container">
        <b class="btn">add ♡ </b>
        <b class="btn">remove ❤︎ </b>
      </div>
      
    `
    return bookContainer;


}

}