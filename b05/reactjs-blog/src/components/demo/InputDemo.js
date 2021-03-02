import Input from "../common/Input";

export default function InputDemo() {
  
  return (
    <div className="tcl-container" style={{ padding: '100px 0' }}>
      <div className="tcl-row">
        <div className="tcl-col-4">
          <Input placeholder="Nhập từ khoá tìm kiếm" type="search" />
          <div style={{ marginBottom: '20px' }}></div>
          <Input placeholder="Nhập Username" />
          <Input placeholder="Nhập Username" labelText="Tên đăng nhập" />
          <Input placeholder="Nhập Password" labelText="Mật khẩu" type="password" />
        </div>
      </div>
    </div>
  )
}