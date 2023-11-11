import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const searchSchema = Yup.object().shape({
  query: Yup.string().min(1, 'Please enter your request!').required('Required'),
});

export const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={searchSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <button type="submit">
            <span>Search</span>
          </button>

          <label>
            <Field
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <ErrorMessage name="topic" component="span" />
          </label>
        </Form>
      </Formik>
    </header>
  );
};
