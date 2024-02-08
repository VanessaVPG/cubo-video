import { AmbientLight, DirectionalLight } from "three";

function createAmbientLight() {
  const light = new AmbientLight(0x404040);
  return light;
} export { createAmbientLight };

function createDirectionalLight() {
  const directionalLight = new DirectionalLight(0xffffff, 7);
  directionalLight.position.set(0.5, 1, 1).normalize();

  return directionalLight;
} export { createDirectionalLight };