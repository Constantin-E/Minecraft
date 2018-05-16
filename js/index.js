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
