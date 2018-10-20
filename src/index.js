import { TweenMax } from "gsap";

const X = 200;
const Y = 200;

document.getElementById("app").innerHTML = `

<svg viewBox="-10 -10 500 500">
    <g id='balloon1'>
    <path id='balloon' fill='red' stroke='red' d="M${X - 1} ${Y -
  4} c-85 -100 85 -100 2 0"/>
    <path id='balloon-inside' fill='white' stroke='white' d='M${X + 10} ${Y -
  60} l5 -3 l-2 15 z' />
    <path id='balloon-bottom' fill='red' d="M${X} ${Y} l-5 0 l5 -5 l5 5 l-8 0" stroke='red' />
    <path id='thread' d="M${X} ${Y} q10 5 0 10 q-10 5 5 20 q10 10 0 20" fill='none' stroke='purple'/>
    </g>
    <g id='balloon2'>
    <path id='balloon' fill='blue' stroke='blue' d="M${X - 1} ${Y -
  4} c-85 -100 85 -100 2 0"/>
    <path id='balloon-inside' fill='white' stroke='white' d='M${X + 10} ${Y -
  60} l5 -3 l-2 15 z' />
    <path id='balloon-bottom' fill='blue' d="M${X} ${Y} l-5 0 l5 -5 l5 5 l-8 0" stroke='blue' />
    <path id='thread' d="M${X} ${Y} q10 5 0 10 q-10 5 5 20 q10 10 0 20" fill='none' stroke='purple'/>
    </g>
    <g id='balloon3'>
    <path id='balloon' fill='purple' stroke='purple' d="M${X - 1} ${Y -
  4} c-85 -100 85 -100 2 0"/>
    <path id='balloon-inside' fill='white' stroke='white' d='M${X + 10} ${Y -
  60} l5 -3 l-2 15 z' />
    <path id='balloon-bottom' fill='purple' d="M${X} ${Y} l-5 0 l5 -5 l5 5 l-8 0" stroke='purple' />
    <path id='thread' d="M${X} ${Y} q10 5 0 10 q-10 5 5 20 q10 10 0 20" fill='none' stroke='purple'/>
    </g>
    <g id='balloon4'>
    <path id='balloon' fill='lightgreen' stroke='lightgreen' d="M${X - 1} ${Y -
  4} c-85 -100 85 -100 2 0"/>
    <path id='balloon-inside' fill='white' stroke='white' d='M${X + 10} ${Y -
  60} l5 -3 l-2 15 z' />
    <path id='balloon-bottom' fill='lightgreen' d="M${X} ${Y} l-5 0 l5 -5 l5 5 l-8 0" stroke='lightgreen' />
    <path id='thread' d="M${X} ${Y} q10 5 0 10 q-10 5 5 20 q10 10 0 20" fill='none' stroke='purple'/>
    </g>
</svg>
`;

TweenMax.fromTo(
  "#balloon1",
  1,
  {
    css: { transform: "translate(-100px, 400px)" }
  },
  {
    css: { transform: "translate(0px, -280px)" },
    repeat: -1
  }
);

TweenMax.fromTo(
  "#balloon2",
  1,
  {
    css: { transform: "translate(-20px, 400px)" }
  },
  {
    css: { transform: "translate(-50px, -280px)" },
    repeat: -1,
    delay: 0.3
  }
);
TweenMax.fromTo(
  "#balloon3",
  1,
  {
    css: { transform: "translate(50px, 400px)" }
  },
  {
    css: { transform: "translate(-180px, -280px)" },
    repeat: -1,
    delay: 0.4
  }
);
TweenMax.fromTo(
  "#balloon4",
  1,
  {
    css: { transform: "translate(-40px, 400px)" }
  },
  {
    css: { transform: "translate(200px, -280px)" },
    repeat: -1,
    delay: 0.1
  }
);
