import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MdSend, MdArrowBack, MdPerson } from 'react-icons/md'
import { MdCelebration } from 'react-icons/md'
import './VendorChat.css'

function VendorChat() {
  const { vendorId } = useParams()
  const navigate = useNavigate()
  const messagesEndRef = useRef(null)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hello! I'm interested in your services for my event. Can you tell me more about your packages?`,
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: 2,
      text: `Hi! Thank you for reaching out. I'd be happy to help you plan your event. What type of event are you planning?`,
      sender: 'vendor',
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')

  const vendorInfo = {
    1: { name: 'Taste of Lagos Catering', avatar: '🍽️' },
    2: { name: 'Royal Decorations', avatar: '🎨' },
    3: { name: 'African Beats DJ', avatar: '🎵' },
    4: { name: 'Elite Photography', avatar: '📸' }
  }

  const vendor = vendorInfo[vendorId] || { name: 'Vendor', avatar: '👤' }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      }
      setMessages([...messages, message])
      setNewMessage('')

      // Simulate vendor response
      setTimeout(() => {
        const vendorResponse = {
          id: messages.length + 2,
          text: `Thank you for your message! I'll get back to you with more details shortly.`,
          sender: 'vendor',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, vendorResponse])
      }, 1500)
    }
  }

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date)
  }

  return (
    <div className="vendor-chat">
      <div className="chat-container">
        <div className="chat-header card">
          <button 
            onClick={() => navigate('/event/planning')}
            className="back-button"
          >
            <MdArrowBack />
          </button>
          <div className="vendor-header-info">
            <div className="vendor-avatar">{vendor.avatar}</div>
            <div>
              <h2>{vendor.name}</h2>
              <p className="vendor-status">Online</p>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          <div className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'message-user' : 'message-vendor'} fade-in`}
              >
                {message.sender === 'vendor' && (
                  <div className="message-avatar">{vendor.avatar}</div>
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    <p>{message.text}</p>
                    <span className="message-time">{formatTime(message.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="chat-input-form card">
          <div className="chat-input-wrapper">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit" className="send-button btn btn-primary">
              <MdSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VendorChat
