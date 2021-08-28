import { 
    TextureLoader,
    SpriteMaterial,
    AdditiveBlending,
    Sprite

 } from "three";

function createSprites() {

    const map = new TextureLoader().load( '/assets/img/pngwing.com.png' );
    const spriteMaterial = new SpriteMaterial( 
    { 
      map: map, 
      color: 0xffffff, transparent: false,
      blending: AdditiveBlending,
    });
   
    let sprite = new Sprite( spriteMaterial );
    sprite.scale.set(12.5, 12.5, 1);
    sprite.position.set(0, -30, 0);

   // console.log('Sprite here!');

    return sprite;
}

export { createSprites };

