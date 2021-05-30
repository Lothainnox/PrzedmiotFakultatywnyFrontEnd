import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router';
import { useAction } from '../../hooks/useActions';
import { MoviesService } from '../../services/movies.service';
import { BooksService } from '../../services/books.service';
import { RestaurantsService } from '../../services/restaurants.service';

interface InitialValuesProps {
   id: number;
   type: string;
   title: string | any;
   name: string | any;
   author: string;
   address: string;
   year: number;
   waittime: number;
   rate: number;
   description: string;
}

const validationSchema = Yup.object({
   rate: Yup.number()
      .required('Pole rate jest wymagane!')
      .min(0, 'Minimalna wartość to 0.')
      .max(10, 'Maksymalna wartość to 30.'),
   description: Yup.string().required('Pole description jest wymagane!'),
});

const Home = () => {
   const [reviewType, setReviewType] = useState('movie');
   const history = useHistory();
   const moviesAction = useAction(MoviesService);
   const booksAction = useAction(BooksService);
   const restaurantsAction = useAction(RestaurantsService);

   const initialValues: InitialValuesProps = {
      id: 0,
      type: reviewType,
      title: '',
      name: '',
      author: '',
      address: '',
      year: 0,
      waittime: 0,
      rate: 0,
      description: '',
   };

   const addReview = (values: InitialValuesProps, type: string) => {
      switch (type) {
         case 'movie':
            moviesAction.setNewMovie(values);
            break;
         case 'book':
            booksAction.setNewBook(values);
            break;
         case 'restaurant':
            restaurantsAction.setNewRestaurant(values);
            break;
         default:
            return null;
      }
   };

   return (
      <>
         <Navigation />
         <h1>Strona główna</h1>
         <hr />
         <div>
            <p>
               <b>Choose object of review: </b>
            </p>
            <div>
               <input
                  type="radio"
                  id="movie"
                  name="type"
                  value="movie"
                  defaultChecked
                  onChange={(e) => setReviewType(e.target.value)}
               />
               <label htmlFor="movie">movie</label>
            </div>
            <div>
               <input
                  type="radio"
                  id="book"
                  name="type"
                  value="book"
                  onChange={(e) => setReviewType(e.target.value)}
               />
               <label htmlFor="book">book</label>
            </div>

            <div>
               <input
                  type="radio"
                  id="restaurant"
                  name="type"
                  value="restaurant"
                  onChange={(e) => setReviewType(e.target.value)}
               />
               <label htmlFor="restaurant">restaurant</label>
            </div>
         </div>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
               addReview(values, reviewType);
               actions.setSubmitting(false);

               setTimeout(() => {
                  history.push(`/${reviewType}s`);
               }, 400);
            }}
         >
            {() => (
               <Form>
                  <hr />
                  {reviewType !== 'restaurant' ? (
                     <>
                        <label htmlFor="title">
                           <b>TITLE</b>
                        </label>
                        <br />
                        <Field id="title" name="title" placeholder="title" />
                        <br />

                        <label htmlFor="author">
                           <b>AUTHOR</b>
                        </label>
                        <br />
                        <Field id="author" name="author" placeholder="author" />
                        <br />

                        <label htmlFor="year">
                           <b>YEAR</b>
                        </label>
                        <br />
                        <Field id="year" name="year" placeholder="year" type="number" />
                        <br />
                     </>
                  ) : (
                     <>
                        <label htmlFor="name">
                           <b>NAME</b>
                        </label>
                        <br />
                        <Field id="name" name="name" placeholder="name" />
                        <br />

                        <label htmlFor="address">
                           <b>ADDRESS</b>
                        </label>
                        <br />
                        <Field id="address" name="address" placeholder="address" />
                        <br />

                        <label htmlFor="waittime">
                           <b>WAIT TIME (MINUTES)</b>
                        </label>
                        <br />
                        <Field id="waittime" name="waittime" placeholder="waittime" type="number" />
                        <br />
                     </>
                  )}

                  <label htmlFor="rate">
                     <b>RATE</b>
                  </label>
                  <br />
                  <Field id="rate" name="rate" placeholder="rate" type="number" />
                  <br />

                  <label htmlFor="description">
                     <b>DESCRIPTION</b>
                  </label>
                  <br />
                  <Field id="description" name="description" placeholder="description" />
                  <br />
                  <hr />
                  <button type="submit">Submit</button>
               </Form>
            )}
         </Formik>
      </>
   );
};

export default Home;
