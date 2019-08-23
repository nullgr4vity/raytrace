export const X = 0;
export const Y = 1;
export const Z = 2;

export function vector_sub(a,b) {
  return [a[X] - b[X], a[Y] - b[Y], a[Z] - b[Z]];
}

export function dot_product(a,b) {
  return a[X] * b[X] + a[Y] * b[Y] + a[Z] * b[Z]; 
}

export function vector_magnitude(a) {
  return Math.sqrt(dot_product(a,a));
}

export function vector_normalize(a) {
  let m = vector_magnitude(a);
  return [a[X] / m, a[Y] / m, a[Z] / m]; 
}

export function vector_zero() {
  return [0,0,0];
}

export function vector_up() {
  return [0, 1, 0];
}

export function vector_make(x,y,z) {
  return [x, y, z];
}

export function vector_add(a,b) {
  return [a[X] + b[X], a[Y] + b[Y], a[Z] + b[Z]];
}

export function vector_mul(a,b) {
  return [a*b[X], a * b[Y], a * b[Z]];
}

export default {
  make: vector_make,    
  zero: vector_zero,
  up: vector_up,

  dot: dot_product,
  sub: vector_sub,
  add: vector_add,
  mul: vector_mul,

  magnitude: vector_magnitude,
  normalize: vector_normalize
}
