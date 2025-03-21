import './style.css'
import BookService from './services/book-service'
import HomePageComponet from './components/home-page-component';
import DetailPageComponent from './components/detail-page-component';
import StorageService from './services/storage-service';

const bookService = new BookService();
const detailPageComponent = new DetailPageComponent();
const storageService = new StorageService();
const homePageComponet = new HomePageComponet(bookService, storageService);

homePageComponet.start();

// bookService.getBooksByPage().then(data => console.log(data))


