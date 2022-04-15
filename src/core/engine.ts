import { gl, GLUtilities } from './gl/gl';
import { Shader } from './gl/shader';
import { Sprite } from './graphics/sprite';

/**
 * The main game engine class
 */
export class Engine {
  // @ts-ignore
  private _canvas: HTMLCanvasElement;
  // @ts-ignore
  private _shader: Shader;
  // @ts-ignore
  private _sprite: Sprite;
  /**
   * Creates a new engine
   */
  public constructor() {}

  /**
   * Starts up this engine
   */
  public start(): void {
    this._canvas = GLUtilities.initialize();

    gl.clearColor(0, 0, 0, 1);

    this.loadShaders();
    this._shader.use();

    this._sprite = new Sprite('test');
    this._sprite.load();

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

      gl.viewport(0, 0, this._canvas.width, this._canvas.height);
    }
  }

  private loop(): void {
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Set uniforms
    const colorPosition = this._shader.getUniformLocation('u_color');
    gl.uniform4f(colorPosition, 1, 0.5, 0.6, 1);

    this._sprite.draw();

    requestAnimationFrame(this.loop.bind(this));
  }

  private loadShaders(): void {
    const vertexShaderSource = `
    attribute vec3 a_position;

    void main() {
      gl_Position = vec4(a_position, 1.0);
    }
    `;

    let fragmentShaderSource = `
    precision mediump float;

    uniform vec4 u_color;

    void main() {
      gl_FragColor = u_color;
    }
    `;

    this._shader = new Shader(
      'basic',
      vertexShaderSource,
      fragmentShaderSource
    );
  }
}
