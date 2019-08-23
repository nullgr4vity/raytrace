import vector from './../math/vector';

export function computeRay(state) {
  let { x, y } = state;
  let { camera, screen } = state.scene;

  if (x === undefined || y === undefined) {
    throw new Error(`compute ray, missing screen coordinates: (${x}, ${y})`);
  }

  let xx = (x * screen.invWidth - 0.5) * screen.aspectRatio;
  let yy = 0.5 - y * screen.invHeight;

  let ray = { origin: camera.origin, direction: vector.make(xx, yy, -1)};    
  ray.direction = vector.normalize(ray.direction);

  return {ray};
}