import { loadObjects } from './components/objects/objects.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createTube } from './components/meshes/knott.js';
import { Planets } from './components/Planets/Planets.js';
//import { createEarth } from './components/meshes/earth.js';

import {
  createAxesHelper,
  createGridHelper,
  createAxesHelper2,
  createGridHelper2
} from './components/helpers.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { UnsignedByteType, PMREMGenerator } from 'three';
//import  spaceWorld  from '/assets/img/space-stars.hdr?worker'




let controls;
let camera;
let renderer;
let scene;
let loop;


class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);
  
    const { ambientLight, mainLight } = createLights();

    function setLighting(){

      new RGBELoader()
          .setDataType( UnsignedByteType )
          .load( '/assets/img/space-stars.hdr', function ( texture ) {
  
          var envMap = pmremGenerator.fromEquirectangular( texture ).texture;
  
          scene.background = envMap;
          scene.environment = envMap;
  
          texture.dispose();
          pmremGenerator.dispose();
      })
      let pmremGenerator = new PMREMGenerator( renderer );
      pmremGenerator.compileEquirectangularShader();
  
  }

    setLighting(); 
         
  
    scene.add(ambientLight, mainLight);

    loop.updatables.push(camera);
    

  
    const resizer = new Resizer(container, camera, renderer);
    
    scene.add(createAxesHelper(), createGridHelper(), createAxesHelper2(), createGridHelper2());
  }


  async init() {

    const tube = createTube();

    const planets =  new Planets();

    const { human } = await loadObjects();
   

    loop.updatables.push(human);
     //loop.updatables.push(planets);
    
  
    scene.add(camera);
    scene.add(tube);
    //scene.add(planets);
    camera.add(human);
     //scene.add(human);
    // scene.add(tube);

  }


  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}

export { World };
