const URLS = [
  {
    name: "Projection of Planes",
    url: "assets/exp-projection-of-planes/simulation/index.html",
  },
  {
    name: "Projection of point and conventions",
    url: "assets/point/index.html",
  },
  {
    name: "Introduction to engineering drawing",
    url: "assets/drawing/index.html",
  },
  {
    name: "Thermal Conductivity",
    url: "assets/exp-thermal-conductivity/simulation/index.html",
  },
  {
    name: "Composite Slab Apparatus",
    url: "assets/slab/index.html",
  },
  {
    name: "Test on Heat Exchangers",
    url: "assets/heat/index.html",
  },
  {
    name: "Coupled Pendulum",
    url: "assets/exp-coupled-pendulum/simulation/angular.html",
  },
  {
    name: "Two Pulley System",
    url: "assets/pulley/index.html",
  },
  {
    name: "Cart moving on a Circular Track",
    url: "assets/cart/index.html",
  },
  {
    name: "Effect of FDM process parameters on ultimate tensile strength",
    url: "assets/utslayer1/index.html",
  },
  {
    name: "Effect of Laser cutting process parameters on surface",
    url: "assets/srlaserpower/index.html",
  },
  {
    name: "Effect of SLM process parameters on ultimate tensile strength",
    url: "assets/utslayer2/index.html",
  },
  {
    name: "Epicyclic Gear Train",
    url: "assets/epicyclic/index.html",
  },
  {
    name: "Compound Gear Train",
    url: "assets/compound/index.html",
  },
  {
    name: "Reverted Gear Train",
    url: "assets/reverted/index.html",
  },
  {
    name: "Arc Welding(V-Butt)",
    url: "assets/arc/index.html",
  },
  {
    name: "Friction Welding",
    url: "assets/friction/index.html",
  },
  {
    name: "Blow Moulding",
    url: "assets/blow/index.html",
  },
  {
    name: "II law of thermodynamcis",
    url: "assets/second/index.html",
  },
  {
    name: "Carnot Cycle",
    url: "assets/carnot/index.html",
  },
  {
    name: "Ericsson Cycle",
    url: "assets/ericsson/index.html",
  },
  {
    name: "Determination of Motor Thrust",
    url: "assets/thrust/index.html",
  },
  {
    name: "Assembly of Quadcopter",
    url: "assets/assembly/index.html",
  },
  {
    name: "Caliberation of Quadcopter",
    url: "assets/caliberation/index.html",
  },
  {
    name: "Break Even Analysis",
    url: "assets/break/index.html",
  },
  {
    name: "Law of Demand",
    url: "assets/demand/index.html",
  },
  {
    name: "Law of Supply",
    url: "assets/supply/index.html",
  },
];

function displayExperiment(element) {
  console.log(element.textContent.trim());
  URLS.map((ele) => {
    if (ele.name == element.textContent.trim()) {
      document.getElementById("frame").src = ele.url;
    }
  });
}
