import { useState, useEffect } from 'react';

// React Hooks
function LifeCycle() {
  const [arrNumber, setArrNumber] = useState([2]);
  const [counter, setCounter] = useState(1);
  
  useEffect(() => {
    console.log('Chạy sau mỗi lần render')
  });

  useEffect(() => {
    console.log('Chạy 1 lần sau lần render đầu tiên')
  }, []);

  useEffect(() => {
    console.log('Chạy mỗi khi counter thay đổi. Và chạy 1 lần sau lần render đầu tiên')
  }, [counter]);

  useEffect(() => {
    console.log('Chạy mỗi khi arrNumber thay đổi. Và chạy 1 lần sau lần render đầu tiên')
  }, [arrNumber]);

  useEffect(() => {
    console.log('Một trong hai counter và arrNumber thay đổi thì nó sẽ chạy')
  }, [counter, arrNumber]);

  function handleClick() {
    const newCounter = counter + 1;
    setCounter(newCounter);
  }

  function handleAddArr() {
    const number = Math.floor(Math.random() * 100);
    const newArray = arrNumber.slice();
    newArray.push(number);
    setArrNumber(newArray);
  }

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
  )
}

export default LifeCycle;