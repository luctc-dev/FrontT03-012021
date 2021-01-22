
// Props do bên ngoài truyền vào -> Sẽ được React chuyển thành tham số gọi vào hàm

function Dice(props) {

  const diceNum = props.diceNum;
  const srcImg = '/images/dice' + diceNum + '@2x.png';

  return (
    <img src={srcImg} alt="" />
  )
}

export default Dice;