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
  MdDownload
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
            className={`tab disabled`}
            disabled
          >
            <FaGift />
            Event Registry
          </button>
          <button
            className={`tab disabled`}
            disabled
          >
            <FaUsers />
            Aso-Ebi Delivery
          </button>
          <button
            className={`tab disabled`}
            disabled
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
      </div>
    </div>
  )
}

export default PlanningPage
