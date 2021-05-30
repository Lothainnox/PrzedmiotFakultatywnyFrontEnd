import { combineReducers } from 'redux';
import { BooksList, booksListInitialState, booksStoreReducer } from './reducers/books.reducer';
import { Actions as BooksActions } from './actions/books.action';
import { RestaurantsList, restaurantsListInitialState, restaurantsStoreReducer } from './reducers/restaurants.reducer';
import { Actions as RestaurantsActions } from './actions/restaurants.action';
import { MoviesList, moviesListInitialState, moviesStoreReducer } from './reducers/movies.reducer';
import { Actions as MoviesActions } from './actions/movies.action';

export type StoreActionTypes = BooksActions | RestaurantsActions | MoviesActions | any;

export interface StoreState {
   books: BooksList;
   restaurants: RestaurantsList;
   movies: MoviesList;
}

export const iniatialStoreState: StoreState = { 
   books: booksListInitialState,
   restaurants: restaurantsListInitialState,
   movies: moviesListInitialState,
};

export const reducers = combineReducers<StoreState>({
   books: booksStoreReducer,
   restaurants: restaurantsStoreReducer,
   movies: moviesStoreReducer,
});