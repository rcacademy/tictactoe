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
    if(square.hasClass('fa-times') || square.hasClass('fa-circle-o')) {
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

    if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
      return true;
    } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
      return true;
    } else if($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true;
    } else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
      return true;
    } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
      return true;
    } else if($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true;
    } else if($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true;
    } else if($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
      return true;
    } else {
      return false;
    }

  }

});
