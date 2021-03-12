import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../common/Input';

export default function HeaderSearch() {
  const history = useHistory();
  const [searchStr, setSearchStr] = useState('');
  
  function handleSubmit(evt) {
    evt.preventDefault();

    if (searchStr) {
      history.push('/search?q=' + searchStr);
    }
  }

  function handleChange(evt) {
    setSearchStr(evt.target.value);
  }

  return (
    <div className="tcl-col-4">
      <form onSubmit={handleSubmit}>
        <Input placeholder="Nhập từ khoá tìm kiếm" type="search" value={searchStr} onChange={handleChange} />
      </form>
    </div>
  )
}