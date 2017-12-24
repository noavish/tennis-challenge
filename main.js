//write your code here to make the tests pass
var TennisGame = function (name1, name2) {
  this.playerOneScore = 0;
  this.playerTwoScore = 0;

  this.playerOneScores = function() { 
    this.playerOneScore += 1;
  };

  this.playerTwoScores = function() { 
    this.playerTwoScore += 1;
  };

  this.isDeuce = function () {
     return (this.playerOneScore === this.playerTwoScore && this.playerOneScore >= 3);
  };

  this.playerWithHighestScore = function () {
    if (this.playerOneScore > this.playerTwoScore) {
      return name1;
    }
    return name2;
  };

  this.hasWinner = function () {
    var playerOneLeads = (this.playerOneScore - this.playerTwoScore) >= 2;
    var playerTwoLeads = (this.playerTwoScore - this.playerOneScore) >= 2;
    if ((playerOneLeads && this.playerOneScore > 3) || (playerTwoLeads && this.playerTwoScore > 3)) {
      return true;
    } else {
      return false;
    }
  };

  this.hasAdvantage = function () {
    var playerOneAdvantage = (this.playerOneScore - this.playerTwoScore) === 1;
    var playerTwoAdvantage = (this.playerTwoScore - this.playerOneScore) === 1;
    return ((playerOneAdvantage && this.playerTwoScore >= 3) || (playerTwoAdvantage && this.playerOneScore >= 3));
  };

  this.translateScore = function (score) {  
    if (score === 0) {
      return 'Love';
    } else if (score === 1) {
      return 'Fifteen';
    } else if (score === 2) {
      return 'Thirty';
    } else {
      return 'Forty';
    } 
  };

  this.getScore = function () {
    if (this.hasWinner()) {
      return this.playerWithHighestScore() + ' wins';
    } else if (this.hasAdvantage()) {
      return 'Advantage ' + this.playerWithHighestScore();
    } else if (this.isDeuce()) {
      return 'Deuce';
    } else if (this.playerOneScore === this.playerTwoScore) {
      return this.translateScore(this.playerOneScore) + ' all';
    } else {
      return this.translateScore(this.playerOneScore) + ', ' + this.translateScore(this.playerTwoScore);
    }
  };
};
