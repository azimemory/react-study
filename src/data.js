//선언과 함께 내보내기
//import {printScore} from './data.js'
export function printScore(score){
    console.dir(score);
}

var name = 'kim';
var score = 100;

//named export : 미리 선언된 변수나 함수, 클래스를 내보내기 할 때 사용
//import {name,score} from './data.js'
export {name,score}

//default export : 
//보통 함수나 클래스가 하나만 선언되어있는 모듈을 내보내기 할 때 주로 사용하는 문법
//하나의 파일에서 한번만 사용 가능하다. 변수를 내보낼 수는 없다.
//외부에서 import할 때 중괄호 없이 모듈을 가져올 수 있다.
//import data from './data.js'
export default  
[
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
    img:"https://codingapple1.github.io/shop/shoes1.jpg"
  },

  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
    img:"https://codingapple1.github.io/shop/shoes2.jpg"
  },

  {
    id: 2,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000,
    img:"https://codingapple1.github.io/shop/shoes3.jpg"
  },
];
