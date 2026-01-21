import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  MdCelebration, 
  MdStar,
  MdLocationOn,
  MdAccountCircle,
  MdMenu,
  MdClose,
  MdEventNote,
  MdCardGiftcard,
  MdPersonAdd,
  MdCheckroom
} from 'react-icons/md'
import { FaGift } from 'react-icons/fa'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const featuredVendors = [
    {
      id: 1,
      name: 'Taste of Lagos Catering',
      category: 'Caterer',
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=300&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 2,
      name: 'Royal Decorations',
      category: 'Decorator',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300&h=300&fit=crop',
      location: 'Abuja, Nigeria'
    },
    {
      id: 4,
      name: 'Elite Photography',
      category: 'Photographer',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 7,
      name: 'Cinematic Films',
      category: 'Videographer',
      rating: 4.9,
      reviews: 201,
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=300&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 14,
      name: 'Afrobeat Sounds',
      category: 'Music',
      rating: 4.9,
      reviews: 298,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      location: 'Lagos, Nigeria'
    },
    {
      id: 17,
      name: 'Grand Ballroom Venues',
      category: 'Venue',
      rating: 4.9,
      reviews: 445,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=300&fit=crop',
      location: 'Lagos, Nigeria'
    }
  ]

  const services = [
    {
      icon: MdEventNote,
      title: 'Event Planning',
      description: 'Comprehensive event planning services to make your celebration unforgettable'
    },
    {
      icon: FaGift,
      title: 'Gift Registry',
      description: 'Create and manage your gift registry to help guests find the perfect gifts'
    },
    {
      icon: MdPersonAdd,
      title: 'RSVP Management',
      description: 'Easily manage guest lists, RSVPs, and track attendance for your event'
    },
    {
      icon: MdCheckroom,
      title: 'Aso-Ebi Delivery',
      description: 'Coordinate and manage aso-ebi orders and deliveries for your celebration'
    }
  ]

  const handleVendorClick = () => {
    navigate('/login')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="home-navbar">
        <div className="navbar-container">
          <div className="navbar-brand" onClick={() => navigate('/')}>
            <MdCelebration className="navbar-logo-icon" />
            <span className="navbar-brand-text">Owambe</span>
          </div>
          <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#vendors" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Vendors</a>
            <button onClick={handleLoginClick} className="btn btn-primary navbar-login-btn">
              <MdAccountCircle />
              Login
            </button>
          </div>
          <button 
            className="navbar-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </nav>

      <div className="home-container">
        {/* Hero Section */}
        <section className="home-hero">
          <div className="home-hero-content">
            <div className="home-hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop&q=80" 
                alt="Beautiful black couple celebrating" 
                className="home-hero-image"
              />
            </div>
            <div className="home-hero-text-content">
              <h1 className="home-hero-title">Plan Your Perfect Celebration</h1>
              <p className="home-hero-description">
                From intimate gatherings to grand celebrations, Owambe is your one-stop platform 
                for planning unforgettable Nigerian events. Connect with trusted vendors, manage 
                your guest list, create gift registries, and coordinate aso-ebi deliveries—all in one place.
              </p>
              <p className="home-hero-description">
                Whether you're planning a wedding, birthday, anniversary, or any special occasion, 
                we make it easy to bring your vision to life with the best vendors and services across Nigeria.
              </p>
              <button onClick={handleLoginClick} className="btn btn-primary home-hero-cta-btn">
                <MdAccountCircle />
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="home-services-section" id="services">
          <h2 className="home-section-title">Our Services</h2>
          <p className="home-section-subtitle">Everything you need for a perfect celebration</p>
          <div className="home-services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="home-service-card card fade-in">
                  <div className="home-service-icon">
                    <IconComponent />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Featured Vendors Section */}
        <section className="home-vendors-section" id="vendors">
          <h2 className="home-section-title">Featured Vendors</h2>
          <p className="home-section-subtitle">Top-rated professionals trusted by thousands</p>
          <div className="home-vendors-grid">
            {featuredVendors.map((vendor, index) => (
              <div 
                key={vendor.id} 
                className="home-vendor-showcase-card card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={handleVendorClick}
              >
                <div className="home-vendor-showcase-image">
                  <img src={vendor.image} alt={vendor.name} />
                </div>
                <div className="home-vendor-showcase-info">
                  <h3>{vendor.name}</h3>
                  <p className="home-vendor-showcase-category">{vendor.category}</p>
                  <div className="home-vendor-showcase-meta">
                    <div className="home-vendor-showcase-rating">
                      <MdStar className="star-icon" />
                      <span>{vendor.rating}</span>
                      <span className="review-count">({vendor.reviews} reviews)</span>
                    </div>
                    <div className="home-vendor-showcase-location">
                      <MdLocationOn />
                      <span>{vendor.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home
