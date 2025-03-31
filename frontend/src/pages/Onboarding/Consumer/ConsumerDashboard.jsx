import React from 'react'
import ChatBox from '../../../components/ChatBot'

function ConsumerDashboard() {
  return (
    <div className="main-container">
      <h1 className="text-5xl font-bold text-green-800 mb-8">Consumer Dashboard</h1>
      <p className="text-lg text-gray-700">Welcome to the Consumer Dashboard!</p>
      {/* Add your consumer-specific components and features here */}

      <div className="chatbot">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Chatbot</h2>
        <p className="text-lg text-gray-700">Interact with the chatbot for assistance.</p>
        {/* Add your chatbot component here */}
        <ChatBox />
      </div>
    </div>
  )
}

export default ConsumerDashboard