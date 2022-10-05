import {
  Engine,
  Scene,
  Vector3,
  HemisphericLight,
  UniversalCamera,
  StandardMaterial,
  Color3,
  Color4,
  SceneLoader,
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
    const camera = new UniversalCamera("UniversalCamera", new Vector3(0, 0, -2), this.scene);
    camera.attachControl(this.canvas, true);
    const hemiLight = new HemisphericLight(
      "hemiLight",
      new Vector3(0, 1, 0),
      this.scene
    );
    hemiLight.intensity = 0.5;

    const material = new StandardMaterial("material");
    material.diffuseColor = Color3.Green();

    const importMesh = SceneLoader.Append(
      "http://localhost:3000/",
      "board.obj",
      this.scene
    );

    var light = new HemisphericLight("light1", new Vector3(1, 0, 0), scene);
    light.intensity = 0.7;

    return scene;
  }
}
