import Input from '../common/Input';

export default function HeaderSearch() {
  return (
    <div className="tcl-col-4">
      <form action="/search.html" method="get">
        <Input placeholder="Nhập từ khoá tìm kiếm" type="search" />
      </form>
    </div>
  )
}