import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdditionalDetails() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState('');

  const handleChange = (e) => {

    const { name, value } = e.target;

  };

  const [formData, setFormData] = useState({
    range: '',
    options: [],
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedProduce = produceList.filter((produce) => produce.selected);
    console.log("selectedProduce", selectedProduce);

    
    navigate('/');

    // Add your form submission logic here
  };

  return (
    <>
      <h3 className='onboarding-header'>onboarding</h3>

<div className="onboarding-input-field-container">
  <div className="onboarding-input-field">
    <label htmlFor="name" className="onboarding-input-title">Range</label>
    <input type="number"
      id="name"
      name="name"
      placeholder="Full Name"
      value={formData.range}
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

<button className="onboarding-button" onClick={handleSubmit}>Continue</button>

</div>
    </>
  );
}

export default AdditionalDetails;