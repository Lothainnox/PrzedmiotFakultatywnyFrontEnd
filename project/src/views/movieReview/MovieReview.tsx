import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../../components/Navigation';
import CollapsibleTable, { itemTypes } from '../../components/Table';
import { useAction } from '../../hooks/useActions';
import { MoviesService } from '../../services/movies.service';
import { moviesSelector } from '../../store/selectors/movies.selector';

const MovieReview = () => {
   const movies = useSelector(moviesSelector.getAll);
   const moviesActions = useAction(MoviesService);

   const deleteMovie = (item: itemTypes) => {
      const movieToDelete = movies.find((movie) => movie.id === item.id);
      if (movieToDelete) {
         moviesActions.deleteMovie(movieToDelete);
      }
   };
   return (
      <>
         <Navigation />
         <h1>Movie reviews</h1>
         <CollapsibleTable item={movies} type="movie" onDelete={deleteMovie} />
      </>
   );
};

export default MovieReview;
