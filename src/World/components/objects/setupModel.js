import { AnimationMixer, AnimationClip } from 'three';
//import { createOutOfTube } from '/src/World/systems/outoftube'


function setupModel(data) {
  //  const oftube = createOutOfTube();

    const model = data.scene.children[0];

  
    const clip1 = data.animations[1];
    const clip2 = data.animations[0];
    //console.log(data.animations.length);



    const mixer = new AnimationMixer(model);

    const action2 = mixer.clipAction(clip2);
    const action1 = mixer.clipAction(clip1);

    action1.play();


    const oftube = document.getElementById("out_in_space").addEventListener("change", function() {
      console.log(this.value);
      if (this.value == 100) {
          console.log('You out of space!!!');
          document.getElementById("inspace").style.display = "none";
          action1.stop();
          action2.play();
          //scene.remove(human);
          //loop.stop(human);
          //scene.remove(tube);

      } else {
           console.log('Push harder!');
          // action1.play();
      }
  });

    
    // if( oftube == 0 ){
    //   action2.play();
    // } else {
    //   action1.play();
    // }
 
   
    //action2.play();
   



    //action.stop();

  


    model.tick = (delta) => mixer.update(delta);




  
    return model;
  }
  
  export { setupModel };