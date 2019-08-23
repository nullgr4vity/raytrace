const WIDTH = 640;
const HEIGHT = 480;
const FOV = 45;

let scene = {
  screen: {
    width: WIDTH,
    invWidth: 1/WIDTH,
    height: HEIGHT,
    invHeight: 1/HEIGHT,
    aspectRatio: WIDTH/HEIGHT,
  },
  camera: {
    fov: FOV, 
    angle: Math.tan(3.14 * 0.5 * FOV/180),
    origin: [0, 0, 0],
    direction: [0, 0, -1],
    right: [1, 0, 0]    
  },
  world: {
    geometry: [
      { type:"sphere", c: [0.5, 0.5, -2], r: 0.3, color: [200, 100, 0], shi: 512 },
      { type:"sphere", c: [0.5, -0.5, -2], r: 0.3, color: [0, 200, 100], shi: 256 },             
      { type:"sphere", c: [-0.5, -0.5, -2], r: 0.3, color: [100, 0, 200], shi: 128 },
      { type:"sphere", c: [-0.5, 0.5, -2], r: 0.3, color: [200,50,50], shi: 64 },
      { type:"sphere", c: [0, 0, -2], r: 0.3, color: [255, 255, 255] }     
    ],
    lights: [
       {center: [1, 1, 0]},
       {center: [-2, -1, 2]}
    ] 
  }
};
