import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  MdCelebration, 
  MdStar,
  MdLocationOn,
  MdBusiness,
  MdPhotoCamera,
  MdMusicNote,
  MdRestaurant,
  MdLocalFlorist,
  MdVideoLibrary,
  MdAccountCircle,
  MdMenu,
  MdClose,
  MdArrowBackIos,
  MdArrowForwardIos
} from 'react-icons/md'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const carouselImages = [
    'https://images.unsplash.com/photo-1582086450989-ffa7a19b2c3c?w=1200&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1609234269200-4e9e6c1ba8d1?w=1200&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1594736797933-d0c2d6c2f4e8?w=1200&h=600&fit=crop&q=80'
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
      icon: MdRestaurant,
      title: 'Catering Services',
      description: 'Delicious traditional and modern cuisine for your celebration'
    },
    {
      icon: MdBusiness,
      title: 'Event Decoration',
      description: 'Stunning decorations to transform your venue into a magical space'
    },
    {
      icon: MdPhotoCamera,
      title: 'Photography & Videography',
      description: 'Capture every precious moment with professional photography and videography'
    },
    {
      icon: MdMusicNote,
      title: 'Music & Entertainment',
      description: 'Live music, DJs, and entertainment to keep your guests dancing'
    },
    {
      icon: MdLocalFlorist,
      title: 'Floral Arrangements',
      description: 'Beautiful flower arrangements for any celebration theme'
    },
    {
      icon: MdVideoLibrary,
      title: 'Venue Booking',
      description: 'Find the perfect venue for your wedding, party, or corporate event'
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
            <a href="#about" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>About</a>
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

      {/* Carousel Section - Full Width */}
      <section className="carousel-section-full">
          <div className="carousel-wrapper">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {carouselImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image} alt={`African celebration ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-button carousel-button-prev" onClick={prevSlide}>
              <MdArrowBackIos />
            </button>
            <button className="carousel-button carousel-button-next" onClick={nextSlide}>
              <MdArrowForwardIos />
            </button>
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

      <div className="home-container">
        {/* Hero Section */}
        <section className="home-hero" id="about">
          <div className="home-hero-content">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=600&fit=crop&q=80" 
              alt="Nigerian wedding couple" 
              className="home-hero-image"
            />
            <div className="home-hero-text-content">
              <div className="home-logo-section">
                <MdCelebration className="home-hero-logo-icon" />
                <h1 className="home-hero-title">Owambe</h1>
              </div>
              <p className="home-hero-subtitle">Your Nigerian Party Marketplace</p>
              <p className="home-hero-description">
                Connect with trusted vendors and plan unforgettable celebrations across Nigeria. 
                From weddings to corporate events, we bring the best of African party planning to you.
                Experience the vibrant culture and traditions of Nigerian celebrations. Whether you're planning 
                a grand wedding, an intimate gathering, or a corporate event, Owambe connects you with the finest 
                vendors across Nigeria. Our platform makes it easy to discover, compare, and book the best 
                caterers, decorators, photographers, musicians, and venues all in one place.
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
