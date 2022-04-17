import { gl } from './gl';

/**
 * Represents a WebGL shader.
 */
export abstract class Shader {
  private _name: string;
  // @ts-ignore
  private _program: WebGLProgram;
  private _attributes: { [name: string]: number } = {};
  private _uniforms: { [name: string]: WebGLUniformLocation } = {};

  /**
   * Creates a new shader.
   * @param name The name of the shader.
   * @param vertexSource The source of the vertex shader.
   * @param fragmentSource The source of the fragment shader.
   */
  public constructor(name: string) {
    this._name = name;
  }

  /**
   * The name of the shader.
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Use shader.
   */
  public use(): void {
    gl.useProgram(this._program);
  }

  /**
   * Gets the location of an attribute with the provided name
   * @param name The name of the attribute to retrieve
   * @returns An attribute
   */
  public getAttributeLocation(name: string): number {
    if (this._attributes[name] === undefined) {
      throw new Error(
        `Unable to find attribute name ${name} in shader ${this._name}`
      );
    }

    return this._attributes[name];
  }

  public getUniformLocation(name: string): WebGLUniformLocation {
    if (this._uniforms[name] === undefined) {
      throw new Error(
        `Unable to find uniform name ${name} in shader ${this._name}`
      );
    }

    return this._uniforms[name];
  }

  protected load(vertexSource: string, fragmentSource: string): void {
    let vertexShader = this.loadShader(vertexSource, gl.VERTEX_SHADER);
    let fragmentShader = this.loadShader(fragmentSource, gl.FRAGMENT_SHADER);

    this.createProgram(vertexShader, fragmentShader);

    this.detectAttributes();
    this.detectUniforms();
  }

  private loadShader(source: string, shaderType: number): WebGLShader {
    let shader: WebGLShader = gl.createShader(shaderType) as WebGLShader;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    let error = gl.getShaderInfoLog(shader);
    if (error) {
      throw new Error('Error compiling shader: ' + this._name + ': ' + error);
    }
    return shader;
  }

  private createProgram(
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader
  ): void {
    this._program = gl.createProgram() as WebGLProgram;

    gl.attachShader(this._program, vertexShader);
    gl.attachShader(this._program, fragmentShader);

    gl.linkProgram(this._program);

    const error = gl.getProgramInfoLog(this._program);
    if (error) {
      throw new Error('Errror linking shader ' + this._name + ': ' + error);
    }
  }

  private detectAttributes(): void {
    // gives all attributes in the shader
    const attributeCount = gl.getProgramParameter(
      this._program,
      gl.ACTIVE_ATTRIBUTES
    );

    for (let i = 0; i < attributeCount; i++) {
      const attributeInfo: WebGLActiveInfo = gl.getActiveAttrib(
        this._program,
        i
      ) as WebGLActiveInfo;
      if (!attributeInfo) {
        break;
      }

      // Populates _attribues with each attribute as as the value and the attribute name as the key
      this._attributes[attributeInfo.name] = gl.getAttribLocation(
        this._program,
        attributeInfo.name
      );
    }
  }

  private detectUniforms(): void {
    const uniformCount = gl.getProgramParameter(
      this._program,
      gl.ACTIVE_UNIFORMS
    );

    for (let i = 0; i < uniformCount; i++) {
      const uniformInfo: WebGLActiveInfo = gl.getActiveUniform(
        this._program,
        i
      ) as WebGLActiveInfo;
      if (!uniformInfo) {
        break;
      }

      // Populates _attribues with each attribute as as the value and the attribute name as the key
      this._uniforms[uniformInfo.name] = gl.getUniformLocation(
        this._program,
        uniformInfo.name
      ) as WebGLUniformLocation;
    }
  }
}
