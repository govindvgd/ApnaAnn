import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <>

    <div className="onboarding-input-field-container flex flex-col">
    {/* <h3 className='onboarding-header'>onboarding</h3> */}
      <h1 className="onboarding-role-selector-title">I'm a</h1>
      <div className="flex space-x-4">
        <button className="onboarding-role-selector-btn" onClick={() => navigate("/consumer/dashboard")}>
          Consumer
        </button>
        <button className="onboarding-role-selector-btn" onClick={() => navigate("/farmer/onboarding")}>
          Farmer
        </button>
      </div>
      
    </div>
    </>
  );
};

export default RoleSelection;
