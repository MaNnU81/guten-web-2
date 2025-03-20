import './style.css'
import BookService from './services/book-service'
import HomePageComponet from './components/home-page-component';
import DetailPageComponent from './components/detail-page-component';

const bookService = new BookService();
const detailPageComponent = new DetailPageComponent();
const homePageComponet = new HomePageComponet(bookService, detailPageComponent);

homePageComponet.start();

// bookService.getBooksByPage().then(data => console.log(data))


