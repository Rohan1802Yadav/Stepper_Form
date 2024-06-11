import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setFormData } from '../redux/actions';

const Step1 = ({ nextStep }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.step1);

  const formik = useFormik({
    initialValues: {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      email: formData.email || '',
      companyName: formData.companyName || '',
      companyWebsite: formData.companyWebsite || '',
      state: formData.state || '',
      zipCode: formData.zipCode || '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      companyName: Yup.string().required('Company Name is required'),
      companyWebsite: Yup.string().url('Invalid URL').required('Company Website is required'),
      state: Yup.string().required('State is required'),
      zipCode: Yup.string().required('Zip Code is required'),
    }),
    onSubmit: (values) => {
      dispatch(setFormData('step1', values));
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          className="form-control"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          className="form-control"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="form-control"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          className="form-control"
        />
        {formik.touched.companyName && formik.errors.companyName ? (
          <div className="error">{formik.errors.companyName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Company Website:</label>
        <input
          type="url"
          name="companyWebsite"
          value={formik.values.companyWebsite}
          onChange={formik.handleChange}
          className="form-control"
        />
        {formik.touched.companyWebsite && formik.errors.companyWebsite ? (
          <div className="error">{formik.errors.companyWebsite}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formik.values.state}
          onChange={formik.handleChange}
          className="form-control"
        />
        {formik.touched.state && formik.errors.state ? (
          <div className="error">{formik.errors.state}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Zip Code:</label>
        <input
          type="text"
          name="zipCode"
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          className="form-control"
        />
        {formik.touched.zipCode && formik.errors.zipCode ? (
          <div className="error">{formik.errors.zipCode}</div>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">Next</button>
    </form>
  );
};

export default Step1;
