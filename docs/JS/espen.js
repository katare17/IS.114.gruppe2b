import {
  circle,
  rectangle,
  putImage,
  rotate,
  circleSvg,
  rectangleSvg,
  putImageSvg,
  rotateSvg,
} from "./figures.js";
const bg_color = "rgb(36, 37, 38)";

// Canvas drawing
// Background
const bg = rectangle(400, 400, "solid", bg_color);

// Eye
const eye_main = circle(10, "solid", "black");
const eye_white = circle(3, "solid", "white");
const eye = putImage(eye_white, -3, -1, eye_main);

// Gills
const gill1 = putImage(
  circle(40, "solid", "red"),
  -18,
  0,
  circle(30, "solid", "black")
);
const gills = putImage(gill1, -30, 0, putImage(gill1, -15, 0, gill1));

// Main body
const body = circle(130, "solid", "red");

// Top fins
const top_fin_element = circle(15, "solid", "crimson");
const top_fin = putImage(
  top_fin_element,
  -10,
  2,
  putImage(top_fin_element, 10, 2, top_fin_element)
);

// Mouth
const mouth = putImage(
  circle(10, "solid", "crimson"),
  0,
  10,
  circle(10, "solid", "crimson")
);

// Belly fin
const belly_fin = putImage(
  circle(20, "solid", bg_color),
  0,
  30,
  rectangle(40, 60, "solid", "crimson")
);

// Tail fin
const tail_fin = putImage(
  circle(70, "solid", bg_color),
  65,
  0,
  circle(50, "solid", "crimson")
);

putImage(
  eye,
  -85,
  -30,
  putImage(
    gills,
    -20,
    -10,
    putImage(
      body,
      -30,
      0,
      putImage(
        top_fin,
        -30,
        -135,
        putImage(
          mouth,
          -155,
          0,
          putImage(belly_fin, -30, 130, putImage(tail_fin, 130, 0, bg))
        )
      )
    )
  )
);

// SVG-drawing
putImageSvg(
  // Eye
  circleSvg(3, "solid", "white"),
  -85 - 3,
  -30,
  putImageSvg(
    circleSvg(10, "solid", "black"),
    -85,
    -30,
    // Gills
    putImageSvg(
      circleSvg(40, "solid", "red"),
      -20 - 30 - 18,
      0,
      putImageSvg(
        circleSvg(30, "solid", "black"),
        -20 - 30,
        0,
        putImageSvg(
          circleSvg(40, "solid", "red"),
          -20 - 15 - 18,
          0,
          putImageSvg(
            circleSvg(30, "solid", "black"),
            -20 - 15,
            0,
            putImageSvg(
              circleSvg(40, "solid", "red"),
              -20 - 18,
              0,
              putImageSvg(
                circleSvg(30, "solid", "black"),
                -20,
                0,
                putImageSvg(
                  circleSvg(130, "solid", "red"),
                  -30,
                  0,
                  // Top fin
                  putImageSvg(
                    circleSvg(15, "solid", "crimson"),
                    -30 - 10,
                    -135 + 2,
                    putImageSvg(
                      circleSvg(15, "solid", "crimson"),
                      -30,
                      -135,
                      putImageSvg(
                        circleSvg(15, "solid", "crimson"),
                        -30 + 10,
                        -135 + 2,
                        // Mouth
                        putImageSvg(
                          circleSvg(10, "solid", "crimson"),
                          -155,
                          10,
                          putImageSvg(
                            circleSvg(10, "solid", "crimson"),
                            -155,
                            0,
                            // Belly fin
                            putImageSvg(
                              circleSvg(20, "solid", bg_color),
                              -30,
                              130 + 30,
                              putImageSvg(
                                rectangleSvg(40, 60, "solid", "crimson"),
                                -30,
                                130,
                                // Tail fin
                                putImageSvg(
                                  circleSvg(70, "solid", bg_color),
                                  130 + 65,
                                  0,
                                  putImageSvg(
                                    circleSvg(50, "solid", "crimson"),
                                    130,
                                    0,
                                    rectangleSvg(400, 400, "solid", bg_color)
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);
