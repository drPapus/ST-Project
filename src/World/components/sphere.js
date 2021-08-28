import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";
import { createCubeCamera } from './cubeCamera.js';

const cubeCamera = createCubeCamera();

function createSphere() {
    
    
    
    let sphereMaterial = new MeshBasicMaterial({
        envMap: cubeCamera.renderTarget
    });
    let sphereGeo = new SphereGeometry(3.5, 50, 50);
    let sphere = new Mesh(sphereGeo, sphereMaterial);
    
    
    return sphere;
}
export {createSphere};