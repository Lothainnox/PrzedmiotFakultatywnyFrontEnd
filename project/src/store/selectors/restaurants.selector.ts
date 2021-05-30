import { StoreState } from '../store';
import { createSelector } from 'reselect';

export const restaurantsSelector = {
   getAll: createSelector(
      (state: StoreState) => state.restaurants,
      (restaurants) => restaurants.restaurantsList,
   ),
   getRestaurant: (itemId: string) =>
      createSelector(
         (state: StoreState) => state.restaurants,
         (restaurants) => restaurants.restaurantsList.filter(({ id }) => id === parseInt(itemId))[0],
      ),
};