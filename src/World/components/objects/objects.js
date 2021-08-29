import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';
//import { Mesh, AnimationClip } from 'three';





async function loadObjects() {


  const MODEL_PATH = '/assets/models/levitate+fly_metall2.glb';

  const loader = new GLTFLoader();

  const [humanData] = await Promise.all([loader.loadAsync(MODEL_PATH)]);

  const human = setupModel(humanData);

  console.log('Human!', humanData.animations);

  human.scale.set(0.0035, 0.0035, 0.0035);
  human.position.set(0, -1.05 , -2.5);
  human.rotation.set(2, 0, 3.5);
  //human.castShadow = true;
  //human.receiveShadow = true;



    // // Reference the neck and waist bones
    // if (human.isBone && human.name === 'mixamorigNeck') { 
    //   neck = human;
    // }
    // if (human.isBone && human.name === 'mixamorigSpine2') { 
    //   waist = human;
    // }


    // let idleAnim = AnimationClip.findByName(fileAnimations, 'idle');

    // // Add these:
    // idleAnim.tracks.splice(3, 3);
    // idleAnim.tracks.splice(9, 3);
  





  
   

  return {
    human
  };

}



export { loadObjects };