import { MeshBasicMaterial, TextureLoader } from "three";


function createMaterials() {
    //Earth
    const earth_body = new MeshBasicMaterial({
        color: 0xFFFFFF,
        map: new TextureLoader().load('/assets/img/earth.jpg'),
    });
    //Atmospere
    const earth_clouds = new MeshBasicMaterial({
        map: new TextureLoader().load('/assets/img/cloud.png'),
        transparent: true,
        opacity: 0.5,
        color: 0xFFFFFF
    });
    //Mars
    const mars_body = new MeshBasicMaterial({
        color: '#FF9900',
        map: new TextureLoader().load('/assets/img/mars.jpg'),
    });
    //Moon
    const moon_body = new MeshBasicMaterial({
        color: 0xFFFFFF,
        map: new TextureLoader().load('/assets/img/moon.jpg'),
    });
  
    return { 
        earth_body,
        earth_clouds,
        mars_body,
        moon_body

     };
  }
  
  export { createMaterials };