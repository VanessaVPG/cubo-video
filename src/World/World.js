import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createRenderer } from "./systems/renderer";
import { createControls } from "./systems/controls";
import { createDirectionalLight } from "./components/lights";
import { Resizer } from "./systems/Resizer";
import { createCube } from "./components/cube";

class World {
  constructor(container) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);
    this.controls = createControls(this.camera, this.renderer.domElement);
    this.lights = createDirectionalLight();
    this.scene.add(this.camera, this.lights);
    const resizer = new Resizer(container, this.camera, this.renderer);
    this.cube = createCube();
    this.scene.add(this.cube);

    this.stopRotationButton = document.querySelector("#stopRotation");
    this.stopRotationButton.addEventListener("click", this.toggleRotation.bind(this));
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    if (this.stopRotationButton.textContent === "Parar rotação") {
      this.cube.rotation.x += 0.005;
    }
    this.renderer.render(this.scene, this.camera);
  }

  init() {
    this.animate();
  }

  toggleRotation() {
    if (this.stopRotationButton.textContent === "Parar rotação") {
      this.stopRotationButton.textContent = "Iniciar rotação";
    } else {
      this.stopRotationButton.textContent = "Parar rotação";
    }
  }
}

export { World };
