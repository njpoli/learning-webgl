import { AttributeInfo, GLBuffer } from '../gl/glBuffer';
import { Vector3 } from '../math/vector3';

export class Sprite {
  private _name: string;
  private _width: number;
  private _height: number;
  // @ts-ignore
  private _buffer: GLBuffer;

  public position: Vector3 = new Vector3();

  public constructor(name: string, width: number = 100, height: number = 100) {
    this._name = name;
    this._width = width;
    this._height = height;
  }

  public load(): void {
    this._buffer = new GLBuffer(3);

    let positionAttribute = new AttributeInfo();
    // Removed reference to shader, bad practice to pass shader info to sprite on load
    // Still not ideal (referencing a_location in vertexShaderSource by hardcoding 0)
    // Each variable in shaderSource is referenced by index in order of declaration (e.g. because a_location is the first variable it is index 0)
    positionAttribute.location = 0;
    positionAttribute.offset = 0;
    positionAttribute.size = 3;
    this._buffer.addAttributeLocation(positionAttribute);
    let vertices = [
      // x, y, z
      // triangle 1
      0,
      0,
      0,
      0,
      this._height,
      0,
      this._width,
      this._height,
      0,

      // triangle 2
      this._width,
      this._height,
      0,
      this._width,
      0,
      0,
      0,
      0,
      0,
    ];

    this._buffer.pushBackData(vertices);
    this._buffer.upload();
    this._buffer.unbind();
  }

  public update(time: number): void {}

  public draw(): void {
    this._buffer.bind();
    this._buffer.draw();
  }
}