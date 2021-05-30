import { Reducer } from 'redux';
import { Actions, RestaurantsStoreActions } from '../actions/restaurants.action';

export interface Restaurant {
   id: number;
   type: string;
   name: string;
   address: string;
   waittime: number;
   rate: number;
   description: string;
}

export interface RestaurantsList {
   restaurantsList: Restaurant[];
}
 
export const restaurantsListInitialState: RestaurantsList = {
   restaurantsList: [
      {
         id: 1,
         type: 'restaurant',
         name: 'Happy London',
         address: '25-29 Coventry St, London',
         waittime: 20,
         rate: 9,
         description: 'Opis 1',
      },
      {
        id: 2,
        type: 'restaurant',
        name: 'BRGR LDN',
        address: '244 York Way, London',
        waittime: 30,
        rate: 10,
        description: 'Opis 2',
     },
     {
        id: 3,
        type: 'restaurant',
        name: 'La Ferme London',
        address: '154 Regent\'s Park Rd, London',
        waittime: 15,
        rate: 8,
        description: 'Opis 3',
     },
     {
        id: 4,
        type: 'restaurant',
        name: 'Hazara Restaurants',
        address: '44 Belsize Ln, Belsize Park, London',
        waittime: 20,
        rate: 10,
        description: 'Opis 4',
     },
     {
        id: 5,
        type: 'restaurant',
        name: 'Barrafina',
        address: 'Stable St, London',
        waittime: 25,
        rate: 8,
        description: 'Opis 5',
     },
   ],
};

export const restaurantsStoreReducer: Reducer<RestaurantsList, Actions> = (
   state: RestaurantsList = restaurantsListInitialState,
   actions: Actions,
) => {
   switch (actions.type) {
      case RestaurantsStoreActions.SET_NEW_RESTAURANT:
         const id = state.restaurantsList.reverse()[0].id + 1;
         const newItem = actions.payload.restaurant;
         newItem.id = id;
         return {
            ...state,
            restaurantsList: [...state.restaurantsList, newItem],
         };

      case RestaurantsStoreActions.SET_UPDATE_RESTAURANT:
         return {
            ...state,
            restaurantsList: state.restaurantsList.map((item) => 
               item.id === actions.payload.restaurant.id ? {
                  ...item,
                  id: actions.payload.restaurant.id,
                  type: actions.payload.restaurant.type,
                  title: actions.payload.restaurant.name,
                  author: actions.payload.restaurant.address,
                  year: actions.payload.restaurant.waittime,
                  rate: actions.payload.restaurant.rate,
                  description: actions.payload.restaurant.description,
               } : item,
            ),
         };

      case RestaurantsStoreActions.SET_DELETE_RESTAURANT:
         return {
            ...state,
            restaurantsList: state.restaurantsList.filter((el) => el.id !== actions.payload.restaurant.id),
         };

      default:
         return state;
   }
};