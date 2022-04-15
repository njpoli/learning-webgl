import { gl, GLUtilities } from './gl/gl';
import { Shader } from './gl/shader';

/**
 * The main game engine class
 */
export class Engine {
  // @ts-ignore
  private _canvas: HTMLCanvasElement;
  // @ts-ignore
  private _shader: Shader;
  // @ts-ignore
  private _buffer: WebGLBuffer;

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

    this.createBuffer();

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

    gl.bindBuffer(gl.ARRAY_BUFFER, this._buffer);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    gl.disableVertexAttribArray(0);

    requestAnimationFrame(this.loop.bind(this));
  }

  private createBuffer(): void {
    this._buffer = gl.createBuffer() as WebGLBuffer;

    let vertices = [
      // x, y, z
      // v1
      0, 0, 0,
      // v2
      0, 0.5, 0,
      // v3
      0.5, 0.5, 0,
    ];

    gl.bindBuffer(gl.ARRAY_BUFFER, this._buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
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

    void main() {
      gl_FragColor = vec4(1.0);
    }
    `;

    this._shader = new Shader(
      'basic',
      vertexShaderSource,
      fragmentShaderSource
    );
  }
}
