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
        <h3>${this.bookInfo.title}</h3>
        <p>${this.bookInfo.author}</p>
      </div>

      <div class="btn-container">
        <b class="btn">add to ❤️</b>
        <b class="btn">remove from 💔​</b>
      </div>
      
    `
    return bookContainer;


}

}