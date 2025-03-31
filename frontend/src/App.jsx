import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Onboarding from './pages/Onboarding/Welcome'
import RoleSelection from './pages/Onboarding/RoleSelection'
import FarmerOnboarding from './pages/Onboarding/Farmer/FarmerOnboarding'
import AdditionalDetails from './pages/Onboarding/Farmer/AdditionalDetails'
import ConsumerOnboarding from './pages/Onboarding/Consumer/ConsumerOnboarding'
import FarmerDashboard from './pages/Onboarding/Farmer/FarmerDashboard'
import ConsumerDashboard from './pages/Onboarding/Consumer/ConsumerDashboard'
import BasicDetails from './pages/Onboarding/BasicDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding/details" element={<BasicDetails />} />
        <Route path="/onboarding/role" element={<RoleSelection />} />
        <Route path="/farmer/onboarding" element={<FarmerOnboarding />} />
        {/* <Route path="/farmer/onboarding/additional-details" element={<AdditionalDetails />} /> */}
        <Route path="/consumer/dashboard" element={<ConsumerDashboard />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}



export default App
