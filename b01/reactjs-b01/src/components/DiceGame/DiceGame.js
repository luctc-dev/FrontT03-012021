import './DiceGame.css';
import Dice from './Dice';
import Button from './Button';
import DiceGameLogo from './DiceGameLogo';
import React from 'react';
// import ImageGiDo from '../../images/newbackground@2x.png';

// Trong CSS phải trỏ URL của hình ảnh theo dạng module -> ... -> url khác đã xử lý bởi webpack
// Trong Component có 2 cách trỏ đường dẫn hình ảnh 
//    - Cách 1: Trỏ thẳng tới folder public
//    - Cách 2: Dùng image cũng theo dạng module -> Trong file Js phải import vào

// console.log(React.useState);

// Desctrucring trong ES6 -> Phân rã Object ra thành nhiều biến


function randomDice() {
  return Math.floor(Math.random() * 6 + 1)
}

function DiceGame() {
  // useState là một hàm 
  // Chỉ tồn tại trong phiên bản mới của React (16.8.x)
  // Coi video ở nhà -> Đang là phiên bản cũ
  // Cái cũ xây dựng component theo class (Theo hướng đối tượng)
  // Trả về cho mình một array 
  // Phần tử đầu tiên chứa dữ liệu của mình
  // Phần tử thứ hai chứa hàm dùng để thay đổi lại State

  let [diceNum1, setDiceNum1] = React.useState(1);
  let [diceNum2, setDiceNum2] = React.useState(4);

  function handleXoayXucSac(evt) {
    let newDiceNum1 = randomDice();
    let newDiceNum2 = randomDice();

    setDiceNum1(newDiceNum1);
    setDiceNum2(newDiceNum2);
  }

  return (
    <div className="container">
      <DiceGameLogo></DiceGameLogo>
      <div className="list-dice">
        <Dice diceNum={diceNum1}></Dice>
        <Dice diceNum={diceNum2}></Dice>
      </div>
      <Button 
        handleOnClick={handleXoayXucSac}
      ></Button>
    </div>
  )
}

export default DiceGame;