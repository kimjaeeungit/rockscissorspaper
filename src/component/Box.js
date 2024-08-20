import React from 'react';

const Box = (props) => {
  console.log(props);
  let result;
  if (
    props.title === 'Computer' &&
    props.result !== 'tie' &&
    props.result !== ''
  ) {
    // 카드가 컴퓨터 카드고 결과가 비긴거 아니고 props.result에 값이 있으면
    result = props.result === 'win' ? 'lose' : 'win';
  } else {
    // 위의 경우가 아니라면 props로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
