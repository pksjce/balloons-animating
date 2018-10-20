import { TweenMax } from "gsap";

const X = 200;
const Y = 200;
const speed = () => Math.random() + 3;
const delay = () => Math.random();

const createBalloon = ({ id, fillColor }) => {
  return `
  <g id='${id}'>
  <defs>
  <radialGradient id="RadialGradient${id}" cx="0.60" cy="0.38" r="0.35">
    <stop offset="0%" stop-color="white"/>
    <stop offset="100%" stop-color="${fillColor}"/>
  </radialGradient>
</defs>
    <path id='balloon' fill='url(#RadialGradient${id})' stroke='${fillColor}' d="M${X -
    1} ${Y - 4} c-85 -100 85 -100 2 0"/>

    <path id='balloon-bottom' fill='${fillColor}' d="M${X + 3} ${Y -
    2} h-5 l2 -2 l2 0 " stroke='${fillColor}' />
    <path id='thread' d="M${X + 7} ${Y -
    4} h-4 q-20,2,1,45 q15,30,-3,49 q-21,22,4,65" fill='none' stroke='grey'/>
  </g>
  `;
};

const balloons = [
  {
    id: "balloon1",
    fillColor: "magenta"
  },
  {
    id: "balloon2",
    fillColor: "orange"
  },
  {
    id: "balloon3",
    fillColor: "papayawhip"
  },
  {
    id: "balloon4",
    fillColor: "lightcoral"
  },
  {
    id: "balloon5",
    fillColor: "chocolate"
  },
  {
    id: "balloon6",
    fillColor: "lightblue"
  }
];

const balloonhtml = balloons.map(createBalloon).join("");

document.getElementById("app").innerHTML = `

<svg viewBox="-10 -10 800 800">
    ${balloonhtml}
</svg>
`;

TweenMax.fromTo(
  "#balloon1",
  speed(),
  {
    css: { transform: "translate(-100px, 400px)" }
  },
  {
    css: { transform: "translate(0px, -400px)" },
    repeat: -1,
    delay: delay()
  }
);

TweenMax.fromTo(
  "#balloon2",
  speed(),
  {
    css: { transform: "translate(-20px, 400px)" }
  },
  {
    css: { transform: "translate(-50px, -400px)" },
    repeat: -1,
    delay: delay()
  }
);
TweenMax.fromTo(
  "#balloon3",
  speed(),
  {
    css: { transform: "translate(50px, 400px)" }
  },
  {
    css: { transform: "translate(-180px, -280px)" },
    repeat: -1,
    delay: delay()
  }
);
TweenMax.fromTo(
  "#balloon4",
  speed(),
  {
    css: { transform: "translate(-40px, 400px)" }
  },
  {
    css: { transform: "translate(200px, -280px)" },
    repeat: -1,
    delay: delay()
  }
);
TweenMax.fromTo(
  "#balloon5",
  speed(),
  {
    css: { transform: "translate(-40px, 400px)" }
  },
  {
    css: { transform: "translate(20px, -280px)" },
    repeat: -1,
    delay: delay()
  }
);
TweenMax.fromTo(
  "#balloon6",
  speed(),
  {
    css: { transform: "translate(-40px, 400px)" }
  },
  {
    css: { transform: "translate(400px, -200px)" },
    repeat: -1,
    delay: delay()
  }
);
