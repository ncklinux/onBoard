import {
  Engine,
  Scene,
  Vector3,
  HemisphericLight,
  FreeCamera,
  MeshBuilder,
  StandardMaterial,
  Color3,
  Color4,
} from "babylonjs";
import "babylonjs-loaders";

export class BannerScene {
  scene: Scene;
  engine: Engine;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreateScene();
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    //scene.autoClear = false; // transparent background
    scene.clearColor = new Color4(0.5, 0.8, 0.5, 1);
    const camera = new FreeCamera("camera", new Vector3(0, 1, -3), this.scene);
    camera.attachControl();
    const hemiLight = new HemisphericLight(
      "hemiLight",
      new Vector3(0, 1, 0),
      this.scene
    );
    hemiLight.intensity = 0.5;

    const material = new StandardMaterial("material");
    material.diffuseColor = Color3.Green();

    const box = MeshBuilder.CreateBox("box", {}, this.scene);
    box.position = new Vector3(0, 1, 0);

    return scene;
  }
}
