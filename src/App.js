import React from 'react';
import { useFormik } from 'formik';

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate: (values) => {
      const error = {};
      if (!values.name) error.name = 'This field is required';
      return error;
    },
  });

  return (
    <div>
      <label>Name</label>
      <input
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <button type="submit">Submit</button>
    </div>
  );
};

export default App;
