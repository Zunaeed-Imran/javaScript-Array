function highestrunScore(playerInfo) {
  var highestScorer = playerInfo[0][0];
  var highestScore = playerInfo[0][1];

  for (let i = 1; i < playerInfo.length; i++){
    if (highestScore < playerInfo[i][1]) {
      highestScore = playerInfo[i][1];
      highestScorer = playerInfo[i][0];
    }
  }
  return highestScorer;
}
var playerInfo = [
  ["anisul", 654],
  ["balam", 6253],
  ["stark", 85],
  ["tony", 77],
  ["clark", 8],
];
var name = highestrunScore(playerInfo);
document.write(name);


// there is row index change but colum index always  the same [1];