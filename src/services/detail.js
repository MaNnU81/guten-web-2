
import BookService from './book-service';
import DetailPageComponent from '../components/detail-page-component';

const bookService = new BookService();
const detailPageComponent = new DetailPageComponent(bookService);

detailPageComponent.start();