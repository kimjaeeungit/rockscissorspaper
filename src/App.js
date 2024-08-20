import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승페 결과에 따라 테두리 색이 바뀐다. (이기면 초록 지면 빨강 비기면 검은색)

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png',
  },
  paper: {
    name: 'Paper',
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png',
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  // 버튼 온클릭 함수
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    // 컴퓨터의 랜던 값 함수
    setComputerSelect(computerChoice);
    // 결과값 함수
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log('user', user, 'computer', computer);

    // user == computer tie
    // user == rock, computer == scissors user win
    // user == rock, computer == paper user lose
    // user == scissors, computer == paper user win
    // user == scissors, computer == rock  user lose
    // user == paper, computer == rock user win
    // user == paper, computer == scissors user lose

    if (user.name == computer.name) {
      return 'tie';
    } else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? 'win' : 'lose';
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? 'win' : 'lose';
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? 'win' : 'lose';
  };

  // 컴퓨터 선택 랜덤값 받기
  const randomChoice = () => {
    // 객체의 키 값 가져와서 배열로 만들기
    let itemArray = Object.keys(choice);
    // 0 부터 1 사이의 랜덤한 값을 보여준다.
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
