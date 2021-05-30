import { Reducer } from 'redux';
import { Actions, BooksStoreActions } from '../actions/books.action';

export interface Book {
   id: number;
   type: string;
   title: string;
   author: string;
   year: number;
   rate: number;
   description: string;
}

export interface BooksList {
   booksList: Book[];
}

export const booksListInitialState: BooksList = {
   booksList: [
      {
         id: 1,
         type: 'book',
         title: 'Champion',
         author: 'Marie Lu',
         year: 2014,
         rate: 9,
         description: 'Opis 1',
      },
      {
        id: 2,
        type: 'book',
        title: 'Bird Box',
        author: 'Josh Malerman',
        year: 2014,
        rate: 8,
        description: 'Opis 2',
     },
     {
      id: 3,
      type: 'book',
      title: 'Beastly',
      author: 'Alex Flinn',
      year: 2010,
      rate: 9,
      description: 'Opis 3',
   },
   {
      id: 4,
      type: 'book',
      title: 'I\'ll Give You the Sun',
      author: 'Jandy Nelson',
      year: 2015,
      rate: 10,
      description: 'Opis 4',
   },
   {
      id: 5,
      type: 'book',
      title: 'Enduring Love',
      author: 'Ian McEwan',
      year: 1998,
      rate: 7,
      description: 'Opis 5',
   },
   ],
};

export const booksStoreReducer: Reducer<BooksList, Actions> = (
   state: BooksList = booksListInitialState,
   actions: Actions,
) => {
   switch (actions.type) {
      case BooksStoreActions.SET_NEW_BOOK:
         const id = state.booksList.reverse()[0].id + 1;
         const newItem = actions.payload.book;
         newItem.id = id;
         return {
            ...state,
            booksList: [...state.booksList, newItem],
         };

      case BooksStoreActions.SET_UPDATE_BOOK:
         return {
            ...state,
            booksList: state.booksList.map((item) => 
               item.id === actions.payload.book.id ? {
                  ...item,
                  id: actions.payload.book.id,
                  type: actions.payload.book.type,
                  title: actions.payload.book.title,
                  author: actions.payload.book.author,
                  year: actions.payload.book.year,
                  rate: actions.payload.book.rate,
                  description: actions.payload.book.description,
               } : item,
            ),
         };

      case BooksStoreActions.SET_DELETE_BOOK:
         return {
            ...state,
            booksList: state.booksList.filter((el) => el.id !== actions.payload.book.id),
         };

      default:
         return state;
   }
};