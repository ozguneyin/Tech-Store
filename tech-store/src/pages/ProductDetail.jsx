import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingCart, ChevronLeft } from 'lucide-react'
import { products } from '../utils/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === parseInt(id))
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0f172a', paddingTop: '48px', paddingBottom: '48px' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>Ürün Bulunamadı</h1>
          <Link to="/products" style={{ color: '#a78bfa', textDecoration: 'underline' }}>Ürünlere Dön</Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0f172a', paddingTop: '48px', paddingBottom: '48px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: '#9ca3af', fontSize: '14px' }}>
          <Link to="/" style={{ color: '#a78bfa', textDecoration: 'none' }}>Anasayfa</Link>
          <span>/</span>
          <Link to="/products" style={{ color: '#a78bfa', textDecoration: 'none' }}>Ürünler</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        {/* Product Main */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '96px' }}>
          {/* Image */}
          <div>
            <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '24px', overflow: 'hidden' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
          </div>

          {/* Details */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.5)', borderRadius: '9999px', padding: '8px 16px', marginBottom: '16px' }}>
              <span style={{ fontSize: '12px', color: '#c084fc', fontWeight: '600', textTransform: 'uppercase' }}>{product.category}</span>
            </div>

            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '16px', lineHeight: '1.2' }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'flex' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} style={{ width: '20px', height: '20px', fill: i < Math.floor(product.rating) ? '#facc15' : 'transparent', color: i < Math.floor(product.rating) ? '#facc15' : '#4b5563' }} />
                ))}
              </div>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>({product.rating}) • {product.stock > 0 ? 'Stokta' : 'Stok Yok'}</span>
            </div>

            {/* Price */}
            <div style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '40px', fontWeight: 'bold', background: 'linear-gradient(to right, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  ₺{product.price.toLocaleString('tr-TR')}
                </span>
                {product.oldPrice && (
                  <span style={{ fontSize: '20px', color: '#9ca3af', textDecoration: 'line-through' }}>
                    ₺{product.oldPrice.toLocaleString('tr-TR')}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p style={{ color: '#d1d5db', marginBottom: '32px', lineHeight: '1.6' }}>
              {product.description}
            </p>

            {/* Quantity & Add to Cart */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', color: '#d1d5db', fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Adet Seç</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ width: '40px', height: '40px', backgroundColor: '#0f172a', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>−</button>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} style={{ width: '60px', padding: '8px', backgroundColor: '#0f172a', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px', color: 'white', textAlign: 'center' }} />
                <button onClick={() => setQuantity(quantity + 1)} style={{ width: '40px', height: '40px', backgroundColor: '#0f172a', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>+</button>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={handleAddToCart} disabled={product.stock === 0} style={{ flex: 1, padding: '14px 24px', background: product.stock > 0 ? 'linear-gradient(to right, #9333ea, #3b82f6)' : '#6b7280', color: 'white', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: product.stock > 0 ? 'pointer' : 'not-allowed', opacity: product.stock > 0 ? 1 : 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <ShoppingCart style={{ width: '20px', height: '20px' }} />
                {product.stock > 0 ? 'Sepete Ekle' : 'Stok Yok'}
              </button>
              <Link to="/products" style={{ padding: '14px 24px', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px', color: '#a78bfa', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <ChevronLeft style={{ width: '20px', height: '20px' }} />
                Ürünlere Dön
              </Link>
            </div>
          </div>
        </div>

        {/* Specs */}
        <section style={{ marginBottom: '96px', backgroundColor: '#1e293b', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>Teknik Özellikler</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {product.specs && product.specs.length > 0 ? (
              product.specs.map((spec, idx) => (
                <div key={idx} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(168, 85, 247, 0.1)' }}>
                  <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>{spec.label}</p>
                  <p style={{ color: 'white', fontWeight: '600' }}>{spec.value}</p>
                </div>
              ))
            ) : (
              <p style={{ color: '#9ca3af' }}>Teknik özellikler henüz eklenmemiş.</p>
            )}
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>Benzer Ürünler</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
