$(document).ready(function(){

  var player = 1;

  $('.square').click(function(){
    var squareClicked = $(this);
    var state = getState(squareClicked);
    if(!state) {
      var symbol = getPlayerSymbol(player);
      squareClicked.addClass(symbol);
      if(checkIfPlayerWon(symbol)) {
        alert('Player ' + player + ' won!');
      } else {
        if(player === 1) {
          player = 2
        } else {
          player = 1
        }
      }
    } else {
      alert('This square has already been used!');
    }
  })

  function getState(square) {
    if(square.hasClass('ex') || square.hasClass('oh')) {
      return true;;
    } else {
      return false;
    }
  }

  function getPlayerSymbol(player) {
    if(player == 1) {
      return 'fa fa-times';
    } else {
      return 'fa fa-circle-o';
    }
  }

  function checkIfPlayerWon(symbol) {

    if($('#board').find('.sq1').hasClass(symbol) && $('#board').find('.sq2').hasClass(symbol) && $('#board').find('.sq3').hasClass(symbol)) {
      return true;
    } else if($('#board').find('.sq4').hasClass(symbol) && $('#board').find('.sq5').hasClass(symbol) && $('#board').find('.sq6').hasClass(symbol)) {
      return true;
    } else if($('#board').find('.sq7').hasClass(symbol) && $('#board').find('.sq8').hasClass(symbol) && $('#board').find('.sq9').hasClass(symbol)) {
      return true;
    } else if($('#board').find('.sq1').hasClass(symbol) && $('#board').find('.sq4').hasClass(symbol) && $('#board').find('.sq7').hasClass(symbol)) {
      return true;
    } else if($('#board').find('.sq2').hasClass(symbol) && $('#board').find('.sq5').hasClass(symbol) && $('#board').find('.sq8').hasClass(symbol)) {
      return true;
    } else if($('#board').find('.sq3').hasClass(symbol) && $('#board').find('.sq6').hasClass(symbol) && $('#board').find('.sq9').hasClass(symbol)) {
      return true;
    } else if($('#board').find('.sq1').hasClass(symbol) && $('#board').find('.sq5').hasClass(symbol) && $('#board').find('.sq9').hasClass(symbol)) {
      return true;
    } else if($('#board').find('.sq3').hasClass(symbol) && $('#board').find('.sq5').hasClass(symbol) && $('#board').find('.sq7').hasClass(symbol)) {
      return true;
    }

    return false;
  }

});
