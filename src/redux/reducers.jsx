const initialState = {
    step1: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      companyWebsite: '',
      state: '',
      zipCode: '',
    },
    step2: {
      companyField: [], // Initialize as an empty array
      numberOfEmployees: '',
      wfhPolicy: '',
    },
    step3: {
      startDate: null,
      plan: '',
      numberOfUsers: '',
    },
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FORM_DATA':
        const { step, data } = action.payload;
        return {
          ...state,
          [step]: data,
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  