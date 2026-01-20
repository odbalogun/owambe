import { useNavigate } from 'react-router-dom'
import { 
  FaHeart,
  FaBirthdayCake,
  FaCalendarAlt,
  FaBriefcase,
  FaGlassCheers,
  FaBaby,
  FaArrowRight
} from 'react-icons/fa'
import { MdCelebration } from 'react-icons/md'
import './EventTypeSelection.css'

function EventTypeSelection() {
  const navigate = useNavigate()

  const eventTypes = [
    {
      id: 'wedding',
      name: 'Wedding',
      icon: FaHeart,
      description: 'Your special day deserves the perfect celebration',
      color: 'var(--primary-red)'
    },
    {
      id: 'birthday',
      name: 'Birthday',
      icon: FaBirthdayCake,
      description: 'Celebrate another year of life with style',
      color: 'var(--primary-orange)'
    },
    {
      id: 'anniversary',
      name: 'Anniversary',
      icon: FaCalendarAlt,
      description: 'Mark your milestone in grand style',
      color: 'var(--primary-purple)'
    },
    {
      id: 'corporate',
      name: 'Corporate Event',
      icon: FaBriefcase,
      description: 'Professional gatherings that make an impact',
      color: 'var(--primary-green)'
    },
    {
      id: 'party',
      name: 'General Party',
      icon: FaGlassCheers,
      description: 'Any reason to celebrate is a good reason',
      color: 'var(--primary-yellow)'
    },
    {
      id: 'naming',
      name: 'Naming Ceremony',
      icon: FaBaby,
      description: 'Welcome your little one into the world',
      color: 'var(--accent-turquoise)'
    }
  ]

  const handleEventTypeSelect = (eventType) => {
    navigate('/event/planning-board', { 
      state: { eventType: eventType.id, eventTypeName: eventType.name } 
    })
  }

  return (
    <div className="event-type-selection">
      <div className="event-type-container">
        <div className="event-type-header fade-in">
          <MdCelebration className="header-icon" />
          <h1>What are you celebrating?</h1>
          <p>Choose the type of event you'd like to plan</p>
        </div>

        <div className="event-types-grid">
          {eventTypes.map((eventType, index) => {
            const IconComponent = eventType.icon
            return (
              <div
                key={eventType.id}
                className="event-type-card card fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--event-color': eventType.color
                }}
                onClick={() => handleEventTypeSelect(eventType)}
              >
                <div className="event-type-icon-wrapper">
                  <IconComponent className="event-type-icon" />
                </div>
                <h2>{eventType.name}</h2>
                <p>{eventType.description}</p>
                <div className="event-type-footer">
                  <span className="event-type-cta">
                    Plan this event
                    <FaArrowRight className="arrow-icon" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EventTypeSelection
