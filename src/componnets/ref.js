import { useState } from 'react';

function SignupForm() {
  // Step 1: Create state for form fields and error messages using useState
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field
    }));
  };

  // Step 3: Handle form submission with conditional logic using if statements
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Simple validation with if statements
    if (!name) {
      setError('Name is required.');
      return;
    } else if (!email) {
      setError('Email is required.');
      return;
    } else if (!password) {
      setError('Password is required.');
      return;
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Clear the error and log form data if all conditions pass
    setError('');
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
