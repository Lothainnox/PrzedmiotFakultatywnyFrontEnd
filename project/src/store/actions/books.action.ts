import { Book } from '../reducers/books.reducer';

export enum BooksStoreActions {
   SET_NEW_BOOK = 'SET_NEW_BOOK',
   SET_UPDATE_BOOK = 'SET_UPDATE_BOOK',
   SET_DELETE_BOOK = 'SET_DELETE_BOOK',
}

export interface SetNewBookAction {
   type: BooksStoreActions.SET_NEW_BOOK;
   payload: {
      book: Book;
   };
}

export interface SetUpdateBookAction {
   type: BooksStoreActions.SET_UPDATE_BOOK;
   payload: {
      book: Book;
   }
}

export interface SetDeleteBookAction {
   type: BooksStoreActions.SET_DELETE_BOOK;
   payload: {
      book: Book;
   };
}

export type Actions = SetNewBookAction | SetUpdateBookAction |SetDeleteBookAction;

export const booksActions = {
    setNewBook: (book: Book): SetNewBookAction => ({
       type: BooksStoreActions.SET_NEW_BOOK,
       payload: {
          book,
       },
    }),

    setUpdateBook: (book: Book): SetUpdateBookAction => ({
      type: BooksStoreActions.SET_UPDATE_BOOK,
      payload:{
         book,
      },
    }),
 
    setDeleteBook: (book: Book): SetDeleteBookAction => ({
       type: BooksStoreActions.SET_DELETE_BOOK,
       payload: {
          book,
       },
    }),
 };