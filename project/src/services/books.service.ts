import store from '../store';
import { booksActions } from '../store/actions/books.action';
import { Book } from '../store/reducers/books.reducer';

export class BooksService {
   setNewBook(book: Book) {
      store.dispatch(booksActions.setNewBook(book));
   }

   setUpdateBook(book: Book) {
      store.dispatch(booksActions.setUpdateBook(book));
   }

   deleteBook(book: Book) {
      store.dispatch(booksActions.setDeleteBook(book));
   }
}