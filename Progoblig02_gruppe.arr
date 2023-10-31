include color


# Vi ønsker at pinnene skal ha samme farge som en snusboks
snusboks = color(74, 65, 42, 1)

# Data om ringene
data Ring:
    ring(drawing :: Image, value :: Number, name :: String, ref pos :: String)
end

# Definisjon av variablene som inneholder informasjon om de ulike ringene
r1 = ring(circle(30, "solid", color(255, 140,0,1)), 1, "r1", "l")
r2 = ring(circle(25, "solid", color(0, 0, 255, 1)), 2, "r2", "l")
r3 = ring(circle(20, "solid", color(0, 255, 0, 1)), 3, "r3", "l")
r4 = ring(circle(15, "solid", color(255, 0, 0, 1)), 4, "r4", "l")

# Pinnene
stick = ring(circle(5, "solid", snusboks), 0, "stick", "l")

plasseRing = ring(circle(30, "solid", "transparent"), -1, "plass", "l")

# Posisjoner og størrelser
sceneWidth = 200
sceneHeight = 100
leftPosition = sceneWidth / 5
middlePosition = sceneWidth / 2
rightPosition = (sceneWidth * 4) / 5
heightPosition = sceneHeight / 2

 
# Initiell tilstanden til brettet
var boardState = table: leftStick :: List, middleStick :: List, rightStick :: List
  row: [list: r4, r3, r2, r1], [list: plasseRing, plasseRing, plasseRing, plasseRing], [list: plasseRing, plasseRing, plasseRing, plasseRing]
end

#boardState

r1!{pos: "r"}
boardState

#boardState := table: leftStick :: List, middleStick :: List, rightStick :: List
#  row: [list: r1, r2, r3], [list: r4], empty
#end

fun draw-board():
  leftStickColumn = select leftStick from boardState end
  middleStickColumn = select middleStick from boardState end
  rightStickColumn = select rightStick from boardState end
  
  leftStick = leftStickColumn.row-n(0)["leftStick"]
  middleStick = middleStickColumn.row-n(0)["middleStick"]
  rightStick = rightStickColumn.row-n(0)["rightStick"]
  
  #Q: Spør om det er mulig å gjøre dette på en enklere måte enn å hardkode inn 15 put-images.
  put-image(stick.drawing, leftPosition, heightPosition,
    put-image(leftStick.get(0).drawing, 
    leftPosition, heightPosition,
    put-image(leftStick.get(1).drawing, 
      leftPosition, heightPosition, 
        empty-scene(sceneWidth, sceneHeight))))
  
end