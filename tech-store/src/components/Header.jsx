import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()

  const categories = [
    { name: 'Telefon', path: '/products?category=Telefon' },
    { name: 'Laptop', path: '/products?category=Laptop' },
    { name: 'Kulaklık', path: '/products?category=Kulaklık' },
    { name: 'Aksesuar', path: '/products?category=Aksesuar' },
  ]

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#030712', borderBottom: '1px solid rgba(168, 85, 247, 0.3)', backdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px' }}>
        {/* Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(to bottom right, #3b82f6, #a855f7)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(1)', transition: 'transform 0.2s' }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>T</span>
            </div>
            <span style={{ background: 'linear-gradient(to right, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold', fontSize: '20px', display: 'none' }}>TechStore</span>
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div style={{ display: 'none', flex: 1, margin: '0 32px' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '448px' }}>
              <input
                type="text"
                placeholder="Ürün ara..."
                style={{ width: '100%', padding: '8px 16px', backgroundColor: '#1e293b', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px', color: 'white' }}
              />
              <Search style={{ position: 'absolute', right: '12px', top: '8px', width: '20px', height: '20px', color: '#c084fc' }} />
            </div>
          </div>

          {/* Right Side Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Search Icon - Mobile */}
            <button style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', borderRadius: '8px', transition: 'background-color 0.2s' }}>
              <Search style={{ width: '20px', height: '20px', color: '#a78bfa' }} />
            </button>

            {/* Cart Icon */}
            <Link
              to="/cart"
              style={{ position: 'relative', padding: '8px', textDecoration: 'none', borderRadius: '8px', transition: 'background-color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <ShoppingCart style={{ width: '20px', height: '20px', color: '#a78bfa' }} />
              {cartCount > 0 && (
                <span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '20px', height: '20px', background: 'linear-gradient(to right, #ef4444, #f97316)', borderRadius: '50%', color: 'white', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 2s infinite' }}>
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', borderRadius: '8px', transition: 'background-color 0.2s', display: 'none' }}
            >
              {isMenuOpen ? (
                <X style={{ width: '20px', height: '20px', color: '#a78bfa' }} />
              ) : (
                <Menu style={{ width: '20px', height: '20px', color: '#a78bfa' }} />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Category Menu */}
        <nav style={{ display: 'flex', gap: '4px', borderTop: '1px solid rgba(168, 85, 247, 0.2)', paddingTop: '12px', paddingBottom: '12px' }}>
          {categories.map(cat => (
            <Link
              key={cat.path}
              to={cat.path}
              style={{ padding: '8px 16px', fontSize: '14px', fontWeight: '500', color: '#d1d5db', textDecoration: 'none', borderRadius: '8px', transition: 'all 0.3s', backgroundColor: 'transparent' }}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ display: 'none', borderTop: '1px solid rgba(168, 85, 247, 0.2)', paddingTop: '16px', paddingBottom: '16px', animation: 'fadeIn 0.3s ease-in' }}>
            {categories.map(cat => (
              <Link
                key={cat.path}
                to={cat.path}
                style={{ display: 'block', padding: '8px 16px', color: '#d1d5db', textDecoration: 'none', borderRadius: '8px', transition: 'all 0.2s', marginBottom: '8px' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}