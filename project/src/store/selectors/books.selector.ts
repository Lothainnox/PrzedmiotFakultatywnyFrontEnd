import { StoreState } from '../store';
import { createSelector } from 'reselect';

export const booksSelector = {
   getAll: createSelector(
      (state: StoreState) => state.books,
      (books) => books.booksList,
   ),
   getBook: (itemId: string) =>
      createSelector(
         (state: StoreState) => state.books,
         (books) => books.booksList.filter(({ id }) => id === parseInt(itemId))[0],
      ),
};