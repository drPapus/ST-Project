import { Color, CubeTextureLoader, Scene , Mesh , TextureLoader, PlaneGeometry, MeshBasicMaterial, UnsignedByteType } from 'three';

import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.114/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'https://cdn.jsdelivr.net/npm/three@0.114/examples/jsm/loaders/RGBELoader.js';
import { MeshLambertMaterial, MixOperation, Material } from 'https://cdn.jsdelivr.net/npm/three@0.114/build/three.module.js';






function createScene() {
  const scene = new Scene();
  //Background space img

  // const spaceTexture = new TextureLoader().load('/assets/img/space.jpg');
  // scene.background = spaceTexture;

  // const envTexture = new CubeTextureLoader().load([
  //   '/assets/img/galaxyTexture.jpg',
  //   '/assets/img/galaxyTexture.jpg',
  //   '/assets/img/galaxyTexture.jpg',
  //   '/assets/img/galaxyTexture.jpg',
  //   '/assets/img/galaxyTexture.jpg',
  //   '/assets/img/galaxyTexture.jpg'
  // ])
  // scene.background = envTexture;

  
// scene.background = new Color('lightblue');




  return scene;
}

export { createScene };