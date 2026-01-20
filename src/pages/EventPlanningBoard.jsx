import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  MdEvent, 
  MdLocationOn, 
  MdCalendarToday
} from 'react-icons/md'
import { MdCelebration } from 'react-icons/md'
import './EventPlanningBoard.css'

function EventPlanningBoard() {
  const navigate = useNavigate()
  const location = useLocation()
  const eventType = location.state?.eventType || 'party'
  const eventTypeName = location.state?.eventTypeName || 'Party'

  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    location: ''
  })

  const handleSaveEvent = () => {
    if (eventDetails.name && eventDetails.date && eventDetails.location) {
      navigate('/event/planning', {
        state: {
          eventType,
          eventTypeName,
          eventDetails
        }
      })
    } else {
      alert('Please fill in all event details')
    }
  }

  return (
    <div className="event-planning-board">
      <div className="planning-board-container">
        <div className="planning-board-header fade-in">
          <MdCelebration className="header-icon" />
          <h1>Plan Your {eventTypeName}</h1>
          <p>Let's make your celebration unforgettable</p>
        </div>

        <div className="planning-board-content">
          <div className="event-details-section card fade-in">
            <div className="section-header">
              <MdEvent className="section-icon" />
              <h2>Event Details</h2>
            </div>

            <div className="form-group">
              <label htmlFor="event-name">
                <MdEvent className="input-icon" />
                Event Name
              </label>
              <input
                id="event-name"
                type="text"
                className="input"
                placeholder="e.g., John & Jane's Wedding"
                value={eventDetails.name}
                onChange={(e) => setEventDetails({ ...eventDetails, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="event-date">
                <MdCalendarToday className="input-icon" />
                Event Date
              </label>
              <input
                id="event-date"
                type="date"
                className="input"
                value={eventDetails.date}
                onChange={(e) => setEventDetails({ ...eventDetails, date: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="event-location">
                <MdLocationOn className="input-icon" />
                Location
              </label>
              <input
                id="event-location"
                type="text"
                className="input"
                placeholder="e.g., Victoria Island, Lagos"
                value={eventDetails.location}
                onChange={(e) => setEventDetails({ ...eventDetails, location: e.target.value })}
              />
            </div>

            <button onClick={handleSaveEvent} className="btn btn-primary save-event-btn">
              Continue to Planning
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPlanningBoard
