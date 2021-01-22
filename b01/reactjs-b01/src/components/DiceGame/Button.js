
function Button(props) {
  // props.handleOnClick

  const handleClick = (evt) => {
    props.handleOnClick(evt);
  }

  return (
    <button 
      className="roll-dice"
      onClick={handleClick}
    >Roll Dice</button>
  )
}

export default Button;