import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const step1 = useSelector((state) => state.form.step1);
  const step2 = useSelector((state) => state.form.step2);
  const step3 = useSelector((state) => state.form.step3);

  const planPrices = {
    'monthly-gold': 50,
    'monthly-titanium': 100,
    'yearly-gold': 500,
    'yearly-titanium': 1000,
  };

  const selectedPlanPrice = planPrices[step3.plan] || 0;
  const finalPrice = selectedPlanPrice * step3.numberOfUsers;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <h3>Step 1: Personal Information</h3>
      <p>First Name: {step1.firstName}</p>
      <p>Last Name: {step1.lastName}</p>
      <p>Email: {step1.email}</p>
      <p>Company Name: {step1.companyName}</p>
      <p>Company Website: {step1.companyWebsite}</p>
      <p>State: {step1.state}</p>
      <p>Zip Code: {step1.zipCode}</p>

      <h3>Step 2: Company Information</h3>
      <p>Company Field: {step2.companyField.join(', ')}</p>
      <p>Number of Employees: {step2.numberOfEmployees}</p>
      <p>WFH Policy: {step2.wfhPolicy}</p>

      <h3>Step 3: Plan Selection</h3>
      <p>Start Date: {step3.startDate && step3.startDate.toDateString()}</p>
      <p>Selected Plan: {step3.plan}</p>
      <p>Number of Users: {step3.numberOfUsers}</p>
      <p>Final Price: ${finalPrice}</p>
    </div>
  );
};

export default Summary;
