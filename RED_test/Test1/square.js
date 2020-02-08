document.addEventListener('DOMContentLoaded', function() {

  var squareWrapper = document.getElementById('square-wrapper');
  var squares = [];
  var targetValue;
  var length;
  var node;
  var textNode;

  function removeAll() {
    var i = 0;
    while (i < length) {
      squareWrapper.firstChild.removeEventListener('click', squares[i]);
      squareWrapper.removeChild(squareWrapper.firstChild);
      i++;
    }
    squares = [];
  }

  function appendNode() {
    function countCLick() {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      this.setAttribute('style', 'background-color: #' + randomColor);
      this.innerText = 'Clicked ' + (Number(this.innerText.split(/\s/)[1]) + 1) + ' times';
    }

    node = document.createElement('div');
    node.addEventListener('click', countCLick);
    textNode = document.createTextNode('Clicked 0 times');
    node.appendChild(textNode);
    node.setAttribute('class', 'square');
    squares.push(countCLick);
    squareWrapper.appendChild(node);
  }

  function removeNode() {
    for (var i = length; i > targetValue; i--) {
      squareWrapper.lastChild.removeEventListener('click', squares[i - 1]);
      squareWrapper.removeChild(squareWrapper.lastChild);
    }
    squares.splice(targetValue, length - targetValue);
  }

  document.getElementById('number-square').addEventListener('input', function(e) {
    targetValue = e.target.value;
    length = squares.length;
    if (isNaN(targetValue) || !targetValue) {
      removeAll();
    } else {
      if (Number(targetValue) > length) {
        for (var i = length; i < targetValue; i++) {
          appendNode();
        }
      } else {
        removeNode();
      }
    }
  });
}, false);