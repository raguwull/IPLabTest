var score = 0;
function myFunction(num) {
  var leftImage = document.getElementById("left-img");
  var rightImage = document.getElementById("right-img");
  var scoreElement = document.getElementById("score");

  let x = Math.floor(Math.random() * 6 + 1);
  leftImage.src = `./images/${num}.png`;
  rightImage.src = `./images/${x}.png`;

  if (num === x) {
    score = 0;
    document.getElementById("score-element").innerHTML = "You Lose, Try Again!";
  } else {
    score += num;
    document.getElementById("score-element").innerHTML = `Score : ${score}`;
  }
}

function resetImages() {
  score = 0;
  var leftImage = document.getElementById("left-img");
  var rightImage = document.getElementById("right-img");
  document.getElementById("score-element").innerHTML = `Score : ${score}`;

  leftImage.src = "./images/batsman.png";
  rightImage.src = "./images/bowler.png";
}
