- Đa ngôn ngữ
- i18n
- Phải có sự hỗ trợ của 2 phía 
  - Back End
    - Những dữ liệu nào chúng ta lấy từ Back End về thì do Back End làm việc đa ngôn ngữ 

  - Front End
    - Những từ nào mà chúng ta code cứng ở Front End -> Do Front End làm

- Cấp cơ bản nhất của chuyển ngôn ngữ:
```javascript
// Nếu chỉ có nhiêu đây thì có thể tự làm được. Không cần thư viện
var catalogs = {
    vi: {
        "Bài viết mới nhất": "Bài viết mới nhất",
        "Chào buổi sáng {{name}}": "Chào buổi sáng {{name}}",
    },
    en: {
        "Bài viết mới nhất": "Latest posts",
        "Chào buổi sáng {{name}}" "Good morning {{name}}"
    }
}
var lang = 'vi'; // Sau này có thể đổi thành en

// 
<h1>{catalogs[lang]['Bài viết mới nhất']}</h1>
```

- Sau này về vấn đề đa ngôn ngữ phát sinh thêm 
  - Số ít số nhiều
  - Đại từ nhân xưng
  - Truyền biến vào đoạn text