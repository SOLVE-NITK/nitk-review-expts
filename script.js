const paths = [
  {
    id: 1,
    path: "assets/exp-projection-of-planes/simulation/index.html",
  },
  {
    id: 2,
    path: "assets/exp-thermal-conductivity/simulation/index.html",
  },
  {
    id: 3,
    path: "assets/exp-coupled-pendulum/simulation/angular.html",
  },
];

const displaySimulator = (id) => {
  document.getElementById("frame").src = `${paths[id - 1].path}`;
};
