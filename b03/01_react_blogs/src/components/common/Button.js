// Button của mình phải giống hoàn toàn button thực tế
// Nó cập nhật thêm nhiều tính năng mới
/*
  <button>Click Me</button>

  <Button>Click Me</Button>
*/

/*
  <button className="btn">Click Me</button>

  <Button className="btn">Click Me</Button>
*/

/*
  <button className="btn" onClick={() => { ??? }}>Click Me</button>

  <Button className="btn" onClick={() => { ??? }}>Click Me</Button>
*/

/*
  // Cập nhật thêm tính năng

  Input
  <Button type="primary">Primary</Button>

  Output
  <button type="button" class="btn btn-primary">Primary</button>
*/


// Linh hồn của một component là props
// Linh hồn của hàm chính là tham số truyền vào
import Loading from './Loading';

function Button({ 
  children,
  type = 'primary',
  className = '',
  htmlType,
  isLoading, 

  ...restProps
}) {
  const classes = `btn btn-${type} ${className}`.trim();
  const mapColorFromType = {
    primary: '#fff',
    light: '#333',
  }
  // Cach 1
  // const colorLoading = (mapColorFromType[type] === undefined) ? '#fff' : mapColorFromType[type];
  // const colorLoading = !mapColorFromType[type] ? '#fff' : mapColorFromType[type];
  
  // Cach 2
  // let colorLoading = '#fff';

  // if (mapColorFromType[type] !== undefined) {
  //   colorLoading = mapColorFromType[type];
  // }

  // Cach 2'
  // let colorLoading = '#fff';

  // if (mapColorFromType[type]) {
  //   colorLoading = mapColorFromType[type];
  // }

  // Cach 3
  const colorLoading = mapColorFromType[type] || '#fff';
  
  return (
    <button 
      className={classes} 
      type={htmlType} 
      {...restProps}
    >
     {/* { isLoading === true ? <Loading color={colorLoading} /> : null } {children} */}
     { isLoading && <Loading color={colorLoading} /> } {children}
    </button>
  )
}

export default Button;

// Toán tử || -> Chỉ cần thấy một thằng là truthy thì trả về ngay lập tức
// Toán tử && -> Chỉ cần thấy ít nhất một thằng là falsy thì trả về ngay lập tức