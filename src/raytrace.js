
import _ from 'lodash';
import {computeRay} from './geometry/ray';
import {trace} from './trace';
import shading from './shading';

let pipeline = [computeRay, trace, shading.lambert, shading.phong];
let ctx = document.getElementById('canvas').getContext('2d');

for (let x = 0; x < scene.screen.width; x++) {
  for (let y = 0; y < scene.screen.height; y++) {
    let pixel = _.reduce(pipeline, (state, fragment) => {
      let result = fragment(state);
      return Object.assign(state, result);
    }, { x, y, scene, equation: {} });

    let color = [0,0,0]; // [r,g,b]
    if ( pixel.intersection.status ) {
      let diffuse = pixel.equation.shading.diffuse || 0;
      let specular  = pixel.equation.shading.specular || 0; 
                              
      color[0] = Math.floor(pixel.intersection.object.color[0] * diffuse);
      color[1] = Math.floor(pixel.intersection.object.color[1] * diffuse);
      color[2] = Math.floor(pixel.intersection.object.color[2] * diffuse);

      color[0] += Math.floor(pixel.intersection.object.color[0] * specular);
      color[1] += Math.floor(pixel.intersection.object.color[1] * specular);
      color[2] += Math.floor(pixel.intersection.object.color[2] * specular);
      
    }      

    ctx.fillStyle = "rgb(" + Math.min(255, color[0]) + "," + Math.min(255, color[1]) + "," + Math.min(255, color[2]) + ")";
    ctx.fillRect(x, y, 1, 1);
  }
}
