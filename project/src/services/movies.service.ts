import store from '../store';
import { moviesActions } from '../store/actions/movies.action';
import { Movie } from '../store/reducers/movies.reducer';

export class MoviesService {
   setNewMovie(movie: Movie) {
      store.dispatch(moviesActions.setNewMovie(movie));
   }

   setUpdateMovie(movie: Movie){
      store.dispatch(moviesActions.setUpdateMovie(movie));
   }

   deleteMovie(movie: Movie) {
      store.dispatch(moviesActions.setDeleteMovie(movie));
   }
}