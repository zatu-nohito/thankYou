'use strict';


document.addEventListener('DOMContentLoaded', () => {
  const noneBar = (Math.random() * 100);
  const bar =(Math.floor(noneBar));
  console.log(`答えは${bar}です`)
  // document.querySelector("button1").addEventListener('click', () => {
    document.getElementById("hintButton").addEventListener('click', () => {
    let forHint = (Math.floor(Math.random() * 5));
    console.log(`forHintの値は${forHint}です`);
    if (forHint === 0) {
      if (bar>= 50) {
        document.getElementById('pp').textContent = 'その数は50以上です';
      } else {
        document.getElementById('pp').textContent = 'その数は49以下です';
      }
    } else if (forHint === 1) {
      if (bar%3 === 0) {
        document.getElementById('pp').textContent = 'その数は3nです';
      } else if (bar%3 === 1) {
        document.getElementById('pp').textContent = 'その数は3n+1です';
      } else {
        document.getElementById('pp').textContent = 'その数は3n+2です';
      }
    } else if (forHint === 2) {
      if (bar%15 === 0) {
        document.getElementById('pp').textContent = 'その数は3と5の倍数です';
      } else if (bar%5 === 0){
        document.getElementById('pp').textContent = 'その数は5の倍数です';
      } else if (bar%3 === 0){
        document.getElementById('pp').textContent = 'その数は3の倍数です';
      } else {
        document.getElementById('pp').textContent = 'その数は3の倍数でも5の倍数でもありません'
      }

    } else if (forHint === 3) {
      if (bar%6 === 1){
        document.getElementById('pp').textContent = 'その数は6n+1です'
      } else if (bar%6 ===5){
        document.getElementById('pp').textContent = 'その数は6n-1です'
      } else{
        document.getElementById('pp').textContent = 'その数は6n±1にはなりません'
      }
    } else if (forHint === 4) {
      if(bar%2 === 0){
        document.getElementById('pp').textContent = 'その数は偶数です';
      } else { 
        document.getElementById('pp').textContent = 'その数は奇数です';
      }
    } else {
      alert('バグが発生しました');
    }
  });


  document.getElementById("guessAnswer").addEventListener('click',()=>{
    let Guess = Number(prompt('ANSWER?'));

    if (Guess === bar){
      console.log("正解判定が下されました");
      document.getElementById('pp').textContent = '！正解！'
    } else{ 
      console.log("不正解判定が下されました");
      document.getElementById('pp').textContent = '不正解!またチャレンジしてね';
    }
  });
});
