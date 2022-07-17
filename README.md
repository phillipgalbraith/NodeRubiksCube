# NodeRubiksCube
This application contains functions for rotating a Rubik's Cube's rows and columns

## Naming sides and moves

The frontside is that which is facing the solver.

The rightside is that which is on the solver's right-hand-side 

Rotating a column up is to rotate that column such that the column's frontside squares move to the topside.

Rotating a row left is to rotate that row such that the row's frontside squares move to the leftside

## Square Layout of a side

    upper row   blue square            blue square                blue square
    middle row  blue square            blue square                blue square
    lower row   blue square            blue square                blue square

                left column            middle colummn             right Column

 [  
    upper-left, upper-middle, upper-right, 
    middle-left, middle-middle, middle-right, 
    lower-left, lower-middle, lower-right
]

## Side Layout of starter Cube

                        top

        front   left    back    right

                        bottom

[frontside, leftside, backside, rightside, topside, bottomside]

## Logic of corresponding sides

The Top of each horizontal side must be aligned with all other upper rows.
... middle rows to middle rows, lower row to lower rows

Rotating the left column up moves the causes:
 the frontside upper-left square to be in a position we will call the top
 Therefore the square that was once the frontside upper-left is in the topside upper-left position
    "Topside-Frontside alignment"
    
    Therefore we use a reverse layout for the backside and bottomside
    "bottomside-backside alignment"

### Vertical Coordinate mirroring
    crossing into an unaligned side through column rotation produces 180 degree rotated coordinates

    column up :     topside upper-left -> backside lower-right
                    bottomside upper-left -> frontside lower-right
