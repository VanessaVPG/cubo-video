import { World } from "./World/World";

main();

function main() {
  const container = document.getElementById('canvas');

  const world = new World(container);


  handleOverlay();
  world.init();
  const stopRotation = document.querySelector('#stopRotation');
  stopRotation.addEventListener('click', () => {
    world.toggleRotation;
  });

}


function handleOverlay() {
  const overlay = document.querySelector('#overlay');
  overlay.addEventListener('click', (
    function () {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
      }, 1000);
    }
  ))

}



