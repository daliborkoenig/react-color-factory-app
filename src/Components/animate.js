import anime from 'animejs/lib/anime.es.js';
import colors_2 from './colors_2.json'
import { ntc } from './ntc'

const animate = (e) => {
  let w = (window.innerWidth / 20) - 10
  let h = (window.innerHeight / 50) + 74
  let OffLeftX = window.innerWidth / 80
  let OffRightX = window.innerWidth / 80
  let OffUpY = window.innerHeight / 200
  let OffDownY = window.innerHeight / 200
  // console.log(e.clientY, window.innerHeight, h);

  // =================================== MOUSE ENTER =================================== //
  if (e.type === "mouseenter") {
    let el = e.target.parentElement;
    el.style.zIndex = "100";
    el.style.boxShadow = "0px 0px 0px 5px rgba(0,0,0,0.8)";
    // --------------- left column --------------- //
    if (e.clientX < w) {
      // --------------- upper left corner --------------- //
      if (el.id === "New-swatch-0") {
        // console.log("upper-left", el.id);
        anime({
          targets: el,
          scale: 2,
          translateX: OffLeftX,
          translateY: OffUpY,
        });
      }
      // --------------- lower left corner --------------- //
      else if (el.id === "New-swatch-980") {
        // console.log("lower-left");
        anime({
          targets: el,
          scale: 2,
          translateX: OffLeftX,
          translateY: -OffDownY,
        });
      }
      // --------------- rest of the left column --------------- //
      else {
        // console.log("left-column");
        anime({
          targets: el,
          scale: 2,
          translateX: OffLeftX
        });
      }
    }
    // --------------- right column --------------- //
    else if ((window.innerWidth - e.clientX) < w) {
      // console.log("right");
      // --------------- upper right corner --------------- //
      if (el.id === "New-swatch-19") {
        // console.log("upper-right");
        anime({
          targets: el,
          scale: 2,
          translateX: -OffRightX,
          translateY: OffUpY,
        });
      }
      // --------------- lower right corner --------------- //
      else if (el.id === "New-swatch-999") {
        // console.log("lower-right");
        anime({
          targets: el,
          scale: 2,
          translateX: -OffRightX,
          translateY: -OffDownY,
        });
      }
      // --------------- rest of the right column --------------- //
      else {
        anime({
          targets: el,
          scale: 2,
          translateX: -OffRightX
        });
      }

    }
    // --------------- lower row --------------- //
    else if (window.innerHeight - e.clientY < h - 74 && !(el.id === "New-swatch-980" || el.id === "New-swatch-999")) {
      // console.log("lower-row");
      anime({
        targets: el,
        scale: 2,
        translateY: -OffDownY,
      });
    }
    // --------------- upper row --------------- //
    else if (e.clientY < h && !(el.id === "New-swatch-0" || el.id === "New-swatch-19")) {
      // console.log("upper-row");
      anime({
        targets: el,
        scale: 2,
        translateY: OffDownY,
      });
    }
    // --------------- center swatches --------------- //
    else {
      anime({
        targets: el,
        scale: 2,
      });
    }
  }

  // =================================== MOUSE LEAVE =================================== //

  else if (e.type === "mouseleave") {
    let el = e.target.parentElement;
    el.style.zIndex = "0";
    el.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0.8)";
    // --------------- left column --------------- //
    if (e.clientX < w) {
      // --------------- upper left corner --------------- //
      if (el.id === "New-swatch-0") {
        // console.log("upper-left", el.id);
        anime({
          targets: el,
          scale: 1,
          translateX: 0,
          translateY: 0,
          complete: function () {
            el.style = "none"
          }
        });
      }
      // --------------- lower left corner --------------- //
      else if (el.id === "New-swatch-980") {
        // console.log("lower-left");
        anime({
          targets: el,
          scale: 1,
          translateX: 0,
          translateY: 0,
          complete: function () {
            el.style = "none"
          }
        });
      }
      // --------------- rest of the left column --------------- //
      else {
        // console.log("left-column");
        anime({
          targets: el,
          scale: 1,
          translateX: 0,
          complete: function () {
            el.style = "none"
          }
        });
      }
    }
    // --------------- right column --------------- //
    else if ((window.innerWidth - e.clientX) < w) {
      // console.log("right");
      // --------------- upper right corner --------------- //
      if (el.id === "New-swatch-19") {
        // console.log("upper-right");
        anime({
          targets: el,
          scale: 1,
          translateX: 0,
          translateY: 0,
          complete: function () {
            el.style = "none"
          }
        });
      }
      // --------------- lower right corner --------------- //
      else if (el.id === "New-swatch-999") {
        // console.log("lower-right");
        anime({
          targets: el,
          scale: 1,
          translateX: 0,
          translateY: 0,
          complete: function () {
            el.style = "none"
          }
        });
      }
      // --------------- rest of the right column --------------- //
      else {
        anime({
          targets: el,
          scale: 1,
          translateX: 0,
          complete: function () {
            el.style = "none"
          }
        });
      }

    }
    // --------------- lower row --------------- //
    else if (window.innerHeight - e.clientY < h - 74 && !(el.id === "New-swatch-980" || el.id === "New-swatch-999")) {
      // console.log("lower-row");
      anime({
        targets: el,
        scale: 1,
        translateY: 0,
        complete: function () {
          el.style = "none"
        }
      });
    }
    // --------------- upper row --------------- //
    else if (e.clientY < h && !(el.id === "New-swatch-0" || el.id === "New-swatch-19")) {
      // console.log("upper-row");
      anime({
        targets: el,
        scale: 1,
        translateY: 0,
        complete: function () {
          el.style = "none"
        }
      });
    }
    // --------------- center swatches --------------- //
    else {
      anime({
        targets: el,
        scale: 1,
        complete: function () {
          el.style = "none"
        }
      });
    }
  }
  else if (e.type === "click") {

  }
}

const animateColl = (e) => {
  // =================================== MOUSE ENTER =================================== //
  if (e.type === "mouseenter") {
    let el = e.target.parentElement;
    anime({
      targets: el,
      scale: 2,
      rotate: [90, 90],
    });
  }
  // =================================== MOUSE LEAVE =================================== //
  else if (e.type === "mouseleave") {
    let el = e.target.parentElement;
    anime({
      targets: el,
      scale: 1,
      rotate: [90, 90],
      complete: function () {
        el.style = "none"
      }
    });
  }
  else if (e.type === "click") {

  }
}


const transition = (e) => {
  setTimeout(() => {
    anime
      .timeline({})
      .add({
        targets: ".shadow",
        zIndex: 100,
        duration: 1,
      })
      .add({
        targets: "#first",
        translateY: [-400, 0],
        easing: "easeInQuad",
        duration: 2000,
      })
      .add({
        targets: "#first",
        d: [
          {
            value:
              "M -233.536 0 L 2201 -1 s -200 626 -614.714 390 s -492.286 -295 -706.286 -268 S 434 264 258 243 S -452 19 -233.536 0 Z",
          },
          {
            value:
              "M -233.536 0 L 2201 -1 s -200 626 -428 1262 s -592 -119 -829 -842 S 520 1565 338 1568 S -74.024 445.6667 -233.536 0 Z",
          },
        ],
        easing: "easeInQuad",
        opacity: 1,
        duration: 3000,
      }, "-=3000")
      .add({
        targets: "#first",
        d: [
          {
            value:
              "M -233.536 0 L 2201 -1 s -200 626 -428 1262 s -592 -119 -829 -842 S 354 365 245 1337 S -74.024 445.6667 -233.536 0 Z",
          },
          {
            value:
              "M -233.536 0 L 2201 -1 s 30 682 -175 1349 s -347 611 -746 609 S 465 1730 126 1623 S -74.024 445.6667 -233.536 0 ZM -233.536 0 L 2201 -1 s -200 626 -428 1262 S 392 1835 86 1636 S -74.024 445.6667 -233.536 0 Z",
          },
        ],
        easing: "easeInQuad",
        delay: 100,
        duration: 3000,
      }, "-=2000")
      .add(
        {
          targets: ".first-svg",
          opacity: 1,
        },
        "-=3000"
      )
  }, 1);

}

const bgColorArr = (color) => {
  // let bgString = `linear-gradient(to right , ${colors_2[color][0]} 0% 20%, ${colors_2[color][1]} 20% 40%, ${colors_2[color][2]} 40% 60%, ${colors_2[color][3]} 60% 80%, ${colors_2[color][4]} 80% 100%)`
  let bgColors = colors_2[color]
  // console.log(bgColors);
  // console.log(bgString);
  return bgColors;
}

const starryNight = () => {
  anime({
    targets: ["#sky .star"],
    opacity: [
      {
        duration: 700,
        value: "0"
      },
      {
        duration: 700,
        value: "1"
      }
    ],
    easing: "linear",
    loop: true,
    delay: (el, i) => 50 * i
  });
};
const shootingStars = () => {
  anime({
    targets: ["#shootingstars .wish"],
    easing: "linear",
    loop: true,
    delay: (el, i) => 1000 * i,
    opacity: [
      {
        duration: 700,
        value: "1"
      }
    ],
    width: [
      {
        value: "150px"
      },
      {
        value: "0px"
      }
    ],
    translateX: 350
  });
};

const animateName = () => {
  anime.timeline()
    .add({
      targets: '.ml8 .circle-white',
      scale: [0, 1],
      opacity: [1, 0],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 1100
    }).add({
      targets: '.ml8 .circle-container',
      scale: [0, 1],
      duration: 1100,
      easing: "easeInOutExpo",
      offset: '-=1000'
    }).add({
      targets: '.ml8 .circle-dark',
      scale: [0, 1],
      duration: 1100,
      easing: "easeOutExpo",
      offset: '-=600'
    }).add({
      targets: '.ml8 .letters-left',
      scale: [0, 1],
      duration: 1200,
      offset: '-=550'
    }).add({
      targets: '.ml8 .bang',
      scale: [0, 1],
      rotateZ: [45, 15],
      duration: 1200,
      offset: '-=1000'
    }).add({
      targets: '.back',
      scale: [0, 1],
      duration: 500,
    })

  anime({
    targets: '.ml8 .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
  });
}

const handleColor = (e) => {
  let el = e.target.parentElement;
  anime({
    targets: el,
    easing: 'linear',
    duration: 300,
    translateX: [0, 5, -5, 0],
    translateY: [0, 5, -5, 0],
  });
  // console.log("hovering", e.target.parentElement.id);
}

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length === 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length === 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb(" + +r + ", " + +g + ", " + +b + ")";
}

function RGBToHSL(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;
  // console.log(r, g, b);
  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;
  if (delta === 0)
    h = 0;
  // Red is max
  else if (cmax === r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax === g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0)
    h += 360;
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

const findName = (hex) => {
  return ntc.name(hex);
}

export { animate, transition, bgColorArr, findName, shootingStars, starryNight, animateName, handleColor, hexToRGB, RGBToHSL , animateColl }