import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setFormData } from '../redux/actions';

const Step2 = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.step2);

  const formik = useFormik({
    initialValues: {
      companyField: formData.companyField || [], // Ensure companyField is initialized as an array
      numberOfEmployees: formData.numberOfEmployees || '',
      wfhPolicy: formData.wfhPolicy || '',
    },
    validationSchema: Yup.object({
      companyField: Yup.array().min(1, 'At least one field is required').required('Required'),
      numberOfEmployees: Yup.string().required('Required'),
      wfhPolicy: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(setFormData('step2', values));
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="companyField"
            value="ruby"
            checked={formik.values.companyField.includes('ruby')}
            onChange={formik.handleChange}
            className="form-check-input"
          />
          Ruby
        </label>
        <label>
          <input
            type="checkbox"
            name="companyField"
            value="ai"
            checked={formik.values.companyField.includes('ai')}
            onChange={formik.handleChange}
            className="form-check-input"
          />
          AI
        </label>
        {formik.touched.companyField && formik.errors.companyField ? (
          <div className="error">{formik.errors.companyField}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>
          Number of Employees:
          <input
            type="text"
            name="numberOfEmployees"
            value={formik.values.numberOfEmployees}
            onChange={formik.handleChange}
            className="form-control"
          />
        </label>
        {formik.touched.numberOfEmployees && formik.errors.numberOfEmployees ? (
          <div className="error">{formik.errors.numberOfEmployees}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>
          Work From Home Policy:
          <input
            type="radio"
            name="wfhPolicy"
            value="yes"
            checked={formik.values.wfhPolicy === 'yes'}
            onChange={formik.handleChange}
            className="form-check-input"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="wfhPolicy"
            value="no"
            checked={formik.values.wfhPolicy === 'no'}
            onChange={formik.handleChange}
            className="form-check-input"
          />
          No
        </label>
        {formik.touched.wfhPolicy && formik.errors.wfhPolicy ? (
          <div className="error">{formik.errors.wfhPolicy}</div>
        ) : null}
      </div>
      <button type="button" onClick={prevStep} className="btn btn-secondary">Previous</button>
      <button type="submit" className="btn btn-primary">Next</button>
    </form>
  );
};

export default Step2;
