import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { MdCelebration, MdPublic, MdMusicNote } from 'react-icons/md'
import './Landing.css'

function Login({ user, setUser }) {
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
        <div className="login-card card">
          <div className="landing-header">
            <div className="landing-logo">
              <MdCelebration className="landing-logo-icon" />
              <h1 className="landing-logo-text">Owambe</h1>
            </div>
            <p className="landing-tagline">Your Nigerian Party Marketplace</p>
          </div>

          <div className="landing-hero-section">
            <div className="landing-hero-content">
              <h2 className="landing-hero-title">
                Plan. Celebrate. 
                <span className="landing-highlight"> Connect.</span>
              </h2>
              <p className="landing-hero-description">
                Discover amazing vendors, plan unforgettable events, and connect with 
                the best party professionals across Nigeria. Where every celebration 
                becomes a memorable Owambe!
              </p>
              
              <div className="landing-feature-icons">
                <div className="landing-feature-icon">
                  <MdPublic />
                  <span>Authentic</span>
                </div>
                <div className="landing-feature-icon">
                  <MdMusicNote />
                  <span>Vibrant</span>
                </div>
                <div className="landing-feature-icon">
                  <MdCelebration />
                  <span>Joyful</span>
                </div>
              </div>

              <button onClick={handleGoogleSignIn} className="btn landing-google-signin-btn">
                <FcGoogle className="landing-google-icon" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
