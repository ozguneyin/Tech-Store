import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product, 1)
  }

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', transition: 'all 0.3s', transform: 'scale(1)' }}>
        {/* Image Container */}
        <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#334155', height: '224px' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', transform: 'scale(1)' }}
          />
          {discountPercent > 0 && (
            <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'linear-gradient(to right, #ef4444, #f97316)', color: 'white', padding: '4px 12px', borderRadius: '9999px', fontSize: '14px', fontWeight: 'bold' }}>
              -{discountPercent}%
            </div>
          )}
          {product.stock < 5 && product.stock > 0 && (
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', backgroundColor: '#eab308', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>
              Az Stok
            </div>
          )}
          {product.stock === 0 && (
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Stok Yok</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Category */}
          <p style={{ fontSize: '12px', color: '#a78bfa', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>
            {product.category}
          </p>

          {/* Name */}
          <h3 style={{ fontWeight: '600', color: 'white', marginBottom: '12px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {product.name}
          </h3>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
            <div style={{ display: 'flex' }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  style={{
                    width: '16px',
                    height: '16px',
                    fill: i < Math.floor(product.rating) ? '#facc15' : 'transparent',
                    color: i < Math.floor(product.rating) ? '#facc15' : '#4b5563',
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: '12px', color: '#9ca3af' }}>({product.rating})</span>
          </div>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', marginTop: 'auto' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>
              ₺{product.price.toLocaleString('tr-TR')}
            </span>
            {product.oldPrice && (
              <span style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'line-through' }}>
                ₺{product.oldPrice.toLocaleString('tr-TR')}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <p style={{ fontSize: '12px', color: product.stock > 0 ? '#10b981' : '#ef4444', marginBottom: '12px' }}>
            {product.stock > 0 ? `${product.stock} adet stok` : 'Stok yok'}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            style={{
              width: '100%',
              padding: '10px 16px',
              background: product.stock > 0 ? 'linear-gradient(to right, #9333ea, #3b82f6)' : '#6b7280',
              color: 'white',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              opacity: product.stock > 0 ? 1 : 0.5,
            }}
          >
            {product.stock > 0 ? 'Sepete Ekle' : 'Stok Yok'}
          </button>
        </div>
      </div>
    </Link>
  )
}