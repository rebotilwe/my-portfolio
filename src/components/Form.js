import React, { useState } from 'react';
import './FormStyles.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name) {
      errors.name = "* Name is required";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "* Email address is required";
      isValid = false;
    } else {
      // Regular expression for a basic email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "* Invalid email address entered";
        isValid = false;
      }
    }

    if (!formData.subject) {
      errors.subject = "* Subject is required";
      isValid = false;
    }

    if (!formData.message) {
      errors.message = "* Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validateForm()) {
        setLoading(true);

        await axios.post('https://my-node-app-qfg5.onrender.com/submit-form', { formData });
        console.log("Form submitted:", formData);
        Swal.fire('Success!', 'Message sent successfully', 'success');

        setLoading(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.log("Form has errors");
      }
    } catch (error) {
      console.log("Failed to submit form:", error);
      Swal.fire('Error!', 'Something went wrong. Please check your internet connection and try again.', 'error');
      setLoading(false);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.name}</span>

        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.email}</span>

        <label>Subject:</label>
        <input
          type='text'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.subject}</span>

        <label>Message:</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name='message'
          value={formData.message}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.message}</span>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Submitting...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
};

export default Form;
