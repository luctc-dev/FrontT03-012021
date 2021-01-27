
// Nếu counter bên ngoài là số chẵn thì cho hiển thị

import { useEffect } from "react";

// Nếu counter là số lẻ thì ẩn button đi
function Button() {

  useEffect(() => {
    console.log('Component Button đựoc sinh ra');

    // Trong tham số đầu tiên của useEffect 
    // Mình sẽ return về một function
    return () => {
      console.log('Component bị remove khỏi cấu trúc DOM, HTML')
    }
  }, [])

  return (
    <button>Hello World</button>
  )
}

export default Button;

// /////// React 
// const callback = () => {
//   console.log('Component Button đựoc sinh ra');

//   // Trong tham số đầu tiên của useEffect 
//   // Mình sẽ return về một function
//   function seDuocGoiKhiComponentBiRemoveKhoiCauTrucDOM() {
//     console.log('Component bị remove khỏi cấu trúc DOM, HTML')
//   }

//   return seDuocGoiKhiComponentBiRemoveKhoiCauTrucDOM
// }

// // Khi render xong, hàm component Button return về xong
// const hamDuocReturnTuCallback = callback()
// // Tức là 
// const hamDuocReturnTuCallback = function seDuocGoiKhiComponentBiRemoveKhoiCauTrucDOM() {
//   console.log('Component bị remove khỏi cấu trúc DOM, HTML')
// }

// // Khi component remove 
// hamDuocReturnTuCallback(); -> seDuocGoiKhiComponentBiRemoveKhoiCauTrucDOM();