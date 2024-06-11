import * as Yup from 'yup';

export const step1Schema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  companyName: Yup.string().required('Company Name is required'),
  companyWebsite: Yup.string().url('Invalid URL').required('Company Website is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('Zip Code is required'),
});

export const step2Schema = Yup.object({
  companyField: Yup.array().min(1, 'At least one field is required').required('Required'),
  numberOfEmployees: Yup.string().required('Required'),
  wfhPolicy: Yup.string().required('Required'),
});

export const step3Schema = Yup.object({
  startDate: Yup.date().required('Start Date is required'),
  plan: Yup.string().required('Plan is required'),
  numberOfUsers: Yup.number().required('Number of Users is required'),
});
