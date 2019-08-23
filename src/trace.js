import geometry from './geometry';
import vector from './math/vector';

export function trace(state) {
  let { ray } = state;
  let { world } = state.scene;
  
  for (let i = 0; i < world.geometry.length; i++) {
    let obj = world.geometry[i];
    let result = geometry.intersection[obj.type](ray, obj);
    if(result.intersection.status) {
      return result;
    }
  }

  return {intersection: {status: false}};
}
