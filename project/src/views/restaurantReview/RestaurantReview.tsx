import React from 'react';
import Navigation from '../../components/Navigation';
import CollapsibleTable from '../../components/Table';

const RestaurantReview = () => {
   return (
      <div>
         <Navigation />
         <h1>Recenzje restauracji</h1>
         <CollapsibleTable type="restaurant"/>
      </div>
   );
};

export default RestaurantReview;
