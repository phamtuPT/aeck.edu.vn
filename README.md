# AECK Landing Page

Landing page cho trung tâm giáo dục AECK với 2 chức năng chính: Khoá học và Phòng luyện.

## Tính năng

- ✅ Giao diện đẹp, responsive
- ✅ Landing page đơn giản, hiệu quả
- ✅ Chuyển hướng đến các subdomain
- ✅ SEO được tối ưu
- ✅ Hỗ trợ đa thiết bị

## Cấu trúc dự án

```
aeck.edu.vn/
├── index.html          # Trang chính
├── style.css           # CSS styles (clean)
├── logo-square.ico     # Favicon
├── assets/             # Hình ảnh và tài nguyên
├── CNAME              # Domain config
└── README.md          # File này
```

## Chức năng

### 1. Khoá học
- Click vào card "KHOÁ HỌC" 
- Chuyển hướng đến: `https://khoahoc.aeck.edu.vn`
- Mở trong tab mới

### 2. Phòng luyện  
- Click vào card "PHÒNG LUYỆN"
- Chuyển hướng đến: `https://khaothi.aeck.edu.vn`
- Mở trong tab mới

## SEO Features

- ✅ Meta tags đầy đủ (title, description, keywords)
- ✅ Open Graph cho social media
- ✅ Twitter Card
- ✅ JSON-LD structured data
- ✅ Canonical URL
- ✅ Favicon (logo-square.ico)
- ✅ Mobile-friendly viewport

## Responsive Design

- **Desktop**: 2 cards nằm ngang
- **Tablet**: 2 cards responsive
- **Mobile**: 2 cards xếp dọc

## Browser Support

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Progressive enhancement

## Development

```bash
# Chỉ cần mở file HTML
open index.html

# Hoặc serve bằng local server
python -m http.server 8000
# Hoặc
npx serve .
```

## Deployment

Website được deploy tại:
- Domain: `ttkt.aeck.edu.vn`
- Subdomain redirect:
  - `khoahoc.aeck.edu.vn` - Khoá học
  - `khaothi.aeck.edu.vn` - Phòng luyện

## Phiên bản

- Version: 2.0.0 (Landing Page)
- Cập nhật: November 2025
- Tác giả: AECK Team 