import { World } from "./World/World";

main();

function main() {
  const container = document.getElementById('canvas');

  const world = new World(container);


  handleOverlay();
  world.init();
  const stopRotation = document.querySelector('#stopRotation');
  stopRotation.addEventListener('click', () => {
    world.stopRotation();
  });

}

function handleOverlay() {
  document.addEventListener('click', (
    function () {
      const overlay = document.querySelector('#overlay');
      overlay.style.opacity = 0;
      setTimeout(() => {
        overlay.remove();
      }, 1000);
    }
  ))

}



