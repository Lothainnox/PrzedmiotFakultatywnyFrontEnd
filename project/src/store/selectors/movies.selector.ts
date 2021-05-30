import { StoreState } from '../store';
import { createSelector } from 'reselect';

export const moviesSelector = {
   getAll: createSelector(
      (state: StoreState) => state.movies,
      (movies) => movies.moviesList,
   ),
   getMovie: (itemId: string) =>
      createSelector(
         (state: StoreState) => state.movies,
         (movies) => movies.moviesList.filter(({ id }) => id === parseInt(itemId))[0],
      ),
};