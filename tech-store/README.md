# 🛍️ TechStore - Teknoloji Ürünleri E-Ticaret Sitesi

Modern, profesyonel bir teknoloji ürünleri e-ticaret platformu. React, Vite ve Tailwind CSS ile geliştirilmiş, çerez-tabanlı sepet yönetimi ile kalıcı veri depolama sağlayan tam fonksiyonel bir SPA uygulaması.

## ✨ Özellikler

### 🎯 Temel Özellikler
- **Tek Sayfa Uygulaması (SPA)**: React Router ile hızlı sayfa geçişleri
- **Modern Tasarım**: Koyu tema, elektrik mavisi/mor gradyanlar, glassmorphism efektleri
- **Responsive Tasarım**: Mobil, tablet ve masaüstü için tam uyumlu
- **Sepet Yönetimi**: Context API + js-cookie ile 7 günlük kalıcı depolama

### 📱 Sayfalar
- **Anasayfa**: Hero banner, kategori kartları, öne çıkan ürünler
- **Ürün Listeleme**: Gelişmiş filtreleme (kategori, fiyat aralığı, puan) ve sıralama
- **Ürün Detayı**: Detaylı ürün bilgileri, galeri, benzer ürünler
- **Sepet**: Ürün yönetimi, miktar kontrolü, sipariş özeti

### 🛒 Sepet Sistemi
- Ürün ekleme/çıkarma
- Miktar kontrolü (+ / -)
- Otomatik toplam hesaplama
- Sayfa yenilendiğinde sepet verisi korunur
- 7 günlük çerez ile persiste edilen veri

## 🚀 Kurulum

### Gereksinimler
- Node.js 16+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın veya indirin**
```bash
cd tech-store
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:5173
```

## 🛠️ Teknoloji Yığını

| Teknoloji | Versiyon | Kullanım |
|-----------|----------|----------|
| React | 19.2.7 | UI framework |
| Vite | 8.1.2 | Build tool |
| React Router | 7.x | Routing |
| Tailwind CSS | 4.x | Styling |
| lucide-react | - | İkonlar |
| js-cookie | - | Çerez yönetimi |

## 📁 Proje Yapısı

```
tech-store/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   └── Cart.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── utils/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎮 Kullanım

### Anasayfa
- Kategori kartlarına tıklayarak ürün listesine filtrelenmiş şekilde gidin
- "Öne Çıkan Ürünler" sekmesinde popüler ürünleri görün

### Ürün Listeleme
- **Filtreleme**: Kategori, fiyat aralığı, puana göre filtreleyin
- **Sıralama**: En popüler, en yeni, fiyat, puana göre sıralayın
- **Ürün Seçimi**: Ürün kartına tıklayarak detaylarını görün

### Ürün Detayı
- Ürün görseli ve detaylı açıklama
- Teknik özellikler listesi
- Miktar seçeci
- "Sepete Ekle" butonu
- Benzer ürünler önerileri

### Sepet
- Sepetteki ürünleri görüntüleyin
- Miktarını değiştirin
- Ürünü kaldırın
- Sipariş özetini görün
- "Ödemeye Geç" butonuna tıklayın

## 🔄 Sepet Sistemi

### Özellikler
- **Otomatik Persiste**: Sepet verisi tarayıcıda saklanır
- **7 Günlük Süresi**: Çerezin geçerliliği 7 gündür
- **Anında Senkronizasyon**: Sepete ürün eklenince/çıkarılınca hemen güncellenir
- **Ürün Bilgisi**: Ad, fiyat, miktar, resim
- **Toplam Hesaplama**: Otomatik ara toplam ve genel toplam

### CartContext API
```javascript
const { cart, addToCart, removeFromCart, 
        updateQuantity, cartTotal, cartCount } = useCart()

// Ürün ekleme
addToCart(product, quantity)

// Ürün kaldırma
removeFromCart(productId)

// Miktar güncelleme
updateQuantity(productId, newQuantity)
```

## 🔧 Sorun Giderme

### Sepet Verisi Kaybolmuyor
- Browser console'da hata kontrolü yapın (F12)
- Application > Cookies > tech_store_cart'ı kontrol edin
- Özel tarama modunda çerezler otomatik silinir

### Sayfa Yüklenmediğinde
```bash
npm install
npm run dev
```

### Stil Sorunları
- Cache temizleyin: Ctrl+Shift+Delete
- Vite dev server: npm run dev yeniden başlatın

## 📊 Ürün Verisi

Örnek ürün formatı:
```javascript
{
  id: 1,
  name: "Ürün Adı",
  category: "Telefon",
  price: 2999,
  oldPrice: 3999,
  image: "https://...",
  rating: 4.5,
  stock: 10,
  description: "Açıklama",
  specs: [
    {label: "Ekran", value: "6.5 inç"},
    {label: "İşlemci", value: "Snapdragon 8"}
  ]
}
```

## 🎨 Renk Paleti

| Renk | Hex | Kullanım |
|------|-----|----------|
| Ana Arka Plan | `#0f172a` | Sayfa |
| Kart Arka | `#1e293b` | Kartlar |
| Metin Ana | `#ffffff` | Ana metin |
| Metin İkincil | `#d1d5db` | İkincil |
| Mor Vurgu | `#a855f7` | Gradiyen |
| Mavi Vurgu | `#3b82f6` | Gradiyen |

## 🚀 Derleme ve Deployment

### Production Build
\\\ash
npm run build
\\\

### Preview
\\\ash
npm run preview
\\\

## 📋 Kontrol Listesi - Tamamlanan Özellikler

### ✅ Temel Fonksiyonalite
- [x] Responsive tasarım
- [x] Context API ile state yönetimi
- [x] Çerez tabanlı sepet persisti
- [x] Ürün filtreleme ve sıralama
- [x] Kategori navigasyonu
- [x] Ürün detay sayfası
- [x] Sepet yönetimi (ekle/sil/güncelle)
- [x] Dinamik fiyat hesaplama
- [x] Stok durumu gösterimi
- [x] İndirim yüzdesi gösterimi

### ✅ UI/UX
- [x] Gradient tasarım
- [x] Glassmorphism efektleri
- [x] Hover animasyonları
- [x] Yıldız puanlandırması
- [x] Ürün resim galeri
- [x] Benzer ürün önerileri
- [x] Header'da sepet sayısı badge'i
- [x] Koyu tema

## 💡 Geliştirme İpuçları

1. **Sepeti Test Etmek**: Anasayfa → Ürün → Sepete Ekle → Sayfayı Yenile
2. **Filtreleri Test Etmek**: Ürünler sayfasında kategori/fiyat filtrelerini kullanın
3. **Developer Tools**: F12 → Application → Cookies → tech_store_cart'ı kontrol edin
4. **Console Hataları**: F12 → Console'da herhangi bir hata var mı kontrol edin

## 🔮 Gelecek Geliştirmeler

- [ ] Kullanıcı kaydı/girişi
- [ ] Gerçek ödeme gateway'i
- [ ] Sipariş geçmişi
- [ ] Ürün yorumları
- [ ] Favoriler listesi
- [ ] Gelişmiş arama
- [ ] Tema değiştiricisi
- [ ] Müşteri desteği chat'i

## 🌐 Browser Desteği

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 Lisans

MIT License - Özgür olarak kullanabilirsiniz

## 👨‍💻 Geliştirici

Teknoloji Mağazası Frontend - 2026

---

**Not**: Bu proje eğitim amaçlı oluşturulmuştur. Gerçek bir e-ticaret platformu için ek güvenlik ve backend entegrasyonu gereklidir.
