import { WebGLRenderer, sRGBEncoding, PMREMGenerator, ACESFilmicToneMapping} from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

   // start the loop
   renderer.setAnimationLoop(() => {
    //renderer.render(scene, camera);
  });

  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  renderer.PMREMGenerator = true;
 // renderer.toneMapping = ACESFilmicToneMapping;
 // renderer.toneMappingExposure = 0.8;
 // renderer.outputEncoding = sRGBEncoding;



  return renderer;
}

export { createRenderer };