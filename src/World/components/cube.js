import { BoxGeometry, DoubleSide, Mesh, MeshStandardMaterial, SphereGeometry } from "three";
import { createVideo } from "./videoTexture";

function createCube() {
  const geometry = new BoxGeometry(10, 10, 10);
  const video = createVideo();
  const material = new MeshStandardMaterial({ map: video.texture, side: DoubleSide });
  const cube = new Mesh(geometry, material);
  cube.rotation.set(0, 1, 0);
  document.addEventListener('click', () => {
    if (video.video.paused) {
      setTimeout(() => {
        video.video.play();
        video.video.loop = true;
      }, 1000);
    }
  });
  document.addEventListener('touchstart', () => {
    if (video.video.paused) {
      video.video.play();
      video.video.loop = true;
    }
  });

  return cube;
}

export { createCube };
