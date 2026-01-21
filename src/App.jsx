import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import RoleSelection from './pages/RoleSelection'
import VendorStorefront from './pages/VendorStorefront'
import EventTypeSelection from './pages/EventTypeSelection'
import EventPlanningBoard from './pages/EventPlanningBoard'
import PlanningPage from './pages/PlanningPage'
import VendorChat from './pages/VendorChat'
import AfricanBackground from './components/AfricanBackground'

function App() {
  const location = useLocation()
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('owambe_user')
    return savedUser ? JSON.parse(savedUser) : null
  })
  
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('owambe_userRole') || null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('owambe_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('owambe_user')
    }
  }, [user])

  useEffect(() => {
    if (userRole) {
      localStorage.setItem('owambe_userRole', userRole)
    } else {
      localStorage.removeItem('owambe_userRole')
    }
  }, [userRole])

  const showBackground = location.pathname !== '/'

  return (
    <>
      {showBackground && <AfricanBackground />}
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/login" 
          element={<Login user={user} setUser={setUser} />} 
        />
        <Route 
          path="/role-selection" 
          element={
            user ? (
              <RoleSelection user={user} setUserRole={setUserRole} />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/vendor/storefront" 
          element={<VendorStorefront />} 
        />
        <Route 
          path="/event/type-selection" 
          element={<EventTypeSelection />} 
        />
        <Route 
          path="/event/planning-board" 
          element={<EventPlanningBoard />} 
        />
        <Route 
          path="/event/planning" 
          element={<PlanningPage />} 
        />
        <Route 
          path="/vendor/:vendorId/chat" 
          element={<VendorChat />} 
        />
      </Routes>
    </>
  )
}

export default App
