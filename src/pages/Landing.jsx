import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { MdCelebration, MdPublic, MdMusicNote } from 'react-icons/md'
import './Landing.css'

function Landing({ user, setUser }) {
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    // Simulate Google sign-in
    const mockUser = {
      name: 'Demo User',
      email: 'user@example.com',
      avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=ff6b35&color=fff'
    }
    setUser(mockUser)
    navigate('/role-selection')
  }

  return (
    <div className="landing">
      <div className="landing-background">
        <div className="pattern-overlay"></div>
      </div>
      
      <div className="landing-content fade-in">
        <div className="landing-header">
          <div className="logo">
            <MdCelebration className="logo-icon" />
            <h1 className="logo-text">Owambe</h1>
          </div>
          <p className="tagline">Your Nigerian Party Marketplace</p>
        </div>

        <div className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">
              Plan. Celebrate. 
              <span className="highlight"> Connect.</span>
            </h2>
            <p className="hero-description">
              Discover amazing vendors, plan unforgettable events, and connect with 
              the best party professionals across Nigeria. Where every celebration 
              becomes a memorable Owambe!
            </p>
            
            <div className="feature-icons">
              <div className="feature-icon">
                <MdPublic />
                <span>Authentic</span>
              </div>
              <div className="feature-icon">
                <MdMusicNote />
                <span>Vibrant</span>
              </div>
              <div className="feature-icon">
                <MdCelebration />
                <span>Joyful</span>
              </div>
            </div>

            <button onClick={handleGoogleSignIn} className="btn btn-primary google-signin-btn">
              <FcGoogle className="google-icon" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
