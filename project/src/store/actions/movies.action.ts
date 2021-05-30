import { Movie } from '../reducers/movies.reducer';

export enum MoviesStoreActions {
   SET_NEW_MOVIE = 'SET_NEW_MOVIE',
   SET_UPDATE_MOVIE = 'SET_UPDATE_MOVIE',
   SET_DELETE_MOVIE = 'SET_DELETE_MOVIE',
}

export interface SetNewMovieAction {
   type: MoviesStoreActions.SET_NEW_MOVIE;
   payload: {
      movie: Movie;
   };
}

export interface SetUpdateMovieAction {
   type: MoviesStoreActions.SET_UPDATE_MOVIE;
   payload: {
      movie: Movie;
   };
}

export interface SetDeleteMovieAction {
   type: MoviesStoreActions.SET_DELETE_MOVIE;
   payload: {
      movie: Movie;
   };
}

export type Actions = SetNewMovieAction | SetUpdateMovieAction | SetDeleteMovieAction;

export const moviesActions = {
    setNewMovie: (movie: Movie): SetNewMovieAction => ({
       type: MoviesStoreActions.SET_NEW_MOVIE,
       payload: {
          movie,
       },
    }),

    setUpdateMovie: (movie: Movie): SetUpdateMovieAction => ({
       type: MoviesStoreActions.SET_UPDATE_MOVIE,
       payload: {
          movie,
       },
    }),
 
    setDeleteMovie: (movie: Movie): SetDeleteMovieAction => ({
       type: MoviesStoreActions.SET_DELETE_MOVIE,
       payload: {
          movie,
       },
    }),
 };