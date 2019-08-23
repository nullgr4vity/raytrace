import vector from './../math/vector';

export function intersection(ray, sphere) {
  let EO = vector.sub(sphere.c, ray.origin);
  let v = vector.dot( EO, ray.direction );
  let disc = (sphere.r * sphere.r) - (vector.dot( EO, EO ) - (v * v));
  if ( disc < 0 )
    return {intersection: {status: false}};
    
  let d = Math.sqrt( disc );
  let P = vector.add(ray.origin, vector.mul((v - d), ray.direction));
  let N = vector.normalize(vector.sub(P, sphere.c));
  
  return {intersection: {status: true, object: sphere, N, P}};
}

export default {
  intersection
}
