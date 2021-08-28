import { Group, MathUtils } from 'three';
import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';
import { createMeshes } from './meshes';
import { createSprites } from './sprites';

const speenEarth = MathUtils.degToRad(2);
const speenAtmo = MathUtils.degToRad(1);



class Planets extends Group {

    constructor() {
        super();
        
        this.meshes = createMeshes();
        this.sprite = createSprites();
    
      this.add(
        this.meshes.earth,
        this.meshes.atmosphere,
        this.sprite,
        this.meshes.mars,
        this.meshes.moon,

        );
      }


    
      tick(delta) {
        this.meshes.earth.rotation.y += speenEarth * delta;
        this.meshes.atmosphere.rotation.y += speenAtmo * delta;
        this.meshes.mars.rotation.y += speenEarth * delta;
        this.meshes.moon.rotation.y += speenEarth * delta;
      }



}

export { Planets }