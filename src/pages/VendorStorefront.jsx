import { MdLocalOffer, MdStar, MdLocationOn } from 'react-icons/md'
import { MdRestaurant } from 'react-icons/md'
import './VendorStorefront.css'

function VendorStorefront() {
  const menuItems = [
    {
      id: 1,
      name: 'Jollof Rice Platter',
      description: 'Authentic Nigerian jollof rice served with fried plantain and coleslaw',
      price: '₦5,000',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Pounded Yam & Egusi',
      description: 'Traditional pounded yam with rich egusi soup and assorted meat',
      price: '₦7,500',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Suya Platter',
      description: 'Grilled spiced meat skewers with sliced onions and tomatoes',
      price: '₦4,500',
      image: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Pepper Soup',
      description: 'Spicy Nigerian pepper soup with goat meat or fish',
      price: '₦6,000',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Small Chops Platter',
      description: 'Assorted finger foods: samosa, spring rolls, puff puff, and more',
      price: '₦8,000',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Asun & Fried Rice',
      description: 'Spicy grilled goat meat served with fried rice and salad',
      price: '₦9,000',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    }
  ]

  return (
    <div className="vendor-storefront">
      <div className="storefront-header">
        <div className="storefront-header-content">
          <div className="store-info">
              <MdRestaurant className="store-icon" />
            <div>
              <h1>Taste of Lagos Catering</h1>
              <div className="store-meta">
                <div className="store-rating">
                  <MdStar className="star-icon" />
                  <span>4.8</span>
                  <span className="review-count">(127 reviews)</span>
                </div>
                <div className="store-location">
                  <MdLocationOn />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="store-badge">
            <MdLocalOffer />
            <span>Top Rated Vendor</span>
          </div>
        </div>
      </div>

      <div className="storefront-content">
        <div className="store-description card">
          <h2>About Us</h2>
          <p>
            Experience authentic Nigerian flavors with Taste of Lagos Catering. 
            We specialize in creating memorable dining experiences for your Owambe 
            celebrations. From traditional jollof rice to mouth-watering suya, 
            we bring the taste of home to your event.
          </p>
        </div>

        <div className="menu-section">
          <h2 className="vendor-storefront-section-title">
            <MdRestaurant className="vendor-storefront-section-icon" />
            Our Menu
          </h2>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <div 
                key={item.id} 
                className="menu-item card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} />
                  <div className="price-badge">{item.price}</div>
                </div>
                <div className="menu-item-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button className="btn btn-primary menu-item-btn">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorStorefront
