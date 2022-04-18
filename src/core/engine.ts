import { AssetManager } from './assets/assetManager';
import { gl, GLUtilities } from './gl/gl';
import { BasicShader } from './gl/shaders/basicShader';
import { Color } from './graphics/color';
import { Material } from './graphics/material';
import { MaterialManager } from './graphics/materialManager';
import { Sprite } from './graphics/sprite';
import { Matrix4x4 } from './math/matrix4x4';
import { MessageBus } from './message/messageBus';

/**
 * The main game engine class
 */
export class Engine {
  private _canvas: HTMLCanvasElement | undefined;
  private _basicShader: BasicShader | undefined;
  private _sprite: Sprite | undefined;
  private _projection: Matrix4x4 | undefined;

  /**
   * Creates a new engine
   */
  public constructor() {}

  /**
   * Starts up this engine
   */
  public start(): void {
    this._canvas = GLUtilities.initialize();
    AssetManager.initialize();

    gl.clearColor(0, 0, 0, 1);

    let context = require.context(
      '../assets/textures/',
      true,
      /\.(png|svg|jpg|jpeg|gif)$/i
    );

    this.loadAllImages(context);

    this._basicShader = new BasicShader();
    this._basicShader.use();

    // Load materials
    MaterialManager.registerMaterial(
      new Material(
        'stoneWall',
        'src/assets/textures/stone_wall_128x128.jpg',
        new Color(0, 255, 0, 255)
      )
    );

    // Load
    this._sprite = new Sprite('test', 'stoneWall');
    this._sprite.load();
    this._sprite.position.x = 200;
    this._sprite.position.y = 100;

    this.resize();
    this.loop();
  }

  /**
   * Resizes the canvas to fit the window.
   */
  public resize() {
    if (this._canvas !== undefined) {
      this._canvas.width = window.innerWidth;
      this._canvas.height = window.innerHeight;

      this._projection = Matrix4x4.orthographic(
        0,
        this._canvas.width,
        this._canvas.height,
        0,
        -100.0,
        100.0
      );

      gl.viewport(0, 0, this._canvas.width, this._canvas.height);
    }
  }

  private loop(): void {
    MessageBus.update(0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Set uniforms
    if (this._basicShader && this._projection && this._sprite) {
      const projectionPosition =
        this._basicShader.getUniformLocation('u_projection');

      gl.uniformMatrix4fv(
        projectionPosition,
        false,
        new Float32Array(this._projection.data)
      );
      this._sprite.draw(this._basicShader);
    }
    requestAnimationFrame(this.loop.bind(this));
  }

  private loadAllImages(requireContext: __WebpackModuleApi.RequireContext) {
    requireContext.keys().forEach(requireContext);
  }
}
