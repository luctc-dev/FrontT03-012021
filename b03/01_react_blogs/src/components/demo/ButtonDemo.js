import { useState } from 'react';
import Button from '../common/Button';

export default function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  function handleGetPosts() {
    // Giả lập Server xử lý 1s mới xong
    setLoading(true);
    console.log('Đang lấy data ....')
    setTimeout(() => {
      setLoading(false);
      console.log('Server trả về dữ liệu thành công');
    }, 1000);
  }

  return (
    <div style={{ padding: '100px 0' }}>
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
    </div>
  )
}