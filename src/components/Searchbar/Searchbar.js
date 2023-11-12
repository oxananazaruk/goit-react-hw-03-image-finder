import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Searchbar,
  Form,
  Field,
  ErrorMessage,
  FormGroup,
  FormBtn,
} from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

const searchSchema = Yup.object().shape({
  query: Yup.string().min(1, 'Please enter your request!').required('Required'),
});

export const SearchBar = ({ onSubmit }) => {
  return (
    <Searchbar>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={searchSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormBtn type="submit">
            <BsSearch />
          </FormBtn>

          <FormGroup>
            <Field
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <ErrorMessage name="topic" component="span" />
          </FormGroup>
        </Form>
      </Formik>
    </Searchbar>
  );
};
