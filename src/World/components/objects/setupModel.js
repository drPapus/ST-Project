import { AnimationMixer, AnimationClip } from 'three';


function setupModel(data) {


    const model = data.scene.children[0]; 

   
    const clip = data.animations[1];
    //console.log(data.animations.length);


    const mixer = new AnimationMixer(model);

    const action = mixer.clipAction(clip);
    action.play();
    //action.stop();

  


    model.tick = (delta) => mixer.update(delta);




  
    return model;
  }
  
  export { setupModel };