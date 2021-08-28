import { SphereGeometry } from 'three';

function createGeometries(){
    //Earth
    const earth_sphere = new SphereGeometry(5, 50, 50);
    //Atmosphere
    const atmo_sphere = new SphereGeometry(5.15, 50, 50);
    //Mars
    const mars_geo = new SphereGeometry(3, 30, 30);
    //Moon
    const moon_geo = new SphereGeometry(2, 25, 25);

    return { 
        earth_sphere,
        atmo_sphere,
        mars_geo,
        moon_geo
     };
}

export { createGeometries };