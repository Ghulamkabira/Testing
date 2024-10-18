import { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: ''
}; 


const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

function SignupForm() {
  
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with state (e.g., send to an API)
    console.log('Form submitted:', state);
    dispatch({ type: 'RESET_FORM' }); // Optionally reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Form</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
