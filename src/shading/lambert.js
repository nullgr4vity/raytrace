import vector from './../math/vector';

export function lighting(state) {
  let { intersection } = state;
  let { lights } = state.scene.world;

  let diffuse = 0;

  if (intersection.status) {
    let {r, g, b} = {r:0, b:0, g:0};
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

      diffuse += (Math.max(0, NdotL) / distance);
    }
  }
  
  if (state.equation.shading) {
    state.equation.shading.diffuse = diffuse;
    return {equation: state.equation};
  }

  return { equation: { shading: { diffuse }}};
}

export default {
  lighting
}
