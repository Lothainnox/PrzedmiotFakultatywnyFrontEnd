import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import BookReview from './views/bookReview/BookReview';
import Home from './views/home/Home';
import MovieReview from './views/movieReview/MovieReview';
import Page404 from './views/page404/Page404';
import RestaurantReview from './views/restaurantReview/RestaurantReview';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route path="/movies" component={MovieReview} />
               <Route path="/books" component={BookReview} />
               <Route path="/restaurants" component={RestaurantReview} />
               <Route path="/" component={Home} exact />
               <Route path="*" component={Page404} />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
