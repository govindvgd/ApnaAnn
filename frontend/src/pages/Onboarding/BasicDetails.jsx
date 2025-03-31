import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BasicDetails() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Discarding the first 3 characters of the value
    if (name === 'phone' && value.length > 3) {
      const newValue = value.slice(4);
      setFormData({ ...formData, [name]: newValue });
      return;
    }

    if (name !== 'phone') {
      setFormData({ ...formData, [name]: value });
      return;
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    
    navigate('/onboarding/role');

    // Add your form submission logic here
  };

  return (
    <>
      <h3 className='onboarding-header'>onboarding</h3>

      <div className="onboarding-input-field-container">
        <div className="onboarding-input-field">
          <label htmlFor="name" className="onboarding-input-title">Name</label>
          <input type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            className="onboarding-input"
            onChange={handleChange} />
        </div>
        <div className="onboarding-input-field">
          <label htmlFor="Address" className="onboarding-input-title">Address</label>
          <textarea type="text"
            id="address"
            name="address"
            rows="4"
            placeholder="Address"
            value={formData.address}
            className="onboarding-input"
            onChange={handleChange} />
        </div>
        <div className="onboarding-input-field">
          <label htmlFor="phone" className="onboarding-input-title">Phone</label>
          <input type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={"+91 "+formData.phone}
            className="onboarding-input"
            onChange={handleChange} />
        </div>

      <button className="onboarding-button" onClick={handleSubmit}>Continue</button>
      
      </div>

    </>
  );
}

export default BasicDetails;