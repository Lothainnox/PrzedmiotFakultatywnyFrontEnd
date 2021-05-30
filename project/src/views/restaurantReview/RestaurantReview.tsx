import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../../components/Navigation';
import CollapsibleTable, { itemTypes } from '../../components/Table';
import { useAction } from '../../hooks/useActions';
import { RestaurantsService } from '../../services/restaurants.service';
import { restaurantsSelector } from '../../store/selectors/restaurants.selector';

const RestaurantReview = () => {
   const restaurants = useSelector(restaurantsSelector.getAll);
   const restaurantsActions = useAction(RestaurantsService);

   const deleteRestaurant = (item: itemTypes) => {
      const restaurantToDelete = restaurants.find((restaurant) => restaurant.id === item.id);
      if (restaurantToDelete) {
         restaurantsActions.deleteRestaurant(restaurantToDelete);
      }
   };

   return (
      <div>
         <Navigation />
         <h1>Recenzje restauracji</h1>
         <CollapsibleTable item={restaurants} type="restaurant" onDelete={deleteRestaurant} />
      </div>
   );
};

export default RestaurantReview;
