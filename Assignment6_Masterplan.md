#Minecraft

create site layout (playing field & menu)
- Matrix
    - ech matrix value represents a div with (or without) a specific background-image, which is the block image
    - elements are integrated to matrix in form of background images
    - create default world (very simple, since we will try to add the ninja that automatically creates a random world)
- Menu
    - Tools
        - buttons with images of tools
        - clicked button should be marked with color frame
    - Inventory
        - Button with block image + counter that states amount of available block of this type for every block
- Start page
    - play now button
    - tutorial button
        - tutorial window: div with tutorial that appears when tutorial button is clicked
        - hide tutorial button: button inside tutorial window that lets window disappear on click

- Functions during game (each bullet represents a function/ set of functions):
    - select tool by clicking on the respective tool button/ inventory button in menu
        (this could be done by having a global variable named "userHolds". If a tool is selected, this will change e.g. to userHolds=saw. Alternatively, in order to add a block from the inventory to the matrix, it will be userHolds=stone). This way we can always check what should happen if a field of the matrix is clicked (add block/ pick block / decide which block to add/pick and if picked, check validity of tool)
    - modifyMatrix function, with which to:
        - pick block 
            - activated by clicking on matrix field. 
            - only IF userHolds === correct respective tool, a block can be picked
            - respective inventory +=1
        - add block
            - activated by clicking on matrix field
            - adds a block from the type of userHolds

Optional:
- add character which can move and fly (Harry potter gif)
    - can only be in a matrix field with no background-image
    - moves to next field in matrix by clicking arrow buttons
    - extra optional: would be cool if only those blocks can be added/picked, which potter is next to/points to.
- add random world creator
    - order of random element creation
        - soil
        - grass
        - wood
        - leaves
    - conditions: 
        - lowest row is always soil
        - grass must come on top of soil
        - wood can only come on top of grass or wood
        - leaves can only come on top of or next to leaves or wood


Responsibilities:
- Initial Matrix with explanation to rest of team: Micah
- Creation of Menu: Ilan
- MofifyMatrix function: Constantin
- Optional: TBD
    