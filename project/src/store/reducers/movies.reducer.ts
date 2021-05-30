import { Reducer } from 'redux';
import { Actions, MoviesStoreActions } from '../actions/movies.action';

export interface Movie {
   id: number;
   type: string;
   title: string;
   author: string;
   year: number;
   rate: number;
   description: string;
}

export interface MoviesList {
   moviesList: Movie[];
}

export const moviesListInitialState: MoviesList = {
   moviesList: [
      {
         id: 1,
         type: 'movie',
         title: 'Open water',
         author: 'Chris Kentis',
         year: 2003,
         rate: 7,
         description: 'Opis 1',
      },
      {
        id: 2,
        type: 'movie',
        title: 'Donnie Darko',
        author: 'Richard Kelly',
        year: 2001,
        rate: 6,
        description: 'Opis 2',
     },
     {
      id: 3,
      type: 'movie',
      title: 'Edward Scissorhands',
      author: 'James Wan',
      year: 1990,
      rate: 4,
      description: 'Opis 3',
   },
   {
      id: 4,
      type: 'movie',
      title: 'Saw',
      author: 'Jandy Nelson',
      year: 2004,
      rate: 6,
      description: 'Opis 4',
   },
   {
      id: 5,
      type: 'movie',
      title: 'Lucky Number Slevin',
      author: 'Paul McGuigan',
      year: 2006,
      rate: 5,
      description: 'Opis 5',
   },
]};

export const moviesStoreReducer: Reducer<MoviesList, Actions> = (
   state: MoviesList = moviesListInitialState,
   actions: Actions,
) => {
   switch (actions.type) {
      case MoviesStoreActions.SET_NEW_MOVIE:
         const id = state.moviesList.reverse()[0].id + 1;
         const newItem = actions.payload.movie;
         newItem.id = id;
         return {
            ...state,
            moviesList: [...state.moviesList, newItem],
         };

      case MoviesStoreActions.SET_UPDATE_MOVIE:
         return {
            ...state,
            moviesList: state.moviesList.map((item) => 
               item.id === actions.payload.movie.id ? {
                  ...item,
                  id: actions.payload.movie.id,
                  type: actions.payload.movie.type,
                  title: actions.payload.movie.title,
                  author: actions.payload.movie.author,
                  year: actions.payload.movie.year,
                  rate: actions.payload.movie.rate,
                  description: actions.payload.movie.description,
               } : item,
            ),
         };

      case MoviesStoreActions.SET_DELETE_MOVIE:
         return {
            ...state,
            moviesList: state.moviesList.filter((el) => el.id !== actions.payload.movie.id),
         };

      default:
         return state;
   }
};