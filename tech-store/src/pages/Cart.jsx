import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0f172a', paddingTop: '48px', paddingBottom: '48px' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>Sepetiniz Boş</h1>
          <p style={{ color: '#9ca3af', marginBottom: '32px' }}>Alışveriş yapmaya başlamak için ürünleri keşfet.</p>
          <Link
            to="/"
            style={{ padding: '12px 24px', background: 'linear-gradient(to right, #9333ea, #3b82f6)', color: 'white', fontWeight: '600', borderRadius: '8px', textDecoration: 'none', display: 'inline-block' }}
          >
            Alışverişe Devam Et
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0f172a', paddingTop: '48px', paddingBottom: '48px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '32px' }}>Sepetim</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '32px' }}>
          {/* Cart Items */}
          <div>
            <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)', overflow: 'hidden' }}>
              {cart.map((item, index) => (
                <div key={item.id} style={{ padding: '20px', borderBottom: index < cart.length - 1 ? '1px solid rgba(168, 85, 247, 0.1)' : 'none', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '8px' }}>{item.name}</h3>
                    <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '12px' }}>₺{item.price.toLocaleString('tr-TR')}</p>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ width: '32px', height: '32px', backgroundColor: '#0f172a', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '16px' }}
                      >
                        −
                      </button>
                      <span style={{ color: 'white', minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ width: '32px', height: '32px', backgroundColor: '#0f172a', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '16px' }}
                      >
                        +
                      </button>
                      <span style={{ color: '#9ca3af', marginLeft: 'auto' }}>Toplam: ₺{(item.price * item.quantity).toLocaleString('tr-TR')}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ padding: '8px', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: 'none', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }}
                  >
                    <Trash2 style={{ width: '20px', height: '20px' }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '24px', height: 'fit-content' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>Sipariş Özeti</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#d1d5db', fontSize: '14px' }}>
              <span>Ara Toplam:</span>
              <span>₺{cartTotal.toLocaleString('tr-TR')}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#d1d5db', fontSize: '14px' }}>
              <span>Kargo:</span>
              <span>₺0</span>
            </div>

            <div style={{ borderTop: '1px solid rgba(168, 85, 247, 0.2)', paddingTop: '12px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', color: 'white', fontWeight: '600' }}>
              <span>Toplam:</span>
              <span>₺{cartTotal.toLocaleString('tr-TR')}</span>
            </div>

            <button
              style={{ width: '100%', padding: '12px', background: 'linear-gradient(to right, #9333ea, #3b82f6)', color: 'white', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '12px' }}
            >
              Ödemeye Geç
            </button>

            <Link
              to="/products"
              style={{ display: 'block', textAlign: 'center', padding: '10px', color: '#a78bfa', textDecoration: 'none', fontSize: '14px', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px' }}
            >
              Alışverişe Devam Et
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}