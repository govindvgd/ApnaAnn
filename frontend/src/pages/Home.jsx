import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const LoggedIn = false;
  const UserType = 'farmer'; // or 'consumer'

  const navigate = useNavigate();

  useEffect(() => {
    if (!LoggedIn) {
      navigate('/onboarding');
    } else {
      console.log(UserType)
      navigate(`/${UserType}/dashboard`);
    }
  }, [])

  return (
    <>
    </>
  )
}

export default Home