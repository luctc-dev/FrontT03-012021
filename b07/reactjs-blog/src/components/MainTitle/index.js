import './main-title.css';
import cls from 'classnames';
import Button from '../common/Button';

MainTitle.defaultProps = {
  btnProps: {
    btnText: '',
    type: 'link'
  }
}

export default function MainTitle({ 
  children,
  btnProps: {
    btnText,
    ...restBtnProps
  }
}) {

  const classes = cls('main-title spacing', {
    'd-flex tcl-jc-between tcl-ais-center': btnText
  })

  return (
    <div className={classes}>
      <h2>{ children }</h2>
      { btnText && <Button {...restBtnProps}>{ btnText }</Button> }
    </div>
  )
}