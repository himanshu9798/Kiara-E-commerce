import React, { useState } from 'react';
import contact from '../images/businesswoman-call-center-office.jpg'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    console.log('Form submitted:', formData);
  };

  const styles = {
    container: {
      backgroundColor: '#f1f1f0',
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#333'
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1000px'
    },
    info: {
      flex: 1,
      padding: '20px'
    },
    infoHeading: {
      fontSize: '2rem',
      marginBottom: '10px'
    },
    infoText: {
      fontSize: '1rem',
      color: '#666'
    },
    image: {
      marginTop: '20px',
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      transition: 'transform 0.3s ease',
      transform:"none"
    },
    form: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    input: {
      padding: '15px',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '5px',
      transition: 'all 0.3s ease'
    },
    inputFocus: {
      borderColor: '#007bff',
      outline: 'none'
    },
    submit: {
      padding: '15px',
      fontSize: '1.1rem',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <div style={styles.content}>
        <div style={styles.info}>
          <h3 style={styles.infoHeading}>Get in Touch</h3>
          <p style={styles.infoText}>
            If you have any questions or need assistance, feel free to reach out to us. We're here to help!
          </p>
          <img
            src={contact}
            alt="Customer Support"
            style={styles.image}
            className="contact-image"
          />
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
