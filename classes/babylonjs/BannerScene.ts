import {
  Engine,
  Scene,
  Vector3,
  HemisphericLight,
  ArcRotateCamera,
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
    scene.clearColor = Color4.FromHexString("#dc3545");

    const camera = new ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      3,
      new Vector3(0, 0, 0)
    );
    camera.attachControl(this.canvas, true);
    camera.inputs.removeByType("ArcRotateCameraMouseWheelInput");

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
