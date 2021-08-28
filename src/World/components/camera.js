import { PerspectiveCamera } from 'three';
import { createTube } from './meshes/knott.js';


function createCamera() {


    const tube = createTube();
    
    const camera = new PerspectiveCamera(
      45, // fov = Field Of View
      2, // aspect ratio (dummy value)
      0.1, // near clipping plane
      1000, // far clipping plane
    );

     camera.position.set(0, -20, 50);
     


            let percentage = 0;
     camera.tick = () => {
             percentage += 0.0003;
             let p1 = tube.geometry.parameters.path.getPointAt(percentage%1);
             let p2 = tube.geometry.parameters.path.getPointAt((percentage + 0.01)%1);
             camera.position.set(p1.x,p1.y,p1.z);
             camera.lookAt(p2);
            
    };
  
    return camera;
  }
  
  export { createCamera };