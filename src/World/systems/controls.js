import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  return controls;
} export { createControls };