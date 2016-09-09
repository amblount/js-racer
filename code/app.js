window.onload = function(){
  var player1 = document.getElementById('player1');
  var player2 = document.getElementById('player2');

  // Move = add 10em to the position element to each position

  player1.addEventListener("click", function(){
    movePlayer1();
  });
  player2.addEventListener("click", function(){
    movePlayer2();
  });

  function movePlayer1(){
    player1.style.left += 10%;
  };

  function movePlayer2(){
    player2.style.left += 10%;
  };

};
