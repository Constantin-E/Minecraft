const Minecraft = {}



Minecraft.main = $('<div id="main"></div>')
$('#container').append(Minecraft.main)

$('#menu').hide()

Minecraft.createDiv = (row, column) => {
  const div = $('<div></div>')
  div.addClass('box')
  div.data('x', row)
  div.data('y', column)
  $(Minecraft.main).append(div)
  return div
}
Minecraft.start = () => {
  Minecraft.main.html('')
  Minecraft.main.css('background-image', 'url("../images/sky.jpeg")')
  $('#menu').show()

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
  Minecraft.clickFunc = (e) => {
    console.log($(e.target).data('x'))
    console.log($(e.target).data('y'))
    Minecraft.clickedBox = e.target;
    modifyMatrix();
  }
  $('.box').click(Minecraft.clickFunc)
}

Minecraft.tutorial = () => {
  Minecraft.tutorialBtn.hide()
  Minecraft.tutorialText.html('<p>Welcome to Minecraft! In the world of Minecraft you have several options to allow you to build and create whatever your heart desires. In our simple version of Minecraft you have three tools and five terrain types. The five terrain types are as follows: Grass, Dirt, Stone, Wood and Leaves. You can place these blocks wherever you would like. You can also use the tools to remove these terrain types. You have a shovel, for removing grass and dirt, an axe, for removing wood and leaves, and a pickaxe, for removing stone. To place a block, click, in the inventory, on the type you wish to use, and then click anywhere on the map to place it. To remove a block, click, in the inventory, on the tool you wish to use, then click on the block you wish to remove. The rest is up to you, have fun!</p>')
}


Minecraft.startBtn = $('<button id="startBtn">Start</button>')
Minecraft.tutorialBtn = $('<button id="tutorialBtn">Tutorial</button>')
Minecraft.landingpageText = $('<div id="landingpageText"></div>')
Minecraft.tutorialText = $('<div id="tutorialText"></div>')
Minecraft.main.append(Minecraft.landingpageText)
Minecraft.main.append(Minecraft.startBtn)
Minecraft.main.append(Minecraft.tutorialBtn)
Minecraft.main.append(Minecraft.tutorialText)
Minecraft.startBtn.click(Minecraft.start)
Minecraft.tutorialBtn.click(Minecraft.tutorial)

// Matrix Modification

Minecraft.userHolds = "";
Minecraft.lastSelectedElement = document.getElementById("wood-inventory");

$('#menu button').click(function (e) {
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
