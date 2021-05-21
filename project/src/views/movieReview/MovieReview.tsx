import React from 'react';
import Navigation from '../../components/Navigation';
import CollapsibleTable from '../../components/Table'

const MovieReview = () => {
   return (
      <div>
         <Navigation />
         <h1>Recenzje filmów</h1>
         <CollapsibleTable type="movie"/>
      </div>
   );
};

export default MovieReview;
