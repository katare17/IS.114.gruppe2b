###################################### WELCOME ###########################################
include color

# Vi ønsker at pinnene skal ha samme farge som en snusboks
snusboks = color(74, 65, 42, 1)

################################### DATA DEFINITION ######################################


# Data om ringene
data Ring:
    ring(drawing :: Image, value :: Number, name :: String, ref pos :: String)
end

#################################### DEFINITIONS #########################################


# Definisjon av variablene som inneholder informasjon om de ulike ringene
r1 = ring(circle(30, "solid", color(255, 140,0,1)), 1, "r1", "l")
r2 = ring(circle(25, "solid", color(0, 0, 255, 1)), 2, "r2", "l")
r3 = ring(circle(20, "solid", color(0, 255, 0, 1)), 3, "r3", "l")
r4 = ring(circle(15, "solid", color(255, 0, 0, 1)), 4, "r4", "l")

# Pinnene
stick = ring(circle(5, "solid", snusboks), 0, "stick", "l")


# Posisjoner og størrelser
sceneWidth = 200
sceneHeight = 100
left = sceneWidth / 5
middle = sceneWidth / 2
right = (sceneWidth * 4) / 5
heightPosition = sceneHeight / 2

###################################### TABELL ############################################

# Initiell tilstanden til brettet ### TABELL ###
var boardState = table: leftStick :: List, middleStick :: List, rightStick :: List
  row: [list: r4, r3, r2, r1], empty, empty
end

Rules = table: How-To :: String, CodeNames :: String
  row: 
    "To play this game, you need to write some code.", 
    "Orange disc = r1"
  row: 
    "To move a disc, you must write:", 
    "Blue disc = r2"
  row: 
    "move([discName], [positionName])", 
    "Green disc = r3"
  row: 
    "For example, if you want to move the red disc,",
    "Red disc = r4"
  row:
    "to the right stick. You should write:",
    "Left stick = left"
  row: 
    "move(r4, right)",
    "Middle stick = middle"
  row: 
    "You cannot place a disc on top of a smaller disc",
    "Right stick = right"
 
end

Rules

#boardState

#r1!{pos: "r"}


#################################### POSITIONS ###########################################
var positions = [list: left, left, left, left]

#boardState := table: leftStick :: List, middleStick :: List, rightStick :: List
#  row: [list: r1, r2, r3], [list: r4], empty
#end

################################### DRAW BOARD ###########################################
fun draw-board():
  leftStickColumn = select leftStick from boardState end
  middleStickColumn = select middleStick from boardState end
  rightStickColumn = select rightStick from boardState end
  
  leftStick = leftStickColumn.row-n(0)["leftStick"]
  middleStick = middleStickColumn.row-n(0)["middleStick"]
  rightStick = rightStickColumn.row-n(0)["rightStick"]
  
#Felles for alle bilder
  put-image(stick.drawing, right, heightPosition,
    put-image(stick.drawing, middle, heightPosition,
  put-image(stick.drawing, left, heightPosition,
        
#Spesifikt for state
        put-image(r4.drawing, 
          positions.get(0), heightPosition,
          put-image(r3.drawing, 
            positions.get(1), heightPosition,
            put-image(r2.drawing, 
              positions.get(2), heightPosition,
              put-image(r1.drawing, 
                positions.get(3), heightPosition,
                
#Felles for alle bilder
        put-image(rectangle(sceneWidth, sceneHeight, "solid", "white"), (sceneWidth / 2), (sceneHeight / 2),
                  empty-scene(sceneWidth, sceneHeight)))))))))
end

######################################### MOVE ##########################################
fun move(chosenRing, newPosition):
  isLegal = true 
  if chosenRing.name == "r4" block:
    positions := positions.set(0, newPosition)
    draw-board()
  else: 
    if chosenRing.name == "r3" block:
    positions := positions.set(1, newPosition)
    draw-board()
    else: 
      if chosenRing.name == "r2" block:
        positions := positions.set(2, newPosition)
        draw-board()
      else: 
        if chosenRing.name == "r1" block:
          positions := positions.set(3, newPosition)
          draw-board()
        else:
          "Get your act together"
        end
      end
    end
  end
end
######################################### MOVE ##########################################
draw-board()