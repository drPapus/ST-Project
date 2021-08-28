import { AmbientLight,
  DirectionalLight,
  HemisphereLight, PointLight } from 'three';

function createLights() {
  // Create a directional light
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    5,
     );

  const mainLight = new DirectionalLight('white', 5);
  mainLight.position.set(10, 10, 10);

  // const pointLight = new PointLight(0xff0000, 1, 100 );
  // pointLight.position.set( 5, 5, 5 );

  // move the light right, up, and towards us
  //light.position.set(10, 10, 10);



  return { ambientLight, mainLight };
}

export { createLights };