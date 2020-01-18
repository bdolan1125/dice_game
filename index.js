let ranNum1 = Math.floor((Math.random() * 6)+1);
if (ranNum1 === 1){
  document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice1.png');
}
else if (ranNum1 === 2){
  document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice2.png');
}
else if (ranNum1 === 3){
  document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice3.png');
}
else if (ranNum1 === 4){
  document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice4.png');
}
else if (ranNum1 === 5){
  document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice5.png');
}else if (ranNum1 === 6){
  document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice6.png');
}
console.log(ranNum1);

let ranNum2 = Math.floor((Math.random() * 6)+1);
if (ranNum2 === 1){
  document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice1.png');
}
else if (ranNum2 === 2){
  document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice2.png');
}
else if (ranNum2 === 3){
  document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice3.png');
}
else if (ranNum2 === 4){
  document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice4.png');
}
else if (ranNum2 === 5){
  document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice5.png');
}
else if (ranNum2 === 6){
  document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice6.png');
}
console.log(ranNum2);

let win = (ranNum1 - ranNum2);
if(win > 0){
  document.querySelector('h1').innerHTML='Player 1 Wins';
}
else if(win < 0){
  document.querySelector('h1').innerHTML='Player 2 Wins';
}
else if(win === 0){
  // eslint-disable-next-line indent
  document.querySelector('h1').innerHTML='It\'s a draw!';
}





