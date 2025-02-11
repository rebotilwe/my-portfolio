import React, { useState } from 'react';
import './FormStyles.css';
import axios from 'axios';
import Swal from 'sweetalert2';


const Form = () => {

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [FormData, setFormData] = useState({
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
      ...FormData,
      [name]: value
    });
  };


  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!FormData.name) {
      errors.name = "* Name is required"
      isValid = false;
    }

    if (!FormData.email) {
      errors.email = "* Email address is required";
      isValid = false;

    } else {
      const newEmail = FormData.email;
      setEmail(newEmail);

      // Regular expression for a basic email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(newEmail);

      if (!isValid) {
        errors.email = "* Invalid email address entered";
      }
    }

    if (!FormData.subject) {
      errors.subject = "* Subject is required"
      isValid = false;
    }

    if (!FormData.message) {
      errors.message = "* Message is required"
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;

  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
        const response = await axios.post('http://localhost:5000/submit-form', FormData);

        if (response.status === 200) {
            Swal.fire('Success!', 'Your message has been sent!', 'success');
        } else {
            Swal.fire('Error!', 'Something went wrong. Please try again.', 'error');
        }

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        Swal.fire('Error!', 'Failed to send message. Try again.', 'error');
    } finally {
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
          value={FormData.name}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.name}</span>

        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={FormData.email}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.email}</span>

        <label>Subject:</label>
        <input
          type='text'
          name='subject'
          value={FormData.subject}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.subject}</span>

        <label>Message:</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name='message'
          value={FormData.message}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.message}</span>

        <button type="submit" className="btn" disabled={loading}>{loading ? 'Submitting...' : 'SUBMIT'}</button>
      </form>
    </div>
  )
}

export default Form;