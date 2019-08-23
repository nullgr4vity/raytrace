import vector from './../math/vector';

export function lighting(state) {
  let { ray } = state;
  let { lights } = state.scene.world;
  let { intersection } = state;

  let specular = 0;

  if (intersection.status && intersection.object.shi) {
    for (let i = 0; i < lights.length; i++) {
      let L = vector.sub(lights[i].center, intersection.P);
      let distance = vector.magnitude(L);
      distance *= distance;
      L = vector.normalize(L);
      let NdotL = vector.dot( intersection.N, L );
      NdotL = Math.min(1, Math.max(0, NdotL));
      if (NdotL <= 0) {
        continue;
      }
      
      let V = vector.sub( state.scene.camera.origin, intersection.P );
      let H = vector.add( L, V );
      H = vector.normalize(H);      

      let NdotH = vector.dot(intersection.N, H);
      NdotH = Math.min(1, Math.max(0, NdotH));

      specular += Math.pow( NdotH, state.intersection.object.shi );
    }
  }

  if (state.equation.shading) {
    state.equation.shading.specular = specular;
    return {equation: state.equation};
  }

  return { equation: { shading: { specular }}};
}

export default {
  lighting
}
