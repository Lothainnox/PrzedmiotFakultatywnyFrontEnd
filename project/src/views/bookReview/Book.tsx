import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { booksSelector } from '../../store/selectors/books.selector';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useAction } from '../../hooks/useActions';
import { BooksService } from '../../services/books.service';
import { Book } from '../../store/reducers/books.reducer';

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

const BookItem: React.FC<{}> = () => {
   const { id } = useParams<ParamTypes>();
   const book = useSelector(booksSelector.getBook(id));
   const booksAction = useAction(BooksService);
   const history = useHistory();

   const initialValues: Book = {
      id: book.id,
      type: book.type,
      title: book.title,
      author: book.author,
      year: book.year,
      rate: book.rate,
      description: book.description,
   };

   const bookUpdate = (values: Book) => {
      booksAction.setUpdateBook(values);
   };

   return (
      <>
         <h1>Book Item - {book.title}</h1>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
               bookUpdate(values);
               actions.setSubmitting(false);
               setTimeout(() => {
                  history.push('/books');
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

                  <label htmlFor="title">
                     <b>TITLE</b>
                  </label>
                  <br />
                  <Field id="title" name="title" placeholder="title" disabled />
                  <br />

                  <label htmlFor="author">
                     <b>AUTHOR</b>
                  </label>
                  <br />
                  <Field id="author" name="author" placeholder="author" disabled />
                  <br />

                  <label htmlFor="year">
                     <b>YEAR</b>
                  </label>
                  <br />
                  <Field id="year" name="year" placeholder="year" disabled />
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

export default BookItem;
