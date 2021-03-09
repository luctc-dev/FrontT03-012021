import './input.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import IconSearch from '../IconSearch';

export default function Input({
  type = 'text', // text, password, search
  labelText = '',
  ...restProps
}) {
  const [localType, setLocalType] = useState('');

  useEffect(() => {
    setLocalType(type);
  }, [type])

  function handleTogglePassword() {
    if (type !== 'password') {
      return
    }

    if (localType === 'password') {
      setLocalType('text');
    } else {
      setLocalType('password');
    }
  }

  const classesIcon = classNames('toggle-password', {
    'ion-eye': localType === 'password',
    'ion-eye-disabled': localType === 'text'
  })

  if (type === 'search') {
    return (
      <div className="input-search-wrapper">
        <IconSearch />
        <input className="input-search" {...restProps} />
      </div>
    )
  }

  return (
    <div className="form-control">
      { labelText && <label>{ labelText }</label> }
      { type === 'password' && <i className={classesIcon} onClick={handleTogglePassword} /> }
      <input type={localType} {...restProps} />
    </div>
  )
}