import { useState, useEffect } from 'react';
import Button from './components/Button';

// React Hooks
function LifeCycle() {
  const [arrNumber, setArrNumber] = useState([2]);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);

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

  function handleGetPosts() {
    // Giả lập Server xử lý 1s mới xong
    setLoading(true);
    console.log('Đang lấy data ....')
    setTimeout(() => {
      setLoading(false);
      console.log('Server trả về dữ liệu thành công');
    }, 1000);
  }

  // const isShowButton = counter % 2 === 0;

  return (
    <div className="container">
      <h1>Counter {counter}</h1>
      <h1>Array {String(arrNumber)}</h1>
      
      <Button isLoading={loading} onClick={handleGetPosts} >Button Primary</Button> 
      <Button isLoading={loading} onClick={handleGetPosts} type="light" >Button Light</Button> 
      <Button isLoading={loading} type="secondary" className="muon-custom-class">Button Secondary</Button> 
      <Button htmlType="submit" type="success">Button Success</Button> 
      <Button type="danger">Button Danger</Button> 
      <Button type="warning">Button Warning</Button> 
      <Button 
        type="info" 
        onClick={() => {
          console.log('click vao info')
        }}
        title="Tieu đề nhỏ khi rê chuột vào phần tử"
      >Button Info</Button> 

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