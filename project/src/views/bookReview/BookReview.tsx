import React from 'react';
import Navigation from '../../components/Navigation';
import CollapsibleTable from '../../components/Table';

const BookReview = () => {
   return (
      <div>
         <Navigation />
         <h1>Recenzje książek</h1>
         <CollapsibleTable type="book"/>
      </div>
   );
};

export default BookReview;
