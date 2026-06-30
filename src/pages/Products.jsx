import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../utils/products'

export default function Products() {
  const [searchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('popular')
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [ratingFilter, setRatingFilter] = useState(0)

  const categories = ['Telefon', 'Laptop', 'Kulaklık', 'Aksesuar', 'Tablet', 'Monitor', 'Gaming', 'VR Headset', 'Drone', 'Kamera']

  const filteredAndSorted = useMemo(() => {
    let result = products

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    result = result.filter(p => p.rating >= ratingFilter)

    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result = [...result].reverse()
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategories, priceRange, ratingFilter, sortBy])

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0f172a', paddingTop: '48px', paddingBottom: '48px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '32px' }}>Ürünler</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '32px' }}>
          {/* Filters Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Sort */}
            <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '16px', fontSize: '16px' }}>Sırala</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', backgroundColor: '#0f172a', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
              >
                <option value="popular">En Popüler</option>
                <option value="newest">En Yeni</option>
                <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
                <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                <option value="rating">En Yüksek Puan</option>
              </select>
            </div>

            {/* Price Filter */}
            <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '16px', fontSize: '16px' }}>Fiyat Aralığı</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  style={{ width: '100%' }}
                />
                <p style={{ color: '#9ca3af', fontSize: '14px' }}>₺0 - ₺{priceRange[1].toLocaleString('tr-TR')}</p>
              </div>
            </div>

            {/* Rating Filter */}
            <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '16px', fontSize: '16px' }}>Puan</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[0, 1, 2, 3, 4, 5].map(rating => (
                  <label key={rating} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', cursor: 'pointer', fontSize: '14px' }}>
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={ratingFilter === rating}
                      onChange={(e) => setRatingFilter(parseInt(e.target.value))}
                      style={{ cursor: 'pointer' }}
                    />
                    {rating === 0 ? 'Tüm Puanlar' : `${rating}+ Yıldız`}
                  </label>
                ))}
              </div>
            </div>

            {/* Categories Filter */}
            <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '16px', fontSize: '16px' }}>Kategoriler</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {categories.map(cat => (
                  <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', cursor: 'pointer', fontSize: '14px' }}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      style={{ cursor: 'pointer' }}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div>
            <div style={{ marginBottom: '24px', color: '#9ca3af', fontSize: '14px' }}>
              {filteredAndSorted.length} ürün bulundu
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {filteredAndSorted.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredAndSorted.length === 0 && (
              <div style={{ textAlign: 'center', color: '#9ca3af', paddingTop: '48px' }}>
                <p style={{ fontSize: '18px' }}>Kriterlere uygun ürün bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}