import { PerspectiveCamera } from "three";

function createCamera() {
  const fov = 75;
  const aspect = (window.innerWidth / window.innerHeight);
  const near = 0.1;
  const far = 100;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 20);

  return camera;
} export { createCamera };