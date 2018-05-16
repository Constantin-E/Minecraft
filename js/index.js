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

Game.display = function () {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
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
    Minecraft.matrix[row][column] = Minecraft.createDiv(row, column);
    if (row === 7 || row === 8 || row === 9){
      Minecraft.matrix[row][column].addClass("dirt");
    }
  }
}

Minecraft.clickFunc = (e) => {
  console.log(e.target)
  Minecraft.clickedBox = e.target;
  modifyMatrix();
}
$('.box').click(Minecraft.clickFunc)

// Matrix Modification

Minecraft.userHolds = "";
Minecraft.lastSelectedElement = document.getElementById("wood-inventory");

$('#menu-container button').click(function (e) {
  Minecraft.userHolds = e.target.id;
  Minecraft.lastSelectedElement.className = Minecraft.lastSelectedElement.className.split(" selected-tool")[0];
  e.target.className += " selected-tool";
  Minecraft.lastSelectedElement = e.target;
});

function modifyMatrix(e) {
  let boxIsEmpty = false;
  Minecraft.clickedBox.classList.forEach(element => {
    boxIsEmpty = (element !== "stone" && element !== "dirt" && element !== "grass" && element !== "wood" && element !== "leaves");
  });
  if (boxIsEmpty) {
    switch (Minecraft.userHolds) {
      case "stone-inventory":
        Minecraft.clickedBox.className += " stone";
        break;
      case "dirt-inventory":
        Minecraft.clickedBox.className += " dirt";
        break;
      case "grass-inventory":
        Minecraft.clickedBox.className += " grass";
        break;
      case "wood-inventory":
        Minecraft.clickedBox.className += " wood";
        break;
      case "leaves-inventory":
        Minecraft.clickedBox.className += " leaves";
        break;
    }
  }
  switch (Minecraft.userHolds) {
    case "shovel":
      Minecraft.clickedBox.className = Minecraft.clickedBox.className.split(" dirt")[0];
      Minecraft.clickedBox.className = Minecraft.clickedBox.className.split(" grass")[0];
      break;
    case "pickaxe":
      Minecraft.clickedBox.className = Minecraft.clickedBox.className.split(" stone")[0];
      break;
    case "axe":
      Minecraft.clickedBox.className = Minecraft.clickedBox.className.split(" wood")[0];
      Minecraft.clickedBox.className = Minecraft.clickedBox.className.split(" leaves")[0];
      break;
  }
}
