import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { restaurantsSelector } from '../../store/selectors/restaurants.selector';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useAction } from '../../hooks/useActions';
import { RestaurantsService } from '../../services/restaurants.service';
import { Restaurant } from '../../store/reducers/restaurants.reducer';

interface ParamTypes {
   id: string;
}

const validationSchema = Yup.object({
   rate: Yup.number()
      .required('Pole rate jest wymagane!')
      .min(0, 'Minimalna wartość to 0.')
      .max(10, 'Maksymalna wartość to 30.'),
   description: Yup.string().required('Pole description jest wymagane!'),
});

const RestaurantItem = () => {
   const { id } = useParams<ParamTypes>();
   const restaurant = useSelector(restaurantsSelector.getRestaurant(id));
   const restaurantsAction = useAction(RestaurantsService);
   const history = useHistory();

   const initialValues: Restaurant = {
      id: restaurant.id,
      type: restaurant.type,
      name: restaurant.name,
      address: restaurant.address,
      waittime: restaurant.waittime,
      rate: restaurant.rate,
      description: restaurant.description,
   };

   const restaurantUpdate = (values: Restaurant) => {
      restaurantsAction.setUpdateRestaurant(values);
   };

   return (
      <>
         <h1>Restaurant Item - {restaurant.name}</h1>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
               restaurantUpdate(values);
               actions.setSubmitting(false);
               setTimeout(() => {
                  history.push('/restaurants');
               }, 400);
            }}
         >
            {({ errors, touched }) => (
               <Form>
                  <hr />
                  <label htmlFor="id">
                     <b>ID</b>
                  </label>
                  <br />
                  <Field id="id" name="id" placeholder="id" disabled />
                  <br />

                  <label htmlFor="name">
                     <b>NAME</b>
                  </label>
                  <br />
                  <Field id="name" name="name" placeholder="name" disabled />
                  <br />

                  <label htmlFor="address">
                     <b>ADDRESS</b>
                  </label>
                  <br />
                  <Field id="address" name="address" placeholder="address" disabled />
                  <br />

                  <label htmlFor="waittime">
                     <b>WAIT TIME (MINUTES)</b>
                  </label>
                  <br />
                  <Field id="waittime" name="waittime" placeholder="waittime" disabled />
                  <br />

                  <label htmlFor="rate">
                     <b>RATE</b>
                  </label>
                  <br />
                  <Field id="rate" name="rate" placeholder="rate" />
                  <br />
                  {errors.rate && touched.rate ? (
                     <>
                        <p> {errors.rate} </p>
                        <br />
                     </>
                  ) : null}

                  <label htmlFor="description">
                     <b>DESCRIPTION</b>
                  </label>
                  <br />
                  <Field id="description" name="description" placeholder="description" />
                  <br />
                  {errors.description && touched.description ? (
                     <>
                        <p> {errors.description} </p>
                        <br />
                     </>
                  ) : null}
                  <hr />
                  <button type="submit">Submit</button>
               </Form>
            )}
         </Formik>
      </>
   );
};

export default RestaurantItem;
