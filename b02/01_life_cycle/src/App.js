import { useState } from 'react';

let demSoLanChay = 0;

function App() {
  demSoLanChay = demSoLanChay + 1;

  const [arrNumber, setArrNumber] = useState([2]);
  const [counter, setCounter] = useState(1);

  // Nhờ React nhận diện dữ liệu có thay đổi không?
  // Có thay đổi -> Ráp vào JSX -> Render ra HTML
  function layDataXTuServerBackEnd() {
    console.log('... Đang lấy data X - X phụ thuộc vào demSoLanChay ...');
  }

  function layDataYTuServerBackEnd() {
    console.log('... Đang lấy data Y - Y là data thay đổi ...');
  }

  function layData_Z() {
    console.log('... Đang lấy data Z - Phụ thuộc vào arrNumber ...');
  }

  function handleClick() {
    const newCounter = counter + 1;
    setCounter(newCounter);
  }

  function handleAddArr() {
    // Random 1 số bất kỳ. Đưa vào trong array lưu lại
    const number = Math.floor(Math.random() * 100);
    const newArray = arrNumber.slice();
    newArray.push(number);
    setArrNumber(newArray);
  }

  if (demSoLanChay === 1) {
    layDataXTuServerBackEnd();
  }

  layDataYTuServerBackEnd();
  

  layData_Z();

  // Muốn xây dựng ra hàm layData_Z. 
  // Hàm này chỉ chạy khi nào arrNumber thay đổi thôi. 
  // Thằng khác thay đổi (ví dụ counter) không liên quan tới nó


  console.log('render bao nhiêu lần???', demSoLanChay);
  return (
    <div className="container">
      <h1>Counter {counter}</h1>
      <h1>Array {String(arrNumber)}</h1>
      <button
        onClick={handleClick}
      >Tăng giá trị biến counter lên 1 đơn vị</button>
      <button
        onClick={handleAddArr}
      >Random một số bất kỳ</button>
    </div>
  );
}

export default App;
