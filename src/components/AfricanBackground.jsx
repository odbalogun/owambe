import './AfricanBackground.css'

function AfricanBackground() {
  return (
    <div className="african-background">
      {/* Animated Tribal Patterns Layer */}
      <div className="tribal-patterns">
        <svg className="tribal-pattern tribal-1" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <path d="M50,50 Q100,30 150,50 T250,50" stroke="var(--primary-orange)" fill="none" strokeWidth="2" opacity="0.3"/>
          <path d="M30,100 Q50,80 70,100 T110,100" stroke="var(--primary-yellow)" fill="none" strokeWidth="2" opacity="0.25"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="var(--primary-green)" strokeWidth="1.5" opacity="0.2"/>
          <path d="M50,150 L80,120 L110,150 L140,120 L170,150" stroke="var(--primary-red)" fill="none" strokeWidth="2" opacity="0.3"/>
        </svg>
        
        <svg className="tribal-pattern tribal-2" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <path d="M40,60 Q60,40 80,60 Q100,80 120,60" stroke="var(--accent-gold)" fill="none" strokeWidth="2.5" opacity="0.3"/>
          <polygon points="100,30 120,70 80,70" fill="none" stroke="var(--primary-purple)" strokeWidth="2" opacity="0.25"/>
          <path d="M60,140 Q100,100 140,140" stroke="var(--primary-orange)" fill="none" strokeWidth="2" opacity="0.3"/>
          <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent-turquoise)" strokeWidth="1.5" opacity="0.2"/>
        </svg>
        
        <svg className="tribal-pattern tribal-3" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <path d="M50,50 L100,100 L150,50" stroke="var(--primary-green)" fill="none" strokeWidth="2" opacity="0.25"/>
          <ellipse cx="100" cy="130" rx="50" ry="30" fill="none" stroke="var(--primary-yellow)" strokeWidth="2" opacity="0.3"/>
          <path d="M80,80 Q100,60 120,80 Q100,100 80,80" stroke="var(--primary-red)" fill="none" strokeWidth="1.5" opacity="0.25"/>
        </svg>
      </div>

      {/* African Palace Silhouettes */}
      <div className="palaces">
        <svg className="palace palace-1" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid meet">
          {/* Palace base */}
          <rect x="50" y="300" width="200" height="100" fill="var(--primary-green)" opacity="0.15"/>
          {/* Palace towers */}
          <polygon points="100,300 120,250 140,300" fill="var(--primary-orange)" opacity="0.2"/>
          <polygon points="160,300 180,220 200,300" fill="var(--primary-red)" opacity="0.2"/>
          <polygon points="220,300 240,250 260,300" fill="var(--primary-yellow)" opacity="0.2"/>
          {/* Palace body */}
          <rect x="100" y="250" width="100" height="50" fill="var(--accent-gold)" opacity="0.15"/>
          <rect x="120" y="220" width="60" height="30" fill="var(--primary-purple)" opacity="0.15"/>
          {/* Decorative patterns */}
          <circle cx="150" cy="270" r="8" fill="var(--accent-turquoise)" opacity="0.2"/>
          <circle cx="130" cy="270" r="6" fill="var(--primary-orange)" opacity="0.2"/>
          <circle cx="170" cy="270" r="6" fill="var(--primary-yellow)" opacity="0.2"/>
        </svg>
        
        <svg className="palace palace-2" viewBox="0 0 250 350" preserveAspectRatio="xMidYMid meet">
          {/* Palace structure */}
          <rect x="40" y="250" width="170" height="100" fill="var(--primary-red)" opacity="0.15"/>
          <polygon points="80,250 100,200 120,250" fill="var(--primary-yellow)" opacity="0.2"/>
          <polygon points="130,250 150,170 170,250" fill="var(--primary-orange)" opacity="0.2"/>
          <polygon points="180,250 200,200 220,250" fill="var(--accent-gold)" opacity="0.2"/>
          <rect x="100" y="200" width="80" height="50" fill="var(--primary-green)" opacity="0.15"/>
          <rect x="120" y="170" width="40" height="30" fill="var(--primary-purple)" opacity="0.15"/>
          {/* Decorative elements */}
          <rect x="130" y="210" width="20" height="30" fill="var(--accent-turquoise)" opacity="0.2"/>
        </svg>
        
        <svg className="palace palace-3" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid meet">
          <rect x="30" y="200" width="140" height="100" fill="var(--primary-yellow)" opacity="0.15"/>
          <polygon points="60,200 80,160 100,200" fill="var(--primary-red)" opacity="0.2"/>
          <polygon points="110,200 130,140 150,200" fill="var(--primary-orange)" opacity="0.2"/>
          <rect x="80" y="160" width="60" height="40" fill="var(--accent-gold)" opacity="0.15"/>
          <circle cx="110" cy="180" r="10" fill="var(--primary-green)" opacity="0.2"/>
        </svg>
      </div>

      {/* Animated Cartoon Elements */}
      <div className="cartoon-elements">
        {/* Dancing figure */}
        <svg className="cartoon cartoon-1" viewBox="0 0 100 150" preserveAspectRatio="xMidYMid meet">
          <circle cx="50" cy="30" r="15" fill="var(--primary-orange)" opacity="0.25"/>
          <ellipse cx="50" cy="70" rx="20" ry="35" fill="var(--primary-yellow)" opacity="0.25"/>
          <rect x="40" y="105" width="8" height="30" fill="var(--primary-green)" opacity="0.25"/>
          <rect x="52" y="105" width="8" height="30" fill="var(--primary-green)" opacity="0.25"/>
          <rect x="35" y="75" width="8" height="40" fill="var(--primary-red)" opacity="0.25"/>
          <rect x="57" y="75" width="8" height="40" fill="var(--primary-red)" opacity="0.25"/>
        </svg>
        
        {/* Drum */}
        <svg className="cartoon cartoon-2" viewBox="0 0 80 100" preserveAspectRatio="xMidYMid meet">
          <ellipse cx="40" cy="50" rx="25" ry="15" fill="var(--primary-red)" opacity="0.25"/>
          <ellipse cx="40" cy="35" rx="25" ry="15" fill="var(--primary-orange)" opacity="0.25"/>
          <rect x="35" y="50" width="10" height="50" fill="var(--accent-gold)" opacity="0.25"/>
        </svg>
        
        {/* Masquerade mask */}
        <svg className="cartoon cartoon-3" viewBox="0 0 120 100" preserveAspectRatio="xMidYMid meet">
          <ellipse cx="60" cy="50" rx="40" ry="35" fill="var(--primary-purple)" opacity="0.25"/>
          <circle cx="50" cy="45" r="8" fill="var(--white)" opacity="0.3"/>
          <circle cx="70" cy="45" r="8" fill="var(--white)" opacity="0.3"/>
          <path d="M60,55 Q55,60 50,58" stroke="var(--primary-red)" strokeWidth="2" fill="none" opacity="0.3"/>
          <polygon points="60,30 70,20 80,30" fill="var(--accent-gold)" opacity="0.25"/>
        </svg>
        
        {/* Palm tree */}
        <svg className="cartoon cartoon-4" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid meet">
          <rect x="45" y="150" width="10" height="50" fill="var(--primary-green)" opacity="0.25"/>
          <ellipse cx="50" cy="120" rx="15" ry="8" fill="var(--primary-green)" opacity="0.3" transform="rotate(-30 50 120)"/>
          <ellipse cx="50" cy="110" rx="15" ry="8" fill="var(--primary-green)" opacity="0.3" transform="rotate(30 50 110)"/>
          <ellipse cx="50" cy="100" rx="15" ry="8" fill="var(--primary-green)" opacity="0.3" transform="rotate(-30 50 100)"/>
          <circle cx="50" cy="90" r="12" fill="var(--primary-yellow)" opacity="0.2"/>
        </svg>
        
        {/* Birds flying */}
        <svg className="cartoon cartoon-5" viewBox="0 0 150 80" preserveAspectRatio="xMidYMid meet">
          <path d="M30,40 Q40,30 50,40" stroke="var(--primary-orange)" strokeWidth="3" fill="none" opacity="0.3"/>
          <path d="M70,35 Q80,25 90,35" stroke="var(--accent-gold)" strokeWidth="3" fill="none" opacity="0.3"/>
          <path d="M110,45 Q120,35 130,45" stroke="var(--primary-red)" strokeWidth="3" fill="none" opacity="0.3"/>
        </svg>
        
        {/* Sun */}
        <svg className="cartoon cartoon-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <circle cx="50" cy="50" r="20" fill="var(--accent-gold)" opacity="0.3"/>
          <path d="M50,20 L50,25 M50,75 L50,80 M20,50 L25,50 M75,50 L80,50" stroke="var(--primary-yellow)" strokeWidth="2" opacity="0.3"/>
          <path d="M30,30 L33,33 M70,70 L73,73 M70,30 L73,33 M30,70 L33,73" stroke="var(--primary-orange)" strokeWidth="2" opacity="0.3"/>
        </svg>
        
        {/* Musical note */}
        <svg className="cartoon cartoon-7" viewBox="0 0 80 120" preserveAspectRatio="xMidYMid meet">
          <ellipse cx="40" cy="100" rx="12" ry="15" fill="var(--primary-purple)" opacity="0.25"/>
          <rect x="35" y="30" width="10" height="75" fill="var(--primary-purple)" opacity="0.25"/>
          <circle cx="55" cy="25" r="12" fill="var(--accent-turquoise)" opacity="0.25"/>
        </svg>
        
        {/* Geometric patterns */}
        <svg className="cartoon cartoon-8" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <polygon points="50,20 70,60 50,80 30,60" fill="var(--primary-red)" opacity="0.2"/>
          <polygon points="50,40 60,60 50,70 40,60" fill="var(--accent-gold)" opacity="0.2"/>
        </svg>
      </div>

      {/* Additional animated decorative elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
        <div className="floating-circle circle-5"></div>
      </div>
    </div>
  )
}

export default AfricanBackground
