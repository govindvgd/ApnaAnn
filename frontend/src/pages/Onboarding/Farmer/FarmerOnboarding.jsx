import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FarmerOnboarding() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState('');

  const masterProduceList = [
    { name: 'Potato', image: 'https://www.svgrepo.com/show/407239/potato.svg', id: 1, selected: false },
    { name: 'Tomato', image: 'https://www.svgrepo.com/show/475232/tomato.svg', id: 2, selected: false },
    { name: 'Garlic', image: 'https://www.svgrepo.com/show/396549/garlic.svg', id: 3, selected: false },
    { name: 'Onion', image: 'https://www.svgrepo.com/show/207774/onion.svg', id: 4, selected: false },
    { name: 'Brinjal', image: 'https://www.svgrepo.com/show/276199/eggplant.svg', id: 5, selected: false },
  ];

  const [produceList, setProduceList] = useState(masterProduceList);
  const [filteredProduce, setFilteredProduce] = useState(masterProduceList);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setSearchData(value);
    const filteredProduce = produceList.filter((produce) =>
      produce.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProduce(filteredProduce);

  };


  const handleProduceSelect = (e) => {
    const selectedId = parseInt(e.currentTarget.id.split('-')[3]);
    const updatedProduceList = produceList.map((produce) =>
      produce.id === selectedId ? { ...produce, selected: !produce.selected } : produce
    );

    const filteredProduceList = filteredProduce.map((produce) =>
      produce.id === selectedId ? { ...produce, selected: !produce.selected } : produce
    );

    setProduceList(updatedProduceList);
    setFilteredProduce(filteredProduceList);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedProduce = produceList.filter((produce) => produce.selected);
    console.log("selectedProduce", selectedProduce);

    
    navigate('/farmer/dashboard');

    // Add your form submission logic here
  };

  return (
    <>

      <div className="items-start onboarding-input-field-container">
      <h3 className='onboarding-header'>onboarding</h3>
          <h3 className="onboarding-input-title self-start ml-10 mt-12">My Produces</h3>


      <input type="text" className='onboarding-language-selector' placeholder='Search' value={searchData} onChange={handleChange} />

      {/* <button className="onboarding-button" onClick={handleSubmit}>Continue</button> */}
      
      <div className="produce-listing">
        {filteredProduce.map((produce, index) => (
          <div id={"onboarding-produce-listing-" + produce.id} key={"onboarding-produce-listing-" + produce.id} className={"produce-listing-card"} onClick={ handleProduceSelect }>
            <img id={"onboarding-produce-listing-" + produce.id} src={produce.image} alt={produce.name} className={"produce-listing-card-image " +( produce.selected ? "selected-card" : "")} />
            <h4 className='produce-listing-card-title'>{produce.name}</h4>
          </div>
        ))}
      </div>

      <button className="onboarding-button" onClick={handleSubmit}>Continue</button>

      </div>

    </>
  );
}

export default FarmerOnboarding;