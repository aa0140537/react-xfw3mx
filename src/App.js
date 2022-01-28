import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const App = () => {
  const validationSchema = yup.object({
    name: yup.string().required('This field is required'),
    age: yup
      .number('Please enter a valid age')
      .required('This field is requirted'),
  });

  function onSubmit(values) {
    console.log(values);
  }

  // either use useFormik hook or put form in Formik component
  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     age: '',
  //   },
  //   // dont use below validate methos if you are using yup validations
  //   // validate: (values) => {
  //   //   const error = {};
  //   //   if (!values.name) error.name = 'This field is required';
  //   //   if (!values.age) error.age = 'This field is required';
  //   //   return error;
  //   // },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  //   validationSchema,
  // });

  const initialValues = {
    name: ' ',
    age: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label>Name</label>
        <Field
          name="name"
          // value={formik.values.name}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // above three lines can be replaces by
          // {...formik.getFieldProps('name')}
        />
        <ErrorMessage name="name" />
        <br />
        {/* {formik.touched.name && formik.errors.name && (
          <p>{formik.errors.name}</p>
        )} */}
        <br />
        <label>Age</label>
        <Field
          name="age"
          // value={formik.values.age}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // {...formik.getFieldProps('age')}
        />
        {/* {formik.touched.age && formik.errors.age && <p>{formik.errors.age}</p>} */}
        <ErrorMessage name="age" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default App;
