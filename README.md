# BlueBookAI - Trợ lý AI Gợi Ý Sách Thông Minh

<div align="center">
  <img src="src/main/frontend/public/logo.svg" alt="BlueBookAI Logo" width="120" height="120" />
  <h1>BlueBookAI</h1>
  <p><strong>Trợ lý AI chuyên gợi ý sách dựa trên sở thích và nhu cầu của bạn</strong></p>
  
  ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.3-brightgreen)
  ![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)
  ![React](https://img.shields.io/badge/React-18-blue)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
  ![Java](https://img.shields.io/badge/Java-24-orange)
  ![Gemini AI](https://img.shields.io/badge/Gemini%20AI-2.0%20Flash-blue)
</div>

## 📚 Tổng Quan Dự Án

**BlueBookAI** là một ứng dụng web thông minh kết hợp sức mạnh của Google Gemini AI để phân tích sở thích đọc sách và đưa ra những gợi ý sách cá nhân hóa cho người dùng. Ứng dụng được xây dựng với kiến trúc full-stack hiện đại, sử dụng Spring Boot cho backend và Next.js cho frontend.

### ✨ Tính Năng Chính

- 🤖 **AI Chat Thông Minh**: Tương tác tự nhiên với AI để nhận gợi ý sách
- 📚 **Gợi Ý Sách Cá Nhân Hóa**: Phân tích sở thích và đưa ra danh sách sách phù hợp
- 💬 **Quản Lý Phiên Chat**: Tạo và quản lý nhiều phiên trò chuyện
- 🔑 **Quản Lý API Key**: Giao diện an toàn để nhập và lưu trữ API key
- 🎨 **Giao Diện Hiện Đại**: UI/UX đẹp mắt với theme sáng/tối
- 📱 **Responsive Design**: Tương thích hoàn hảo với mọi thiết bị
- 🔄 **Real-time Updates**: Cập nhật gợi ý theo thời gian thực
- 📖 **Markdown Rendering**: Hiển thị phản hồi AI với định dạng markdown

## 🏗️ Kiến Trúc Hệ Thống

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.4.3
- **AI Integration**: Google Gemini 2.0 Flash API
- **Session Management**: Quản lý phiên chat với in-memory storage
- **RESTful API**: Endpoints cho chat và gợi ý sách
- **API Key Validation**: Xác thực API key từ request header
- **CORS Configuration**: Hỗ trợ cross-origin requests
- **Error Handling**: Global exception handling

### Frontend (Next.js)
- **Framework**: Next.js 14.2.16 với App Router
- **UI Library**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Theme System**: Dark/Light mode với next-themes
- **Markdown Rendering**: react-markdown với remark-gfm
- **Session Management**: localStorage cho persistent sessions
- **Responsive Design**: Mobile-first approach

## 🚀 Yêu Cầu Hệ Thống

- **Java**: 24+
- **Node.js**: 18+
- **Maven**: 3.8+
- **Gemini API Key**: Từ [Google AI Studio](https://ai.google.dev/)
- **Kết nối Internet**: Để truy cập Gemini API

## 📦 Cài Đặt và Chạy Dự Án

### 1. Clone Repository

```bash
git clone <repository-url>
cd hello-flash-Copy
```

### 2. Lấy Gemini API Key

1. Truy cập [Google AI Studio](https://ai.google.dev/)
2. Tạo tài khoản nếu chưa có
3. Vào phần API keys
4. Tạo API key mới
5. Sao chép API key (bắt đầu bằng "AIza")

### 3. Chạy Backend

```bash
# Di chuyển vào thư mục gốc
cd "E:\NetBeansProjects\hello-flash - Copy"

# Chạy Spring Boot application
mvn spring-boot:run
```

Backend sẽ chạy tại: `http://localhost:8080`

### 4. Chạy Frontend

Mở terminal mới và chạy:

```bash
# Di chuyển vào thư mục frontend
cd src/main/frontend

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:3000`

### 5. Cấu Hình API Key

1. Mở ứng dụng tại `http://localhost:3000`
2. Click vào sidebar (biểu tượng menu)
3. Trong phần "API Configuration", nhập API key của bạn
4. Click "Lưu API Key"
5. Bắt đầu sử dụng ứng dụng!

## 📁 Cấu Trúc Dự Án

```
BlueBookAI/
├── src/
│   ├── main/
│   │   ├── java/backend/
│   │   │   ├── Application.java              # Main Spring Boot class
│   │   │   ├── config/
│   │   │   │   ├── WebConfig.java            # CORS & RestTemplate config
│   │   │   │   └── GlobalExceptionHandler.java # Global error handling
│   │   │   ├── controller/
│   │   │   │   ├── BookRecommendationController.java # Main API endpoints
│   │   │   │   └── GeminiModelController.java # Model management
│   │   │   ├── service/
│   │   │   │   └── BookRecommendationService.java # Business logic
│   │   │   └── model/
│   │   │       ├── ChatRequest.java          # Request DTOs
│   │   │       ├── ChatResponse.java         # Response DTOs
│   │   │       ├── GeminiModel.java          # Model entity
│   │   │       └── ModelListResponse.java    # Model list response
│   │   ├── frontend/                         # Next.js application
│   │   │   ├── app/
│   │   │   │   ├── api/recommend/route.ts    # API proxy to backend
│   │   │   │   ├── layout.tsx               # Root layout
│   │   │   │   ├── page.tsx                 # Main chat interface
│   │   │   │   └── globals.css              # Global styles
│   │   │   ├── components/
│   │   │   │   ├── app-sidebar.tsx          # Session & API management
│   │   │   │   ├── book-decoration.tsx      # Background decorations
│   │   │   │   ├── social-links.tsx         # Social media links
│   │   │   │   ├── markdown-renderer.tsx    # Markdown rendering
│   │   │   │   ├── theme-provider.tsx       # Theme management
│   │   │   │   └── ui/                      # shadcn/ui components
│   │   │   ├── hooks/
│   │   │   │   ├── use-mobile.tsx           # Mobile detection
│   │   │   │   └── use-toast.ts             # Toast notifications
│   │   │   ├── lib/
│   │   │   │   └── utils.ts                 # Utility functions
│   │   │   ├── public/                      # Static assets
│   │   │   │   ├── logo.svg                 # Main logo
│   │   │   │   ├── logo.png                 # Logo PNG version
│   │   │   │   └── favicon.ico              # Favicon
│   │   │   ├── next.config.mjs              # Next.js configuration
│   │   │   ├── tailwind.config.ts           # Tailwind CSS config
│   │   │   ├── postcss.config.mjs           # PostCSS configuration
│   │   │   ├── tsconfig.json                # TypeScript config
│   │   │   └── package.json                 # Frontend dependencies
│   │   └── resources/
│   │       └── application.properties       # Spring Boot config
│   └── test/                                # Test files
├── pom.xml                                  # Maven configuration
├── mvnw                                     # Maven wrapper script
├── mvnw.cmd                                 # Maven wrapper (Windows)
└── README.md                                # This file
```

## 🔌 API Endpoints

### Backend Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Health check endpoint |
| `POST` | `/api/books/recommend` | Gửi tin nhắn chat và nhận phản hồi từ AI |
| `GET` | `/models` | Lấy danh sách các model Gemini có sẵn |

### Request/Response Format

#### POST /api/books/recommend
```http
POST /api/books/recommend
Authorization: Bearer YOUR_GEMINI_API_KEY
Content-Type: application/json

{
  "prompt": "Gợi ý sách trinh thám hay",
  "sessionChatId": "uuid-session-id"
}
```

**Response:**
```json
{
  "recommendation": "Markdown formatted book recommendations..."
}
```

### Frontend API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/recommend` | Proxy để gọi backend API |

## 🎯 Tính Năng Chi Tiết

### 1. AI Chat Thông Minh
- Tương tác tự nhiên với AI bằng tiếng Việt
- Phản hồi được format dưới dạng markdown với bảng và danh sách
- Lưu trữ lịch sử trò chuyện theo session
- Hỗ trợ gợi ý câu hỏi mẫu

### 2. Quản Lý Phiên Chat
- Tạo nhiều phiên chat khác nhau
- Lưu trữ lịch sử trò chuyện trong localStorage
- Chuyển đổi giữa các phiên chat
- Xóa phiên chat không cần thiết
- Tự động tạo phiên mới khi cần

### 3. Quản Lý API Key
- Giao diện an toàn để nhập API key
- Lưu trữ trong localStorage với mã hóa
- Validation API key format (AIza...)
- Giao diện ẩn/hiện API key
- Thông báo lỗi khi API key không hợp lệ

### 4. Gợi Ý Sách Cá Nhân Hóa
- Phân tích sở thích đọc sách của người dùng
- Đưa ra danh sách sách phù hợp với từng cá nhân
- Giải thích lý do gợi ý
- Hỗ trợ nhiều thể loại sách khác nhau
- Thông tin chi tiết về sách (tác giả, năm xuất bản, rating)

### 5. Giao Diện Người Dùng
- Thiết kế hiện đại với sidebar navigation
- Responsive design cho mọi thiết bị
- Loading states và error handling
- Markdown rendering cho phản hồi AI
- Theme sáng/tối với smooth transitions
- Background decorations với animation

## 🛠️ Công Nghệ Sử Dụng

### Backend
- **Spring Boot 3.4.3**: Framework chính cho backend
- **Spring Web**: RESTful web services
- **RestTemplate**: HTTP client cho Gemini API
- **Maven**: Dependency management và build tool
- **SLF4J**: Logging framework

### Frontend
- **Next.js 14.2.16**: React framework với App Router
- **TypeScript 5**: Type safety và developer experience
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library
- **react-markdown**: Markdown rendering
- **next-themes**: Theme management
- **uuid**: Session ID generation
- **lucide-react**: Icon library

### AI & APIs
- **Google Gemini 2.0 Flash**: AI model cho gợi ý sách
- **Gemini API**: OpenAI-compatible endpoints
- **OpenAI-compatible format**: Standard chat completion API

### Development Tools
- **Maven Wrapper**: Consistent Maven version
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **ESLint**: Code linting (disabled for builds)
- **TypeScript**: Static type checking

## 🚀 Phát Triển

### Thêm Tính Năng Mới

1. **Backend**: Thêm controller/service trong package tương ứng
2. **Frontend**: Tạo component mới trong `src/main/frontend/components/`
3. **API**: Cập nhật endpoints và types
4. **Styling**: Sử dụng Tailwind CSS classes

### Cấu Hình Development

```bash
# Backend development
mvn spring-boot:run

# Frontend development
cd src/main/frontend
npm run dev

# Build production
mvn clean package
cd src/main/frontend
npm run build
```

### Environment Variables

```bash
# Backend (application.properties)
server.port=8080

# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## 🐛 Troubleshooting

### Lỗi API Key
- ✅ Đảm bảo API key bắt đầu bằng "AIza"
- ✅ Kiểm tra kết nối internet
- ✅ Xác nhận API key có quyền truy cập Gemini API
- ✅ Kiểm tra quota và billing

### Lỗi Kết Nối
- ✅ Kiểm tra backend đang chạy tại port 8080
- ✅ Kiểm tra frontend đang chạy tại port 3000
- ✅ Xem logs trong console để debug
- ✅ Kiểm tra CORS configuration

### Lỗi Session
- ✅ Xóa localStorage và thử lại
- ✅ Tạo session mới
- ✅ Kiểm tra browser compatibility
- ✅ Kiểm tra localStorage quota

### Lỗi Build
- ✅ Cập nhật Node.js lên version 18+
- ✅ Xóa node_modules và npm install lại
- ✅ Kiểm tra TypeScript errors
- ✅ Kiểm tra Maven dependencies

## 📝 Changelog

### Version 1.0.0
- ✅ Initial release
- ✅ AI chat functionality
- ✅ Session management
- ✅ API key management
- ✅ Responsive design
- ✅ Dark/light theme
- ✅ Markdown rendering

## 🤝 Đóng Góp

Dự án này được phát triển để demo khả năng tích hợp AI vào ứng dụng web. Mọi đóng góp đều được chào đón!

### Cách Đóng Góp
1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 👨‍💻 Tác Giả

**BlueBookAI Team**

---

<div align="center">
  <p>Made with ❤️ by BlueBookAI Team</p>
  <p>Powered by Google Gemini AI</p>
</div>