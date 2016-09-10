window.onload = function(){
  var player1 = document.getElementById('player1');
  var player2 = document.getElementById('player2');
  var counta = 0;
  var countb = 0;

  //keycode 75 = k
  //keycode 76 = l

  document.addEventListener("keydown",test, false)

  function test(event){
    if (event.keyCode == 75){
      console.log(player1.style);
      // figure out how to get the left position style to work
      counta += 10
      player1.style.left = counta.toString() + "px";
    };

    if (event.keyCode == 76){
      console.log(player2.style);
      // figure out how to get the left position style to work
      countb += 10
      player2.style.left = countb.toString() + "px";
    };
  };

  // window.addEventListener("keyup", function(event) {
  //   if (event.keyCode == 75)
  //     document.body.style.background = "";
  // });
  //
  // // Move = add 10em to the position element to each position
  //
  // player1.addEventListener("click", function(){
  //   movePlayer1();
  // });
  // player2.addEventListener("click", function(){
  //   movePlayer2();
  // });
  //
  // function movePlayer1(){
  //   player1.style.left += 10;
  // };
  //
  // function movePlayer2(){
  //   player2.style.left += 10;
  // };

};
