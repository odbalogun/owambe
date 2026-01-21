import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  MdSearch,
  MdStar,
  MdChat,
  MdLocationOn,
  MdFilterList,
  MdSort,
  MdBusiness,
  MdEventNote,
  MdAdd,
  MdDownload,
  MdPerson,
  MdEmail,
  MdPhone,
  MdCheckCircle,
  MdCancel,
  MdHelpOutline,
  MdEdit,
  MdDelete,
  MdTableRestaurant,
  MdShoppingCart,
  MdLink,
  MdAttachMoney,
  MdShare
} from 'react-icons/md'
import { FaHeart, FaGift, FaUsers } from 'react-icons/fa'
import './PlanningPage.css'

function PlanningPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const eventDetails = location.state?.eventDetails || {}
  const eventTypeName = location.state?.eventTypeName || 'Event'

  const [activeTab, setActiveTab] = useState('vendors')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  // Selected vendors with status - alternating statuses
  const [selectedVendors, setSelectedVendors] = useState([
    {
      id: 1,
      name: 'Taste of Lagos Catering',
      category: 'Caterer',
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria',
      status: 'negotiating'
    },
    {
      id: 2,
      name: 'Royal Decorations',
      category: 'Decorator',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=200&h=200&fit=crop',
      location: 'Abuja, Nigeria',
      status: 'contract-offered'
    },
    {
      id: 4,
      name: 'Elite Photography',
      category: 'Photographer',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop',
      location: 'Port Harcourt, Nigeria',
      status: 'contract-accepted'
    }
  ])

  // Available vendors to search
  const allVendors = [
    {
      id: 1,
      name: 'Taste of Lagos Catering',
      category: 'Caterer',
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 2,
      name: 'Royal Decorations',
      category: 'Decorator',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=200&h=200&fit=crop',
      location: 'Abuja, Nigeria'
    },
    {
      id: 3,
      name: 'African Beats DJ',
      category: 'Music',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 4,
      name: 'Elite Photography',
      category: 'Photographer',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 5,
      name: 'Floral Elegance',
      category: 'Florist',
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 6,
      name: 'Classic Venues',
      category: 'Venue',
      rating: 4.8,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da2b0f2?w=200&h=200&fit=crop',
      location: 'Abuja, Nigeria'
    },
    {
      id: 7,
      name: 'Cinematic Films',
      category: 'Videographer',
      rating: 4.9,
      reviews: 201,
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 8,
      name: 'Glamour Makeup Studio',
      category: 'Makeup Artist',
      rating: 4.8,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 9,
      name: 'Master of Ceremonies Pro',
      category: 'MC',
      rating: 4.7,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57025c3b4?w=200&h=200&fit=crop',
      location: 'Abuja, Nigeria'
    },
    {
      id: 10,
      name: 'Elegant Event Planning',
      category: 'Event Planner',
      rating: 4.9,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 11,
      name: 'Savory Delights Catering',
      category: 'Caterer',
      rating: 4.7,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=200&h=200&fit=crop',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 12,
      name: 'Luxury Decor Hub',
      category: 'Decorator',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da2b0f2?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 13,
      name: 'Hair by Grace',
      category: 'Hair Stylist',
      rating: 4.6,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=200&fit=crop',
      location: 'Abuja, Nigeria'
    },
    {
      id: 14,
      name: 'Afrobeat Sounds',
      category: 'Music',
      rating: 4.9,
      reviews: 298,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 15,
      name: 'Moment Capture Studio',
      category: 'Photographer',
      rating: 4.8,
      reviews: 223,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=200&fit=crop',
      location: 'Abuja, Nigeria'
    },
    {
      id: 16,
      name: 'Gardenia Blooms',
      category: 'Florist',
      rating: 4.7,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1564154973-6bcbf15a9db6?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 17,
      name: 'Grand Ballroom Venues',
      category: 'Venue',
      rating: 4.9,
      reviews: 445,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=200&h=200&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 18,
      name: 'Video Masters',
      category: 'Videographer',
      rating: 4.8,
      reviews: 192,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=200&fit=crop',
      location: 'Port Harcourt, Nigeria'
    }
  ]

  const categories = ['all', ...new Set(allVendors.map(v => v.category))]

  // RSVP State
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

  const [showAddRSVPForm, setShowAddRSVPForm] = useState(false)
  const [editingRSVPId, setEditingRSVPId] = useState(null)
  const [rsvpFormData, setRsvpFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'pending',
    plusOne: false,
    plusOneName: '',
    tableAssignment: ''
  })

  // RSVP Handlers
  const handleAddRSVP = () => {
    if (rsvpFormData.name && rsvpFormData.email) {
      const newRSVP = {
        id: Date.now(),
        ...rsvpFormData
      }
      setRsvps([...rsvps, newRSVP])
      resetRSVPForm()
      setShowAddRSVPForm(false)
    }
  }

  const handleEditRSVP = (id) => {
    const rsvp = rsvps.find(r => r.id === id)
    if (rsvp) {
      setRsvpFormData(rsvp)
      setEditingRSVPId(id)
      setShowAddRSVPForm(true)
    }
  }

  const handleUpdateRSVP = () => {
    if (rsvpFormData.name && rsvpFormData.email) {
      setRsvps(rsvps.map(r => r.id === editingRSVPId ? { ...rsvpFormData, id: editingRSVPId } : r))
      resetRSVPForm()
      setShowAddRSVPForm(false)
      setEditingRSVPId(null)
    }
  }

  const handleDeleteRSVP = (id) => {
    if (window.confirm('Are you sure you want to remove this RSVP?')) {
      setRsvps(rsvps.filter(r => r.id !== id))
    }
  }

  const handleRSVPStatusChange = (id, newStatus) => {
    setRsvps(rsvps.map(r => r.id === id ? { ...r, status: newStatus } : r))
  }

  const resetRSVPForm = () => {
    setRsvpFormData({
      name: '',
      email: '',
      phone: '',
      status: 'pending',
      plusOne: false,
      plusOneName: '',
      tableAssignment: ''
    })
  }

  const getRSVPStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <MdCheckCircle className="rsvp-status-icon rsvp-status-confirmed" />
      case 'declined':
        return <MdCancel className="rsvp-status-icon rsvp-status-declined" />
      default:
        return <MdHelpOutline className="rsvp-status-icon rsvp-status-pending" />
    }
  }

  const getRSVPStatusCounts = () => {
    return {
      confirmed: rsvps.filter(r => r.status === 'confirmed').length,
      pending: rsvps.filter(r => r.status === 'pending').length,
      declined: rsvps.filter(r => r.status === 'declined').length
    }
  }

  // Gift Registry State
  const [registryItems, setRegistryItems] = useState([
    {
      id: 1,
      name: 'Kitchen Stand Mixer',
      description: 'Professional grade stand mixer for the kitchen',
      price: 85000,
      quantity: 1,
      purchased: 0,
      purchasers: [],
      link: 'https://example.com/mixer',
      category: 'Kitchen',
      priority: 'high'
    },
    {
      id: 2,
      name: 'Bedsheet Set (King Size)',
      description: 'Luxury cotton bedsheet set with pillowcases',
      price: 45000,
      quantity: 2,
      purchased: 1,
      purchasers: [
        { name: 'Adebayo Adekunle', quantity: 1 }
      ],
      link: 'https://example.com/bedsheets',
      category: 'Home',
      priority: 'medium'
    },
    {
      id: 3,
      name: 'Dining Table Set',
      description: '8-seater modern dining table with chairs',
      price: 350000,
      quantity: 1,
      purchased: 0,
      purchasers: [],
      link: 'https://example.com/dining',
      category: 'Furniture',
      priority: 'high'
    }
  ])

  const [showAddRegistryForm, setShowAddRegistryForm] = useState(false)
  const [editingRegistryId, setEditingRegistryId] = useState(null)
  const [registryFormData, setRegistryFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: 1,
    purchased: 0,
    purchasers: [],
    link: '',
    category: 'Home',
    priority: 'medium'
  })

  // Gift Registry Handlers
  const handleAddRegistryItem = () => {
    if (registryFormData.name && registryFormData.price) {
      const newItem = {
        id: Date.now(),
        ...registryFormData,
        price: parseFloat(registryFormData.price),
        quantity: parseInt(registryFormData.quantity) || 1,
        purchased: parseInt(registryFormData.purchased) || 0,
        purchasers: registryFormData.purchasers || []
      }
      setRegistryItems([...registryItems, newItem])
      resetRegistryForm()
      setShowAddRegistryForm(false)
    }
  }

  const handleEditRegistryItem = (id) => {
    const item = registryItems.find(r => r.id === id)
    if (item) {
      setRegistryFormData({
        ...item,
        price: item.price.toString(),
        quantity: item.quantity.toString(),
        purchased: item.purchased.toString(),
        purchasers: item.purchasers || []
      })
      setEditingRegistryId(id)
      setShowAddRegistryForm(true)
    }
  }

  const handleUpdateRegistryItem = () => {
    if (registryFormData.name && registryFormData.price) {
      const existingItem = registryItems.find(r => r.id === editingRegistryId)
      setRegistryItems(registryItems.map(r => 
        r.id === editingRegistryId 
          ? { 
              ...registryFormData, 
              id: editingRegistryId,
              price: parseFloat(registryFormData.price),
              quantity: parseInt(registryFormData.quantity) || 1,
              purchased: parseInt(registryFormData.purchased) || 0,
              purchasers: existingItem?.purchasers || []
            } 
          : r
      ))
      resetRegistryForm()
      setShowAddRegistryForm(false)
      setEditingRegistryId(null)
    }
  }

  const handleDeleteRegistryItem = (id) => {
    if (window.confirm('Are you sure you want to remove this item from the registry?')) {
      setRegistryItems(registryItems.filter(r => r.id !== id))
    }
  }

  const resetRegistryForm = () => {
    setRegistryFormData({
      name: '',
      description: '',
      price: '',
      quantity: 1,
      purchased: 0,
      purchasers: [],
      link: '',
      category: 'Home',
      priority: 'medium'
    })
  }

  const handleShareRegistry = () => {
    const registryLink = `${window.location.origin}/event/planning?tab=registry&share=true`
    
    if (navigator.share) {
      navigator.share({
        title: `${eventDetails.name || eventTypeName} Gift Registry`,
        text: 'Check out our gift registry!',
        url: registryLink
      }).catch(err => {
        console.log('Error sharing:', err)
        copyToClipboard(registryLink)
      })
    } else {
      copyToClipboard(registryLink)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Registry link copied to clipboard!')
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      alert('Registry link copied to clipboard!')
    })
  }

  const getRegistryStats = () => {
    const totalItems = registryItems.length
    const totalPurchased = registryItems.reduce((sum, item) => sum + item.purchased, 0)
    const totalRemaining = registryItems.reduce((sum, item) => sum + (item.quantity - item.purchased), 0)
    const totalValue = registryItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const purchasedValue = registryItems.reduce((sum, item) => sum + (item.price * item.purchased), 0)
    
    return {
      totalItems,
      totalPurchased,
      totalRemaining,
      totalValue,
      purchasedValue,
      remainingValue: totalValue - purchasedValue
    }
  }

  // Filter and sort vendors
  let filteredVendors = allVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === 'all' || vendor.category === filterCategory
    return matchesSearch && matchesCategory
  })

  // Sort vendors
  filteredVendors = [...filteredVendors].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating
      case 'reviews':
        return b.reviews - a.reviews
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  // Get vendors not yet selected
  const availableVendors = filteredVendors.filter(
    v => !selectedVendors.some(sv => sv.id === v.id)
  )

  const handleAddVendor = (vendor) => {
    // Alternate between different statuses
    const statuses = ['negotiating', 'contract-offered', 'contract-accepted']
    const statusIndex = selectedVendors.length % statuses.length
    setSelectedVendors([...selectedVendors, { ...vendor, status: statuses[statusIndex] }])
  }

  const handleVendorNameClick = (vendorId) => {
    navigate('/vendor/storefront')
  }

  const handleDownloadContract = (vendorId, e) => {
    e.stopPropagation()
    // Simulate downloading contract
    alert(`Downloading contract for vendor ${vendorId}`)
    // In a real app, this would trigger an actual download
  }

  const handleChatWithVendor = (vendorId) => {
    navigate(`/vendor/${vendorId}/chat`)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'negotiating':
        return 'var(--primary-yellow)'
      case 'contract-offered':
        return 'var(--primary-orange)'
      case 'contract-accepted':
        return 'var(--primary-green)'
      default:
        return 'var(--text-medium)'
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case 'negotiating':
        return 'Negotiating'
      case 'contract-offered':
        return 'Contract Offered'
      case 'contract-accepted':
        return 'Contract Accepted'
      default:
        return status
    }
  }

  return (
    <div className="planning-page">
      <div className="planning-page-container">
        <div className="planning-header">
          <h1>{eventDetails.name || eventTypeName}</h1>
          <p>{eventDetails.location} • {eventDetails.date}</p>
        </div>

        <div className="planning-tabs">
          <button
            className={`tab ${activeTab === 'vendors' ? 'active' : ''}`}
            onClick={() => setActiveTab('vendors')}
          >
            <MdBusiness />
            Your Vendors
          </button>
          <button
            className={`tab ${activeTab === 'registry' ? 'active' : ''}`}
            onClick={() => setActiveTab('registry')}
          >
            <FaGift />
            Gift Registry
          </button>
          <button
            className={`tab disabled`}
            disabled
          >
            <FaUsers />
            Aso-Ebi Delivery
          </button>
          <button
            className={`tab ${activeTab === 'rsvp' ? 'active' : ''}`}
            onClick={() => setActiveTab('rsvp')}
          >
            <MdEventNote />
            RSVP
          </button>
        </div>

        {activeTab === 'vendors' && (
          <div className="vendors-tab-content">
            {/* Selected Vendors Section */}
            <div className="selected-vendors-section card">
              <h2>Your Selected Vendors</h2>
              {selectedVendors.length === 0 ? (
                <p className="empty-state">No vendors selected yet. Search and add vendors below.</p>
              ) : (
                <div className="selected-vendors-list">
                  {selectedVendors.map((vendor) => (
                    <div key={vendor.id} className="selected-vendor-card card">
                      <div className="vendor-image-small">
                        <img src={vendor.image} alt={vendor.name} />
                      </div>
                      <div className="vendor-details">
                        <h3 
                          className="vendor-name-clickable"
                          onClick={() => handleVendorNameClick(vendor.id)}
                        >
                          {vendor.name}
                        </h3>
                        <p className="vendor-category">{vendor.category}</p>
                        <div className="vendor-status">
                          <span
                            className="status-badge"
                            style={{ backgroundColor: getStatusColor(vendor.status) }}
                          >
                            {getStatusLabel(vendor.status)}
                          </span>
                        </div>
                      </div>
                      <div className="vendor-actions">
                        {vendor.status === 'contract-accepted' && (
                          <button
                            onClick={(e) => handleDownloadContract(vendor.id, e)}
                            className="vendor-action-btn vendor-action-btn-secondary"
                            title="Download contract"
                          >
                            <MdDownload />
                          </button>
                        )}
                        <button
                          onClick={() => handleChatWithVendor(vendor.id)}
                          className="vendor-action-btn vendor-action-btn-primary"
                          title="Chat with vendor"
                        >
                          <MdChat />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Search and Filter Section */}
            <div className="vendor-search-section card">
              <h2>Find More Vendors</h2>
              
              <div className="search-filters">
                <div className="search-input-wrapper">
                  <MdSearch className="search-icon" />
                  <input
                    type="text"
                    className="input search-input"
                    placeholder="Search vendors by name or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="filter-controls">
                  <div className="filter-group">
                    <MdFilterList className="filter-icon" />
                    <select
                      className="input filter-select"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>
                          {cat === 'all' ? 'All Categories' : cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="filter-group">
                    <MdSort className="sort-icon" />
                    <select
                      className="input filter-select"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="rating">Sort by Rating</option>
                      <option value="reviews">Sort by Reviews</option>
                      <option value="name">Sort by Name</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Available Vendors Grid */}
              <div className="vendors-grid">
                {availableVendors.map((vendor, index) => (
                  <div
                    key={vendor.id}
                    className="vendor-card card fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="vendor-image">
                      <img src={vendor.image} alt={vendor.name} />
                    </div>
                    <div className="vendor-info">
                      <h3 
                        className="vendor-name-clickable"
                        onClick={() => handleVendorNameClick(vendor.id)}
                      >
                        {vendor.name}
                      </h3>
                      <p className="vendor-category">{vendor.category}</p>
                      <div className="vendor-meta">
                        <div className="vendor-rating">
                          <MdStar className="star-icon" />
                          <span>{vendor.rating}</span>
                          <span className="review-count">({vendor.reviews})</span>
                        </div>
                        <div className="vendor-location">
                          <MdLocationOn />
                          <span>{vendor.location}</span>
                        </div>
                      </div>
                      <div className="vendor-actions-grid">
                        <button
                          onClick={() => handleAddVendor(vendor)}
                          className="vendor-action-btn vendor-action-btn-secondary"
                          title="Add to list"
                        >
                          <MdAdd />
                        </button>
                        <button
                          onClick={() => handleChatWithVendor(vendor.id)}
                          className="vendor-action-btn vendor-action-btn-primary"
                          title="Chat with vendor"
                        >
                          <MdChat />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {availableVendors.length === 0 && (
                <p className="empty-state">No vendors found matching your criteria.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'rsvp' && (
          <div className="rsvp-tab-content">
            {/* RSVP Stats */}
            <div className="rsvp-stats fade-in">
              {(() => {
                const counts = getRSVPStatusCounts()
                return (
                  <>
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
                  </>
                )
              })()}
            </div>

            {/* Add/Edit Form */}
            {showAddRSVPForm && (
              <div className="rsvp-form-card card fade-in">
                <h2>{editingRSVPId ? 'Edit RSVP' : 'Add New RSVP'}</h2>
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
                      value={rsvpFormData.name}
                      onChange={(e) => setRsvpFormData({ ...rsvpFormData, name: e.target.value })}
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
                      value={rsvpFormData.email}
                      onChange={(e) => setRsvpFormData({ ...rsvpFormData, email: e.target.value })}
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
                      value={rsvpFormData.phone}
                      onChange={(e) => setRsvpFormData({ ...rsvpFormData, phone: e.target.value })}
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
                      value={rsvpFormData.tableAssignment}
                      onChange={(e) => setRsvpFormData({ ...rsvpFormData, tableAssignment: e.target.value })}
                    />
                  </div>

                  <div className="form-group checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        checked={rsvpFormData.plusOne}
                        onChange={(e) => setRsvpFormData({ ...rsvpFormData, plusOne: e.target.checked })}
                      />
                      Plus One?
                    </label>
                  </div>

                  {rsvpFormData.plusOne && (
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
                        value={rsvpFormData.plusOneName}
                        onChange={(e) => setRsvpFormData({ ...rsvpFormData, plusOneName: e.target.value })}
                      />
                    </div>
                  )}

                  <div className="rsvp-form-actions">
                    <button
                      onClick={editingRSVPId ? handleUpdateRSVP : handleAddRSVP}
                      className="btn btn-primary"
                    >
                      {editingRSVPId ? 'Update RSVP' : 'Add RSVP'}
                    </button>
                    <button
                      onClick={() => {
                        resetRSVPForm()
                        setShowAddRSVPForm(false)
                        setEditingRSVPId(null)
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
            {!showAddRSVPForm && (
              <div className="rsvp-add-btn-container fade-in">
                <button
                  onClick={() => setShowAddRSVPForm(true)}
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
                        {getRSVPStatusIcon(rsvp.status)}
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
                          onChange={(e) => handleRSVPStatusChange(rsvp.id, e.target.value)}
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
        )}

        {activeTab === 'registry' && (
          <div className="registry-tab-content">
            {/* Registry Stats */}
            <div className="registry-stats fade-in">
              {(() => {
                const stats = getRegistryStats()
                return (
                  <>
                    <div className="registry-stat-card card">
                      <div className="registry-stat-number registry-stat-total">{stats.totalItems}</div>
                      <div className="registry-stat-label">Total Items</div>
                    </div>
                    <div className="registry-stat-card card">
                      <div className="registry-stat-number registry-stat-purchased">{stats.totalPurchased}</div>
                      <div className="registry-stat-label">Purchased</div>
                    </div>
                    <div className="registry-stat-card card">
                      <div className="registry-stat-number registry-stat-remaining">{stats.totalRemaining}</div>
                      <div className="registry-stat-label">Remaining</div>
                    </div>
                    <div className="registry-stat-card card">
                      <div className="registry-stat-number registry-stat-value">₦{stats.totalValue.toLocaleString()}</div>
                      <div className="registry-stat-label">Total Value</div>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* Add/Edit Form */}
            {showAddRegistryForm && (
              <div className="registry-form-card card fade-in">
                <h2>{editingRegistryId ? 'Edit Registry Item' : 'Add New Registry Item'}</h2>
                <div className="registry-form">
                  <div className="form-group">
                    <label htmlFor="registry-name">
                      <FaGift className="input-icon" />
                      Item Name *
                    </label>
                    <input
                      id="registry-name"
                      type="text"
                      className="input"
                      placeholder="e.g., Kitchen Stand Mixer"
                      value={registryFormData.name}
                      onChange={(e) => setRegistryFormData({ ...registryFormData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="registry-description">
                      Description
                    </label>
                    <textarea
                      id="registry-description"
                      className="input"
                      placeholder="Brief description of the item"
                      rows="3"
                      value={registryFormData.description}
                      onChange={(e) => setRegistryFormData({ ...registryFormData, description: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="registry-price">
                      <MdAttachMoney className="input-icon" />
                      Price (₦) *
                    </label>
                    <input
                      id="registry-price"
                      type="number"
                      className="input"
                      placeholder="85000"
                      value={registryFormData.price}
                      onChange={(e) => setRegistryFormData({ ...registryFormData, price: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="registry-quantity">
                      Quantity
                    </label>
                    <input
                      id="registry-quantity"
                      type="number"
                      className="input"
                      placeholder="1"
                      min="1"
                      value={registryFormData.quantity}
                      onChange={(e) => setRegistryFormData({ ...registryFormData, quantity: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="registry-purchased">
                      Purchased
                    </label>
                    <input
                      id="registry-purchased"
                      type="number"
                      className="input"
                      placeholder="0"
                      min="0"
                      value={registryFormData.purchased}
                      onChange={(e) => setRegistryFormData({ ...registryFormData, purchased: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="registry-category">
                      Category
                    </label>
                    <select
                      id="registry-category"
                      className="input"
                      value={registryFormData.category}
                      onChange={(e) => setRegistryFormData({ ...registryFormData, category: e.target.value })}
                    >
                      <option value="Home">Home</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Bedding">Bedding</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="registry-priority">
                      Priority
                    </label>
                    <select
                      id="registry-priority"
                      className="input"
                      value={registryFormData.priority}
                      onChange={(e) => setRegistryFormData({ ...registryFormData, priority: e.target.value })}
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="registry-link">
                      <MdLink className="input-icon" />
                      Product Link (Optional)
                    </label>
                    <input
                      id="registry-link"
                      type="url"
                      className="input"
                      placeholder="https://example.com/product"
                      value={registryFormData.link}
                      onChange={(e) => setRegistryFormData({ ...registryFormData, link: e.target.value })}
                    />
                  </div>

                  <div className="registry-form-actions">
                    <button
                      onClick={editingRegistryId ? handleUpdateRegistryItem : handleAddRegistryItem}
                      className="btn btn-primary"
                    >
                      {editingRegistryId ? 'Update Item' : 'Add Item'}
                    </button>
                    <button
                      onClick={() => {
                        resetRegistryForm()
                        setShowAddRegistryForm(false)
                        setEditingRegistryId(null)
                      }}
                      className="btn btn-outline"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Add and Share Buttons */}
            {!showAddRegistryForm && (
              <div className="registry-actions-container fade-in">
                <button
                  onClick={() => setShowAddRegistryForm(true)}
                  className="btn btn-primary registry-add-btn"
                >
                  <MdAdd />
                  Add Registry Item
                </button>
                <button
                  onClick={handleShareRegistry}
                  className="btn btn-secondary registry-share-btn"
                >
                  <MdShare />
                  Share Registry
                </button>
              </div>
            )}

            {/* Registry List */}
            <div className="registry-list fade-in">
              {registryItems.length === 0 ? (
                <div className="registry-empty-state card">
                  <FaGift className="empty-icon" />
                  <p>No items in your registry yet. Add your first item!</p>
                </div>
              ) : (
                registryItems.map((item) => {
                  const remaining = item.quantity - item.purchased
                  const progress = item.quantity > 0 ? (item.purchased / item.quantity) * 100 : 0
                  const isComplete = remaining <= 0
                  
                  return (
                    <div key={item.id} className={`registry-card card ${isComplete ? 'registry-complete' : ''}`}>
                      <div className="registry-card-header">
                        <div className="registry-card-info">
                          <FaGift className={`registry-icon registry-priority-${item.priority}`} />
                          <div className="registry-card-main">
                            <div className="registry-card-title-row">
                              <h3>{item.name}</h3>
                              <span className={`registry-priority-badge priority-${item.priority}`}>
                                {item.priority}
                              </span>
                            </div>
                            <p className="registry-description">{item.description}</p>
                            <div className="registry-card-meta">
                              <span className="registry-category">{item.category}</span>
                              <span className="registry-price">₦{item.price.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="registry-progress-section">
                        <div className="registry-quantity-info">
                          <span>Quantity: {item.quantity}</span>
                          <span>Purchased: {item.purchased}</span>
                          <span className={`registry-remaining ${isComplete ? 'complete' : ''}`}>
                            Remaining: {remaining}
                          </span>
                        </div>
                        <div className="registry-progress-bar">
                          <div 
                            className="registry-progress-fill" 
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>

                      {item.link && (
                        <div className="registry-link-section">
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="registry-link-btn"
                          >
                            <MdLink />
                            View Product
                          </a>
                        </div>
                      )}

                      {item.purchasers && item.purchasers.length > 0 && (
                        <div className="registry-purchasers-section">
                          <h4 className="registry-purchasers-title">Purchased by:</h4>
                          <div className="registry-purchasers-list">
                            {item.purchasers.map((purchaser, idx) => (
                              <div key={idx} className="registry-purchaser-item">
                                <MdPerson className="registry-purchaser-icon" />
                                <span className="registry-purchaser-name">{purchaser.name}</span>
                                <span className="registry-purchaser-quantity">x{purchaser.quantity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="registry-card-actions">
                        <button
                          onClick={() => handleEditRegistryItem(item.id)}
                          className="registry-action-btn registry-edit-btn"
                          title="Edit"
                        >
                          <MdEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteRegistryItem(item.id)}
                          className="registry-action-btn registry-delete-btn"
                          title="Delete"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlanningPage
