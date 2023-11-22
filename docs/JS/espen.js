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

const langSel = document.getElementById("langSel");
let setLanguage = "en";

window.onload = function(){
    setLanguage = localStorage.getItem("lang") || "en";
    langSel.value = setLanguage;
    
    updateLanguage();
}

const bg_color = "rgb(36, 37, 38)";
/****************** Drawing the creative figures ******************/
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

/****************** Language ******************/
langSel.addEventListener("change", (e) => {
  setLanguage = e.target.value;
  updateLanguage();
});

function updateLanguage(){
  let elementsForTranslation = document.querySelectorAll(".trans");

  // Translate all elements on the page
  for (let el of elementsForTranslation) {
    el.innerHTML = TRANSLATIONS[setLanguage][el.dataset.langId];
  }

  // Redraw chart
  drawChart(setLanguage);

  // Save language setting
  localStorage.setItem("lang", setLanguage);
}

const TRANSLATIONS = {
  no: {
    selectLanguage: "Velg språk:",
    en: "Engelsk",
    no: "Norsk",
    about: "Om Espen",
    aboutP:
      "Espen er 41 år gammel og for tiden student ved årsstudiet i IT og informasjonssystemer ved Universitetet i Agder. Han har tidligere mastergrader i multimedia og læringsteknologi, samt teoretisk fysikk. Disse tidligere studiene, sammen med arbeidserfaring som lærer på en videregående skole, undervisningsassistent og studentmentor, har gitt Espen en lang og variert bakgrunn innen programmering.",
    creative: "Kreativ figur",
    creativeP:
      'En del av kurset IS-114 - Introduksjon til samskaping i informasjonssystemer, er en innføring i programmering. For denne introduksjonen ble programmeringsspråket Pyret først brukt, etterfulgt av JavaScript. I Pyret laget studentene en "kreativ figur", og en komposisjon av disse  kan finnes på hjem-siden. Denne figuren måtte deretter gjenskapes i JavaScript ved å bruke både Canvas API og Svg API, men det måtte gjøres ved å lage funksjoner som etterligner de i Pyret. De to JavaScript-versjonene vises nedenfor i Figurene 1 og 2.',
    fig1: "Figur 1: Den kreative figuren lagd med Canvas API.",
    fig2: "Figur 2: Den kreative figuren lagd med Svg API.",
    climate: "Klimafotavtrykk",
    climateP:
      "En av oppgavene i kurset involverte grafisk representasjon av daglig energiforbruket til en person. For selve oppgaven ble data lastet fra et regneark inn i Pyret, der det ble behandlet og vist. Her presenterer vi dataene direkte fra kilden.",
    labels: ["Forsvar", "Transport", "Diverse ting", "Mat, landbruk, gjødsel", "Dingser", "Lys", "Temperaturregulering", "Fly", "Bil"],
    legend: "Daglig energiforbruk (kWh/person)",
    further: "Videre arbeid",
    furtherP: "Koden for de andre programmeringsoppgavene finnes i Espens eget reopository. Dette kan finnes her:"
  },
  en: {
    selectLanguage: "Select Language:",
    en: "English",
    no: "Norwegian",
    about: "About Espen",
    aboutP:
      "Espen is 41 years old, and currently a student at the one-year program in IT and information systems at the University of Agder. He previously holds Master's degrees in multimedia and educational technology, as well as theoretical physics. These studies, in combination with work experiences such as being a high school teacher, a teaching assistent, and mentoring students, Espen has a long and varied background in programming.",
    creative: "Creative Figure",
    creativeP:
      'Part of the course IS-114 - Introduction to co-creation in Information Systems, is introduction to programming. For this introduction, the programming language Pyret was first used, followed by JavaScript. In Pyret, the students made a "creative figure", a composition of which can be found on the home page. This figure then had to be recreated in JavaScript using both the Canvas API and the Svg API, although it had to be done by making functions that mimic those of Pyret. The two JavaScript versions are shown below in Figures 1 and 2.',
    fig1: "Figure 1: Recreation of the creative figure with the Canvas API.",
    fig2: "Figure 2: Recreation of the creative figure with the Svg API.",
    climate: "Climate Foot Print",
    climateP:
      "One of the assignments for the course involved graphical representation of the daily energy consumption for an individual. For the assignment itself, the data was loaded from a spreadsheet into Pyret where it was processed and displayed. Here, we present the data directly from the source.",
    labels: [
      "Defence",
      "Transport",
      "Stuff",
      "Food, farming, fertilizer",
      "Gadgets",
      "Ligh",
      "Heating and cooling",
      "Jet flights",
      "Car",
    ],
    legend: "Daily energyconsumption (kWh/person)",
    further: "Further Work",
    furtherP: "The code for the other coding assignments can be found in Espen's own repository. This can be found here:"
  },
};

/****************** Energy chart ******************/
function drawChart(lang) {
  const chartDiv = document.getElementById("chartDiv");
  chartDiv.innerHTML = "";
  const ctx = document.createElement("canvas");
  chartDiv.appendChild(ctx);
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: TRANSLATIONS[lang].labels,
      datasets: [
        {
          label: TRANSLATIONS[lang].legend,
          data: [4, 12, 48, 15, 5, 4, 37, 30, 40],
          borderWidth: 0,
          backgroundColor: "#ff0000",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(255, 255, 255, 0.2)",
          },
          ticks: {
            color: "white",
          },
        },
        x: {
          grid: {
            color: "rgba(255, 255, 255, 0.2)",
          },
          ticks: {
            color: "white",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    },
  });
}

drawChart("en");
