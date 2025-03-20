import './style.css'
import BookService from './services/book-service'
import HomePageComponet from './components/home-page-component';

const bookService = new BookService();
const homePageComponet = new HomePageComponet(bookService);

homePageComponet.start();

// bookService.getBooksByPage().then(data => console.log(data))


