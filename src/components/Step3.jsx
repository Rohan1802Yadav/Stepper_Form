import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setFormData } from '../redux/actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Step3 = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.step3);

  const formik = useFormik({
    initialValues: {
      startDate: formData.startDate || null,
      plan: formData.plan || '',
      numberOfUsers: formData.numberOfUsers || '',
    },
    validationSchema: Yup.object({
      startDate: Yup.date().nullable().required('Start Date is required'),
      plan: Yup.string().required('Plan is required'),
      numberOfUsers: Yup.number().required('Number of users is required'),
    }),
    onSubmit: (values) => {
      dispatch(setFormData('step3', values));
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="form-group">
        <label>Start Plan Date:</label>
        <DatePicker
          selected={formik.values.startDate}
          onChange={(date) => formik.setFieldValue('startDate', date)}
          className="form-control"
        />
        {formik.touched.startDate && formik.errors.startDate ? (
          <div className="error">{formik.errors.startDate}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>
          <input
            type="radio"
            name="plan"
            value="monthly-gold"
            checked={formik.values.plan === 'monthly-gold'}
            onChange={formik.handleChange}
            className="form-check-input"
          />
          Monthly Gold Plan
        </label>
        <label>
          <input
            type="radio"
            name="plan"
            value="monthly-titanium"
            checked={formik.values.plan === 'monthly-titanium'}
            onChange={formik.handleChange}
            className="form-check-input"
          />
          Monthly Titanium Plan
        </label>
        <label>
          <input
            type="radio"
            name="plan"
            value="yearly-gold"
            checked={formik.values.plan === 'yearly-gold'}
            onChange={formik.handleChange}
            className="form-check-input"
          />
          Yearly Gold Plan
        </label>
        <label>
          <input
            type="radio"
            name="plan"
            value="yearly-titanium"
            checked={formik.values.plan === 'yearly-titanium'}
            onChange={formik.handleChange}
            className="form-check-input"
          />
          Yearly Titanium Plan
        </label>
        {formik.touched.plan && formik.errors.plan ? (
          <div className="error">{formik.errors.plan}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Number of Users:</label>
        <input
          type="number"
          name="numberOfUsers"
          value={formik.values.numberOfUsers}
          onChange={formik.handleChange}
          className="form-control"
        />
        {formik.touched.numberOfUsers && formik.errors.numberOfUsers ? (
          <div className="error">{formik.errors.numberOfUsers}</div>
        ) : null}
      </div>
      <button type="button" onClick={prevStep} className="btn btn-secondary">Previous</button>
      <button type="submit" className="btn btn-primary">Next</button>
    </form>
  );
};

export default Step3;
