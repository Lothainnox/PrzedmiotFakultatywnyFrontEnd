import store from '../store';
import { restaurantsActions } from '../store/actions/restaurants.action';
import { Restaurant } from '../store/reducers/restaurants.reducer';

export class RestaurantsService {
   setNewRestaurant(restaurant: Restaurant) {
      store.dispatch(restaurantsActions.setNewRestaurant(restaurant));
   }

   setUpdateRestaurant(restaurant: Restaurant){
      store.dispatch(restaurantsActions.setUpdateRestaurant(restaurant))
   }

   deleteRestaurant(restaurant: Restaurant) {
      store.dispatch(restaurantsActions.setDeleteRestaurant(restaurant));
   }
}