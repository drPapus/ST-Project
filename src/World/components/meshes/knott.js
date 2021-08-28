import { 
    TubeGeometry,
    MeshBasicMaterial,
    Mesh,
    TextureLoader,
    BackSide,
    MirroredRepeatWrapping     
    } from 'three';

import { GrannyKnot } from 'three-full';
import spaceStars from '/assets/img/space-stars.jpg'





function createTube() {
    //Hard coded array of points

        const points = [ ];
    
      //Create a path from the points
        const path = new GrannyKnot(points);

        const geometry = new TubeGeometry( path, 150, 2, 32, true );
        //Basic red material
        const material = new MeshBasicMaterial( {
            color: 0xFFFFFF,
            map: new TextureLoader().load(spaceStars),
            side: BackSide,

        } );

       material.map.wrapS = MirroredRepeatWrapping;
       material.map.wrapT = MirroredRepeatWrapping;
       material.map.repeat.set( 30, 4 );


        //Create a mesh
        const tube = new Mesh( geometry, material );

        tube.position.set(0, 0, 0);

        console.log('Tube!');

       // tube.tick = () => {};

    
        


    return tube;
}


export { createTube };


