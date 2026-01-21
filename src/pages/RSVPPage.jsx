import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  MdEventNote, 
  MdPerson, 
  MdEmail, 
  MdPhone,
  MdCheckCircle,
  MdCancel,
  MdHelpOutline,
  MdAdd,
  MdEdit,
  MdDelete,
  MdArrowBack,
  MdTableRestaurant
} from 'react-icons/md'
import './RSVPPage.css'

function RSVPPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const eventDetails = location.state?.eventDetails || {}
  const eventTypeName = location.state?.eventTypeName || 'Event'

  const [rsvps, setRsvps] = useState([
    {
      id: 1,
      name: 'Adebayo Adekunle',
      email: 'adebayo@example.com',
      phone: '+234 801 234 5678',
      status: 'confirmed',
      plusOne: false,
      plusOneName: '',
      tableAssignment: 'Table 5'
    },
    {
      id: 2,
      name: 'Chioma Okafor',
      email: 'chioma@example.com',
      phone: '+234 802 345 6789',
      status: 'pending',
      plusOne: true,
      plusOneName: 'Emeka Okafor',
      tableAssignment: ''
    },
    {
      id: 3,
      name: 'Segun Williams',
      email: 'segun@example.com',
      phone: '+234 803 456 7890',
      status: 'declined',
      plusOne: false,
      plusOneName: '',
      tableAssignment: ''
    }
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'pending',
    plusOne: false,
    plusOneName: '',
    tableAssignment: ''
  })

  const handleAddRSVP = () => {
    if (formData.name && formData.email) {
      const newRSVP = {
        id: Date.now(),
        ...formData
      }
      setRsvps([...rsvps, newRSVP])
      resetForm()
      setShowAddForm(false)
    }
  }

  const handleEditRSVP = (id) => {
    const rsvp = rsvps.find(r => r.id === id)
    if (rsvp) {
      setFormData(rsvp)
      setEditingId(id)
      setShowAddForm(true)
    }
  }

  const handleUpdateRSVP = () => {
    if (formData.name && formData.email) {
      setRsvps(rsvps.map(r => r.id === editingId ? { ...formData, id: editingId } : r))
      resetForm()
      setShowAddForm(false)
      setEditingId(null)
    }
  }

  const handleDeleteRSVP = (id) => {
    if (window.confirm('Are you sure you want to remove this RSVP?')) {
      setRsvps(rsvps.filter(r => r.id !== id))
    }
  }

  const handleStatusChange = (id, newStatus) => {
    setRsvps(rsvps.map(r => r.id === id ? { ...r, status: newStatus } : r))
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      status: 'pending',
      plusOne: false,
      plusOneName: '',
      tableAssignment: ''
    })
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <MdCheckCircle className="rsvp-status-icon rsvp-status-confirmed" />
      case 'declined':
        return <MdCancel className="rsvp-status-icon rsvp-status-declined" />
      default:
        return <MdHelpOutline className="rsvp-status-icon rsvp-status-pending" />
    }
  }

  const getStatusCounts = () => {
    return {
      confirmed: rsvps.filter(r => r.status === 'confirmed').length,
      pending: rsvps.filter(r => r.status === 'pending').length,
      declined: rsvps.filter(r => r.status === 'declined').length
    }
  }

  const counts = getStatusCounts()

  return (
    <div className="rsvp-page">
      <div className="rsvp-container">
        <button 
          onClick={() => navigate('/event/planning')} 
          className="rsvp-back-btn btn btn-outline"
        >
          <MdArrowBack />
          Back to Planning
        </button>

        <div className="rsvp-header fade-in">
          <MdEventNote className="rsvp-header-icon" />
          <h1>RSVP Management</h1>
          <p>Manage your {eventTypeName} guest list</p>
        </div>

        {/* RSVP Stats */}
        <div className="rsvp-stats fade-in">
          <div className="rsvp-stat-card card">
            <div className="rsvp-stat-number rsvp-stat-confirmed">{counts.confirmed}</div>
            <div className="rsvp-stat-label">Confirmed</div>
          </div>
          <div className="rsvp-stat-card card">
            <div className="rsvp-stat-number rsvp-stat-pending">{counts.pending}</div>
            <div className="rsvp-stat-label">Pending</div>
          </div>
          <div className="rsvp-stat-card card">
            <div className="rsvp-stat-number rsvp-stat-declined">{counts.declined}</div>
            <div className="rsvp-stat-label">Declined</div>
          </div>
          <div className="rsvp-stat-card card">
            <div className="rsvp-stat-number rsvp-stat-total">{rsvps.length}</div>
            <div className="rsvp-stat-label">Total Guests</div>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showAddForm && (
          <div className="rsvp-form-card card fade-in">
            <h2>{editingId ? 'Edit RSVP' : 'Add New RSVP'}</h2>
            <div className="rsvp-form">
              <div className="form-group">
                <label htmlFor="rsvp-name">
                  <MdPerson className="input-icon" />
                  Name *
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  className="input"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="rsvp-email">
                  <MdEmail className="input-icon" />
                  Email *
                </label>
                <input
                  id="rsvp-email"
                  type="email"
                  className="input"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="rsvp-phone">
                  <MdPhone className="input-icon" />
                  Phone
                </label>
                <input
                  id="rsvp-phone"
                  type="tel"
                  className="input"
                  placeholder="+234 801 234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="rsvp-table">
                  <MdTableRestaurant className="input-icon" />
                  Table Assignment (Optional)
                </label>
                <input
                  id="rsvp-table"
                  type="text"
                  className="input"
                  placeholder="e.g., Table 5, VIP Section, etc."
                  value={formData.tableAssignment}
                  onChange={(e) => setFormData({ ...formData, tableAssignment: e.target.value })}
                />
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.plusOne}
                    onChange={(e) => setFormData({ ...formData, plusOne: e.target.checked })}
                  />
                  Plus One?
                </label>
              </div>

              {formData.plusOne && (
                <div className="form-group">
                  <label htmlFor="plus-one-name">
                    <MdPerson className="input-icon" />
                    Plus One Name
                  </label>
                  <input
                    id="plus-one-name"
                    type="text"
                    className="input"
                    placeholder="Plus one name"
                    value={formData.plusOneName}
                    onChange={(e) => setFormData({ ...formData, plusOneName: e.target.value })}
                  />
                </div>
              )}

              <div className="rsvp-form-actions">
                <button
                  onClick={editingId ? handleUpdateRSVP : handleAddRSVP}
                  className="btn btn-primary"
                >
                  {editingId ? 'Update RSVP' : 'Add RSVP'}
                </button>
                <button
                  onClick={() => {
                    resetForm()
                    setShowAddForm(false)
                    setEditingId(null)
                  }}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Button */}
        {!showAddForm && (
          <div className="rsvp-add-btn-container fade-in">
            <button
              onClick={() => setShowAddForm(true)}
              className="btn btn-primary rsvp-add-btn"
            >
              <MdAdd />
              Add RSVP
            </button>
          </div>
        )}

        {/* RSVP List */}
        <div className="rsvp-list fade-in">
          {rsvps.length === 0 ? (
            <div className="rsvp-empty-state card">
              <MdEventNote className="empty-icon" />
              <p>No RSVPs yet. Add your first guest!</p>
            </div>
          ) : (
            rsvps.map((rsvp) => (
              <div key={rsvp.id} className="rsvp-card card">
                <div className="rsvp-card-header">
                  <div className="rsvp-card-info">
                    {getStatusIcon(rsvp.status)}
                    <div>
                      <h3>{rsvp.name}</h3>
                      <div className="rsvp-card-details">
                        <span><MdEmail /> {rsvp.email}</span>
                        {rsvp.phone && <span><MdPhone /> {rsvp.phone}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="rsvp-card-status">
                    <select
                      value={rsvp.status}
                      onChange={(e) => handleStatusChange(rsvp.id, e.target.value)}
                      className="rsvp-status-select"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="declined">Declined</option>
                    </select>
                  </div>
                </div>

                {rsvp.plusOne && rsvp.plusOneName && (
                  <div className="rsvp-plus-one">
                    <MdPerson />
                    <span>Plus One: {rsvp.plusOneName}</span>
                  </div>
                )}

                {rsvp.tableAssignment && (
                  <div className="rsvp-table-assignment">
                    <MdTableRestaurant />
                    <span>Table: {rsvp.tableAssignment}</span>
                  </div>
                )}

                <div className="rsvp-card-actions">
                  <button
                    onClick={() => handleEditRSVP(rsvp.id)}
                    className="rsvp-action-btn rsvp-edit-btn"
                    title="Edit"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteRSVP(rsvp.id)}
                    className="rsvp-action-btn rsvp-delete-btn"
                    title="Delete"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default RSVPPage
