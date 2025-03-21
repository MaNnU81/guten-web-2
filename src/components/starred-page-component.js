import BookCardComponent from "./book-card-component";

export default class StarredPageComponent {
    constructor(storageService) {
        this.storageService = storageService;
    }

    async start(){
    this.starredBooks = await this.storageService.getStarredBook();
    this.render(this.starredBooks)


    }



    render(){

        const mainContainer = document.querySelector("#main-container");
        mainContainer.innerHTML = '';
        for (const book of this.starredBooks) { ////////////////
            const cardComponent = new BookCardComponent(book, this.storageService);
            const card = cardComponent.render();
            mainContainer.appendChild(card);

    }


}
}