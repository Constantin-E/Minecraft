const Minecraft = {}

Minecraft.container = $('<div id="container"></div>')
$('body').append(Minecraft.container)

Minecraft.start = () => {
  Minecraft.container.html('')
  Minecraft.container.css('background-image', 'url("../images/sky.jpeg")')

Minecraft.createDiv = (row, column) => {
  const div = $('<div></div>')
  div.addClass('box')
  div.data('x', row)
  div.data('y', column)
  $(Minecraft.container).append(div)
  return div
}

Minecraft.matrix = []

  for (let row = 0; row < 10; row++) {
    Minecraft.matrix[row] = []
    for (let column = 0; column < 10; column++) {
      Minecraft.matrix[row][column] = Minecraft.createDiv(row, column);
      if (row === 8 || row === 9) {
        Minecraft.matrix[row][column].addClass("dirt");
      }
      if (row === 7) {
        Minecraft.matrix[row][column].addClass("grass");
      }
      if (column === 7) {
        if (row === 6 || row === 5 || row === 4) {
          Minecraft.matrix[row][column].addClass("wood");
        }
      }
      if (column === 6 || column === 7 || column === 8) {
        if (row === 3 || row === 2) {
          Minecraft.matrix[row][column].addClass("leaves");
        }
      }
      if (row === 6 || row === 5) {
        if (column === 2 || column === 3 || column === 4) {
          Minecraft.matrix[row][column].addClass("stone");
        }
      }
    }
  }
}

Minecraft.startBtn = $('<button id="startBtn">Start</button>')
Minecraft.landingpageText = $('<div id="landingpageText"></div>')
Minecraft.container.append(Minecraft.landingpageText)
Minecraft.container.append(Minecraft.startBtn)
Minecraft.startBtn.click(Minecraft.start)

Minecraft.clickFunc = (e) => {
  console.log($(e.target).data('x'))
  console.log($(e.target).data('y'))
  Minecraft.clickedBox = e.target;
  modifyMatrix();
}
$('.box').click(Minecraft.clickFunc)

// Matrix Modification

Minecraft.userHolds = "";
Minecraft.lastSelectedElement = document.getElementById("wood-inventory");

$('#menu-container button').click(function (e) {
  Minecraft.userHolds = e.target.id;
  Minecraft.lastSelectedElement.classList.remove('selected-tool')
  e.target.classList.add("selected-tool");
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
        Minecraft.clickedBox.classList.add("stone");
        break;
      case "dirt-inventory":
        Minecraft.clickedBox.classList.add("dirt");
        break;
      case "grass-inventory":
        Minecraft.clickedBox.classList.add("grass");
        break;
      case "wood-inventory":
        Minecraft.clickedBox.classList.add("wood");
        break;
      case "leaves-inventory":
        Minecraft.clickedBox.classList.add("leaves");
        break;
    }
  }
  switch (Minecraft.userHolds) {
    case "shovel":
      Minecraft.clickedBox.classList.remove('dirt')
      Minecraft.clickedBox.classList.remove('grass')
      break;
    case "pickaxe":
      Minecraft.clickedBox.classList.remove('stone')
      break;
    case "axe":
      Minecraft.clickedBox.classList.remove('wood')
      Minecraft.clickedBox.classList.remove('leaves')
      // Minecraft.clickedBox.className = Minecraft.clickedBox.className.split(" leaves")[0];
      break;
  }
}
