- Vòng đời của một Component trong React
- Khi nào Component của mình được sinh ra? 
- Khi nào Component của mình bị mất đi?
- Khi nào Component của mình re-render (Mỗi lần data, state thay đổi sẽ render lại)

- Quyết định đoạn code của mình chạy bao nhiêu lần?

- Có những lúc chúng chỉ muốn chạy đoạn code của mình 1 lần đầu tiên thôi
  + Lấy data từ Back End về. Lấy 1 lần thôi. Lần sau đâu lấy lại.

- Bản chất React bên dưới so sánh hai giá trị (Trước và sau khi mình gọi hàm setState...)
  + Hai dạng kiểu dữ liệu trong Javascript
    + Primitive Type (number, boolean, string, ...)
    + Object Type

  + Đối với Object (Có cả Array) khi muốn tạo ra giá trị mới từ giá trị cũ -> Luôn luôn phải copy địa chỉ ô nhớ.

- Khi nhắc tới hàm phải luôn luôn nói được input, output, chức năng hàm
- `useEffect` là một hàm
  + Nhận vào 2 tham số
  + Tham số đầu tiên là bắt buộc (required)
  + Tham số thứ 2 là tuỳ chọn (optional)

  + Trong đó:
    + Tham số 1 là một biến chứa một hàm
    + Tham số 2 là một array. Truyền vào cũng được, không truyền thì thôi. Tham số này chứa những biến phụ thuộc để cho React nó quyết định hàm trong tham số 1 có được chạy hay là không? 

- useEffect(thamSo1, thamSo2)

```javascript
  useEffect(
    function() {

    }
  )
  // Được chạy "SAU" mỗi lần render
```

```javascript
  useEffect(
    function() {

    },
    []
  )
  // [] gọi là empty deps
  // Chạy 1 lần duy nhất sau lần render đầu tiên
```

```javascript
  useEffect(() => {

  })
  // Được chạy "SAU" mỗi lần render
```

```javascript
  useEffect(() => {
    
  }, [])
  // Chạy 1 lần duy nhất sau lần render đầu tiên
```

```javascript
  // Có state, props counter bên ngoài
  useEffect(() => {
    
  }, [counter])
  // Chạy 1 lần duy nhất sau lần render đầu tiên
  // Cứ mỗi lần counter được thay đổi, thì nó chạy lại
```

```javascript
  // Có state, props counter bên ngoài
  useEffect(() => {
    
  }, [counter, arrNumber])
  // Chạy 1 lần duy nhất sau lần render đầu tiên
  // Cứ mỗi lần counter hoặc arrNumber thay đổi thì nó sẽ chạy
  // Một trong hai biến phụ thuộc thay đổi thì hàm sẽ chạy
```

```javascript
  useEffect(() => {
    // mounted
    return () => {
      // Cú pháp cũ gọi là unmount
    }
  }, [])
```

- Khi hàm callback trong tham số đầu tiên được gọi -> Đồng nghĩa với việc component của mình chắc chắn 100% đã được khởi tạo