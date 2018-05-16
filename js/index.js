var Game = {};

var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

// Elements : 
// O is the sky
// 1 is the ground
// 2 is the trunk
// 3 is the leafs
// 4 is the rocks
// 5 is the grass
// 6 is the cloud


Game.start = function () {
    Game.display();
    
}

Game.display = function() {
    for (var i=0; i<matrix.length; i++) {
        for (var j=0; j<matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                var ground = document.createElement('div');
                $('#container').append($(ground));
                $(ground).addClass('ground');
            }
            else if (matrix[i][j] == 2) {
                var trunk = document.createElement('div');
                $('#container').append($(trunk));
                $(trunk).addClass('trunk');
            }
            else if (matrix[i][j] == 3) {
                var leaf = document.createElement('div');
                $('#container').append($(leaf));
                $(leaf).addClass('leaf');
            }
            else if (matrix[i][j] == 4) {
                var rock = document.createElement('div');
                $('#container').append($(rock));
                $(rock).addClass('rock');
            }
            else if (matrix[i][j] == 5) {
                var grass = document.createElement('div');
                $('#container').append($(grass));
                $(grass).addClass('grass');
            }
            else if (matrix[i][j] == 6) {
                var cloud = document.createElement('div');
                $('#container').append($(cloud));
                $(cloud).addClass('cloud');
            }
        }
    }
}




// ORIGINAL VERSION

const Minecraft = {}

Minecraft.container = $('<div id="container"></div>')
$('body').append(Minecraft.container)

Minecraft.createDiv = (row, column) => {
  const div = $('<div></div>')
  div.addClass('box')
  div.addClass('row' + row)
  div.addClass('column' + column)
  $(Minecraft.container).append(div)
  return div
}

Minecraft.matrix = []

for (let row = 0; row < 10; row++) {
  Minecraft.matrix[row] = []
  for (let column = 0; column < 10; column++) {
    Minecraft.matrix[row][column] = Minecraft.createDiv(row, column)
  }
}

Minecraft.clickFunc = (e) => {
  console.log(e.target)
}
$('.box').click(Minecraft.clickFunc)
