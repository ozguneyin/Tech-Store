export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e293b', borderTop: '1px solid rgba(168, 85, 247, 0.3)', marginTop: '80px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 16px', paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Features */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '64px', paddingBottom: '64px', borderBottom: '1px solid rgba(168, 85, 247, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ color: '#a855f7', marginTop: '4px' }}>🚚</div>
            <div>
              <h3 style={{ fontWeight: '600', color: 'white', marginBottom: '4px' }}>Hızlı Kargo</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>2-4 iş günü içinde teslim</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ color: '#3b82f6', marginTop: '4px' }}>🛡️</div>
            <div>
              <h3 style={{ fontWeight: '600', color: 'white', marginBottom: '4px' }}>Güvenli Alışveriş</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>SSL şifreli bağlantı</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ color: '#10b981', marginTop: '4px' }}>💳</div>
            <div>
              <h3 style={{ fontWeight: '600', color: 'white', marginBottom: '4px' }}>Kolay Ödeme</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>Birden fazla ödeme seçeneği</p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginBottom: '48px' }}>
          <div>
            <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>TechStore</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '16px' }}>Modern teknoloji ürünleri için en güvenilir alışveriş platformu.</p>
            <p style={{ color: '#6b7280', fontSize: '12px' }}>© 2026 TechStore. Tüm hakları saklıdır.</p>
          </div>

          <div>
            <h3 style={{ fontWeight: '600', color: 'white', marginBottom: '16px' }}>Hızlı Linkler</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: '#9ca3af', fontSize: '14px' }}>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Anasayfa</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Ürünler</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Hakkımızda</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>İletişim</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: '600', color: 'white', marginBottom: '16px' }}>Destek</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: '#9ca3af', fontSize: '14px' }}>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>SSS</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Gönderim Takibi</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>İade Politikası</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Koşullar ve Şartlar</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: '600', color: 'white', marginBottom: '16px' }}>İletişim</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '12px' }}>
              <strong>Email:</strong><br />
              <a href="mailto:info@techstore.com" style={{ color: '#9ca3af', textDecoration: 'none' }}>info@techstore.com</a>
            </p>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
              <strong>Telefon:</strong><br />
              +90 (212) 555-0000
            </p>
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div style={{ borderTop: '1px solid rgba(168, 85, 247, 0.2)', paddingTop: '32px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={{ padding: '8px', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>f</a>
            <a href="#" style={{ padding: '8px', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>𝕏</a>
            <a href="#" style={{ padding: '8px', backgroundColor: 'rgba(236, 72, 153, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📷</a>
            <a href="#" style={{ padding: '8px', backgroundColor: 'rgba(99, 102, 241, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>in</a>
          </div>
          <div style={{ color: '#9ca3af', fontSize: '14px' }}>
            <p>Kabul ettiğimiz ödeme yöntemleri: Kredi Kartı • Banka Transferi • E-Cüzdan</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
