import { Restaurant } from '../reducers/restaurants.reducer';

export enum RestaurantsStoreActions {
   SET_NEW_RESTAURANT = 'SET_NEW_RESTAURANT',
   SET_UPDATE_RESTAURANT = 'SET_UPDATE_RESTAURANT',
   SET_DELETE_RESTAURANT = 'SET_DELETE_RESTAURANT',
}

export interface SetNewRestaurantAction {
   type: RestaurantsStoreActions.SET_NEW_RESTAURANT;
   payload: {
      restaurant: Restaurant;
   };
}

export interface SetUpdateRestaurantAction {
   type: RestaurantsStoreActions.SET_UPDATE_RESTAURANT;
   payload: {
      restaurant: Restaurant;
   };
}

export interface SetDeleteRestaurantAction {
   type: RestaurantsStoreActions.SET_DELETE_RESTAURANT;
   payload: {
    restaurant: Restaurant;
   };
}

export type Actions = SetNewRestaurantAction | SetUpdateRestaurantAction | SetDeleteRestaurantAction;

export const restaurantsActions = {
    setNewRestaurant: (restaurant: Restaurant): SetNewRestaurantAction => ({
       type: RestaurantsStoreActions.SET_NEW_RESTAURANT,
       payload: {
        restaurant,
       },
    }),

    setUpdateRestaurant: (restaurant: Restaurant): SetUpdateRestaurantAction => ({
      type: RestaurantsStoreActions.SET_UPDATE_RESTAURANT,
      payload: {
       restaurant,
      },
   }),
 
    setDeleteRestaurant: (restaurant: Restaurant): SetDeleteRestaurantAction => ({
       type: RestaurantsStoreActions.SET_DELETE_RESTAURANT,
       payload: {
        restaurant,
       },
    }),
 };