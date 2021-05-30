import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import BookReview from './views/bookReview/BookReview';
import Home from './views/home/Home';
import MovieReview from './views/movieReview/MovieReview';
import Page404 from './views/page404/Page404';
import RestaurantReview from './views/restaurantReview/RestaurantReview';
import store from './store';
import MovieItem from './views/movieReview/Movie';
import BookItem from './views/bookReview/Book';
import RestaurantItem from './views/restaurantReview/Restaurant';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Provider store={store}>
               <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/movies" component={MovieReview} />
                  <Route path="/movie/:id" component={MovieItem} />
                  <Route path="/books" component={BookReview} />
                  <Route path="/book/:id" component={BookItem} />
                  <Route path="/restaurants" component={RestaurantReview} />
                  <Route path="/restaurant/:id" component={RestaurantItem} />
                  <Route path="*" component={Page404} />
               </Switch>
            </Provider>
         </BrowserRouter>
      </div>
   );
}

export default App;
