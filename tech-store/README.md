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

### 🎨 UI/UX
- Yumuşak gölgeler ve yuvarlatılmış köşeler
- Hover animasyonları ve geçişler
- Gradient başlıklar ve vurgular
- Ürün stok durumu göstergesi
- İndirim yüzdesi gösterimi

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
| Tailwind CSS | 4.x | Styling (inline converted) |
| lucide-react | - | İkonlar |
| js-cookie | - | Çerez yönetimi |

## 📁 Proje Yapısı

```
tech-store/
├── src/
│   ├── components/          # React bileşenleri
│   │   ├── Header.jsx      # Başlık/navbar
│   │   ├── Footer.jsx      # Alt bilgi
│   │   └── ProductCard.jsx # Ürün kartı
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── Home.jsx        # Anasayfa
│   │   ├── Products.jsx    # Ürün listesi
│   │   ├── ProductDetail.jsx # Ürün detayı
│   │   └── Cart.jsx        # Sepet
│   ├── context/            # State yönetimi
│   │   └── CartContext.jsx # Sepet context + çerez sync
│   ├── utils/              # Yardımcı fonksiyonlar
│   │   └── products.js     # Örnek ürün verisi
│   ├── App.jsx             # Ana uygulama + Router
│   ├── main.jsx            # Giriş noktası
│   └── index.css           # Global stiller
├── index.html              # HTML template
├── package.json            # Bağımlılıklar
├── vite.config.js          # Vite ayarları
├── tailwind.config.js      # Tailwind ayarları
└── postcss.config.js       # PostCSS ayarları
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

## 📊 Ürün Verisi

20 adet örnek teknoloji ürünü (telefon, laptop, kulaklık, aksesuar vb.) içerir:

```javascript
{
  id: 1,
  name: "Ürün Adı",
  category: "Kategori",
  price: 2999,
  oldPrice: 3999,
  image: "image-url",
  rating: 4.5,
  stock: 10,
  description: "Ürün açıklaması",
  specs: [{label: "Özellik", value: "Değer"}]
}
```

## 🔄 Sepet Sistemi Detayları

### CartContext Yapısı
```javascript
{
  cart: [...],              // Sepetteki ürünler
  addToCart(product, qty),  // Ürün ekleme
  removeFromCart(id),       // Ürün kaldırma
  updateQuantity(id, qty),  // Miktar güncelleme
  clearCart(),              // Sepeti temizleme
  cartTotal,                // Toplam tutar
  cartCount                 // Ürün sayısı
}
```

### Çerez Yönetimi
- **Anahtar**: `tech_store_cart`
- **Format**: JSON array
- **Süresi**: 7 gün
- **Trigger**: Sepet değiştiğinde otomatik güncelleme

## 🎨 Renk Paleti

| Renk | Değer | Kullanım |
|------|-------|----------|
| Koyu Arka Plan | `#0f172a` | Sayfa arka planı |
| Kart Arka Planı | `#1e293b` | Bileşen arka planı |
| Açık Metin | `#ffffff` | Ana metin |
| Işık Metin | `#d1d5db` | İkincil metin |
| Mor Vurgu | `#a855f7` | Gradiyen başlangıcı |
| Mavi Vurgu | `#3b82f6` | Gradiyen sonu |

## 🚀 Derleme ve Deployment

### Production Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

Derleme sonucu `dist/` klasöründe statik dosyalar oluşturulur.

## 📝 Notlar

- **Tailwind CSS**: Bazı Tailwind sınıfları inline stiller olarak yazılmıştır
- **Çerez**: Tarayıcı çerezleri etkinleştirilmelidir
- **Resimler**: Placeholder resimleri kullanılmaktadır
- **Ödeme**: Ödeme sistemi UI sadece gösterimdir

## 🔮 Gelecek Geliştirmeler

- [ ] Gerçek ödeme entegrasyonu
- [ ] Kullanıcı hesabı sistemi
- [ ] Sipariş takibi
- [ ] Ürün yorumları
- [ ] Favoriler listesi
- [ ] Arama işlevi
- [ ] Tema değiştiricisi

## 📄 Lisans

MIT License

## 👨‍💻 Geliştirici

Teknoloji Mağazası Frontend - 2026

---

**Not**: Bu proje eğitim amaçlı oluşturulmuştur. Gerçek bir e-ticaret platformu için ek güvenlik ve backend entegrasyonu gereklidir.