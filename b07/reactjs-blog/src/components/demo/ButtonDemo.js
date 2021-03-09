import Button from '../common/Button';

export default function ButtonDemo() {

  return (
    <div style={{ padding: '100px 0' }}>
      <Button className="class-custom">Button Default</Button> 
      <Button variant="category">Button Category</Button> 
      <Button variant="primary">Button Primary</Button> 

      <Button className="class-custom" size="large">Button Default</Button> 
      <Button variant="category" size="large">Button Category</Button> 
      <Button variant="primary" size="large">Button Primary</Button> 
      <br />
      <Button className="class-custom" size="large" loading={true}>Button Default</Button> 
      <Button variant="category" size="large" loading={true}>Button Category</Button> 
      <Button variant="primary" size="large" loading={true}>Button Primary</Button> 
      <br />
      <Button className="class-custom" size="large" loading={true} loadingPos="right">Button Default</Button> 
      <Button variant="category" size="large" loading={true} loadingPos="right">Button Category</Button> 
      <Button variant="primary" size="large" loading={true} loadingPos="right">Button Primary</Button> 

      <Button type="link" href="/" title="Tieu de">Button Link</Button> 
    </div>
  )
}
