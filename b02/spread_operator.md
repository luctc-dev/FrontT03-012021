```javascript
  function tinhTong(...thamSoTruyenVao) {
    console.log(thamSoTruyenVao);
  }

  // tinhTong(10) -> thamSoTruyenVao = [10]
  // tinhTong(10, 20) -> thamSoTruyenVao = [10, 20]
```

```javascript 
  // Trái ngược với Destructring (Phân rã)
  // Spread operator sẽ nhóm các phần tử trong array vào một array khác
  var arr = [20, 30, 40, 50, 50, 6506, 420 , 534, 353];
  var [el1, el2, ...arrElConLai] = arr;
  // el1 = 20
  // el2 = 30
  // arrElConLai = [40, 50, 50, 6506, 420, 534, 353]
```

```javascript 
  // Gom nhóm các thuộc tính trong object vào object khác
  var obj = {
    firstName: 'Trần',
    lastName: 'Lực',
    age: 30,
    score: 10
  }
  var { age } = obj;
  var newObj = {
    firstName: obj.firstName,
    lastName: obj.lastName,
    score: obj.score,
  }

  // Cách dùng spread operator
  var { age, ...newObj } = obj;
```

=> Ứng dụng để copy phần tử và tạo ra một array mới, một object mới
```javascript
  // Copy toàn bộ dữ liệu bên trong obj vào thằng newObj 
  var obj = {
    firstName: 'Trần',
    lastName: 'Lực',
    age: 30,
    score: 10
  }
  var { ...newObj } = obj;
```

```javascript
  var arr = [20, 30, 40, 50, 50, 6506, 420 , 534, 353];
  var [ ...cacPhanTuConLai ] = arr;
```

- Bản chất của những ES6 muốn chạy trên duyệt cũ cũng phải chuyển về cú pháp ES5 (Dùng những hàm có sẵn của Array, Object, Chạy vòng lặp, ...) để copy từng phần tử