import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../utils/products'

export default function Home() {
  const featuredProducts = products.slice(0, 6)
  const categories = [
    { name: 'Telefon', icon: '📱', count: 4 },
    { name: 'Laptop', icon: '💻', count: 4 },
    { name: 'Kulaklık', icon: '🎧', count: 4 },
    { name: 'Aksesuar', icon: '⌚', count: 4 },
  ]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0f172a' }}>
      {/* Hero Banner */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '32px', paddingBottom: '64px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(168, 85, 247, 0.2), transparent)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.5)', borderRadius: '9999px', padding: '8px 16px', marginBottom: '24px' }}>
                <span style={{ fontSize: '14px', color: '#c084fc', fontWeight: '600' }}>Yeni Teknolojiler 🚀</span>
              </div>
              
              <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '24px', lineHeight: '1.2' }}>
                Teknoloji <span style={{ background: 'linear-gradient(to right, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>İnovasyonunun</span> Merkezi
              </h1>
              
              <p style={{ fontSize: '18px', color: '#d1d5db', marginBottom: '32px', lineHeight: '1.6' }}>
                En yeni ve en inovatif teknoloji ürünlerini keşfedin. Premium kalite, uygun fiyat, hızlı kargo.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                <Link
                  to="/products"
                  style={{ padding: '12px 24px', background: 'linear-gradient(to right, #9333ea, #3b82f6)', color: 'white', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', textAlign: 'center', maxWidth: '200px' }}
                >
                  Ürünleri Keşfet →
                </Link>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '32px' }}>
                <div>
                  <p style={{ fontSize: '30px', fontWeight: 'bold', background: 'linear-gradient(to right, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>5000+</p>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>Mutlu Müşteri</p>
                </div>
                <div>
                  <p style={{ fontSize: '30px', fontWeight: 'bold', background: 'linear-gradient(to right, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>150+</p>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>Ürün Çeşidi</p>
                </div>
                <div>
                  <p style={{ fontSize: '30px', fontWeight: 'bold', background: 'linear-gradient(to right, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>24/7</p>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>Destek</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div style={{ position: 'relative', height: '400px', display: 'none' }} />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ paddingTop: '64px', paddingBottom: '96px', borderTop: '1px solid rgba(168, 85, 247, 0.2)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '48px', textAlign: 'center' }}>
            Kategoriler
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {categories.map(cat => (
              <Link
                key={cat.name}
                to={`/products?category=${cat.name}`}
                style={{ padding: '24px 32px', backgroundColor: '#1e293b', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)', textDecoration: 'none', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>{cat.name}</h3>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>{cat.count} Ürün</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ paddingTop: '64px', paddingBottom: '96px', borderTop: '1px solid rgba(168, 85, 247, 0.2)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '48px', textAlign: 'center' }}>
            Öne Çıkan Ürünler
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}