import { useNavigate } from 'react-router-dom'
import { MdStorefront, MdEvent, MdArrowForward } from 'react-icons/md'
import { MdCelebration } from 'react-icons/md'
import './RoleSelection.css'

function RoleSelection({ user, setUserRole }) {
  const navigate = useNavigate()

  const handleRoleSelect = (role) => {
    setUserRole(role)
    if (role === 'vendor') {
      navigate('/vendor/storefront')
    } else if (role === 'event-creator') {
      navigate('/event/type-selection')
    }
  }

  return (
    <div className="role-selection">
      <div className="role-selection-container">
        <div className="role-selection-header fade-in">
          <MdCelebration className="header-icon" />
          <h1>Welcome, {user?.name || 'Friend'}!</h1>
          <p>What would you like to do today?</p>
        </div>

        <div className="role-cards">
          <div 
            className="role-card card vendor-card slide-in"
            style={{ animationDelay: '0.1s' }}
            onClick={() => handleRoleSelect('vendor')}
          >
            <div className="role-card-icon">
              <MdStorefront />
            </div>
            <h2>Become a Vendor</h2>
            <p>Showcase your services and reach customers looking for amazing party vendors.</p>
            <div className="role-card-footer">
              <span className="role-card-cta">
                Set up your store
                <MdArrowForward className="arrow-icon" />
              </span>
            </div>
          </div>

          <div 
            className="role-card card event-card slide-in"
            style={{ animationDelay: '0.2s' }}
            onClick={() => handleRoleSelect('event-creator')}
          >
            <div className="role-card-icon">
              <MdEvent />
            </div>
            <h2>Create an Event</h2>
            <p>Plan your perfect Owambe and discover vendors that make celebrations memorable.</p>
            <div className="role-card-footer">
              <span className="role-card-cta">
                Start planning
                <MdArrowForward className="arrow-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleSelection
