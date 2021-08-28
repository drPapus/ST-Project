import { World } from './World/World.js';
import { createPreloader } from '/src/World/systems/preloader';
import { createOutOfTube } from '/src/World/systems/outoftube';


async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');
  const preloader = createPreloader();
  const out = createOutOfTube();


  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // draw the scene
   world.render();

  // start the animation loop
  world.start();


}

main().catch((err) => {
  console.error(err);
});