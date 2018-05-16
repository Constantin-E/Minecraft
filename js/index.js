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
  Minecraft.clickedBox = e.target;
  modifyMatrix();
}
$('.box').click(Minecraft.clickFunc)

// Matrix Modification

Minecraft.userHolds = "dirt-inventory";

function modifyMatrix(e) {
  let currentClasses = Minecraft.clickedBox.className
  // only if the box is currently empty:
  switch (Minecraft.userHolds) {
    case "stone-inventory":
      Minecraft.clickedBox.className = currentClasses + " stone";
      break;
    case "dirt-inventory":
      Minecraft.clickedBox.className = currentClasses + " dirt";
      break;
    case "grass-inventory":
      Minecraft.clickedBox.className = currentClasses + " grass";
      break;
    case "wood-inventory":
      Minecraft.clickedBox.className = currentClasses + " wood";
      break;
    case "leaves-inventory":
      Minecraft.clickedBox.className = currentClasses + " leaves";
      break;
    case "shovel":
      Minecraft.clickedBox.className 
    default:
      Minecraft.clickedBox.className = currentClasses;
  }

}
