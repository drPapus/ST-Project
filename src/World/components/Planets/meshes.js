import { Mesh } from 'three';
import { createGeometries } from './geometries';
import { createMaterials } from './materials';

function createMeshes() {

    const geometries = createGeometries();
    const materials = createMaterials();

    //Earth
    const earth = new Mesh( geometries.earth_sphere, materials.earth_body );
    earth.position.set(0, -30, 0);
    //console.log('earth is here!');
    //Atmosphere
    const atmosphere = new Mesh(geometries.atmo_sphere, materials.earth_clouds);
    atmosphere.position.copy(earth.position);
    //console.log('atmos is here!');
    //Mars
    const mars = new Mesh(geometries.mars_geo, materials.mars_body);
    mars.position.set(20, -35, -20);
    //console.log('mars is here!');
    //Moon
    const moon = new Mesh(geometries.moon_geo, materials.moon_body);
    moon.position.set(-20, -35, -20);
    //console.log('moon is here!');





    
    return {
        earth,
        atmosphere,
        mars,
        moon
    };
  
  }
  
  export { createMeshes }
