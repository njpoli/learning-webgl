import { gl } from '../gl/gl';
import { AttributeInfo, GLBuffer } from '../gl/glBuffer';
import { Shader } from '../gl/shader';
import { Vector3 } from '../math/vector3';
import { Matrix4x4 } from '../math/matrix4x4';
import { Texture } from './texture';
import { TextureManager } from './textureManager';
import { MaterialManager } from './materialManager';
import { Material } from './material';

export class Sprite {
  private _name: string;
  private _width: number;
  private _height: number;
  // @ts-ignore
  private _buffer: GLBuffer;
  private _material: Material;
  private _materialName: string;

  public position: Vector3 = new Vector3();

  public constructor(
    name: string,
    materialName: string,
    width: number = 100,
    height: number = 100
  ) {
    this._name = name;
    this._width = width;
    this._height = height;
    this._materialName = materialName;
    //@ts-ignore
    this._material = MaterialManager.getMaterial(this._materialName);
  }

  public get name(): string {
    return this._name;
  }

  public destroy(): void {
    this._buffer.destroy();
    MaterialManager.releaseMaterial(this._materialName);
    // @ts-ignore
    this._material = undefined;
    // @ts-ignore
    this._materialName = undefined;
  }

  public load(): void {
    this._buffer = new GLBuffer(5);

    let positionAttribute = new AttributeInfo();
    // Removed reference to shader, bad practice to pass shader info to sprite on load
    // Still not ideal (referencing a_location in vertexShaderSource by hardcoding 0)
    // Each variable in shaderSource is referenced by index in order of declaration (e.g. because a_location is the first variable it is index 0)
    positionAttribute.location = 0;
    positionAttribute.offset = 0;
    positionAttribute.size = 3;
    this._buffer.addAttributeLocation(positionAttribute);

    let texCoordAttribute = new AttributeInfo();
    texCoordAttribute.location = 1;
    // matches the size of the postion attribute
    texCoordAttribute.offset = 3;
    texCoordAttribute.size = 2;
    this._buffer.addAttributeLocation(texCoordAttribute);
    // prettier-ignore
    const vertices = [
      // x, y, z, U: texture x, V: texture y
      // triangle 1
      // point 1
      0, 0, 0, 0, 0,
      // point 2
      0, this._height, 0, 0, 1.0,
      // point 3
      this._width, this._height, 0, 1.0, 1.0,
      // triangle 2
      // point 4
      this._width, this._height, 0, 1.0, 1.0,
      // point 5
      this._width, 0, 0, 1.0, 0,
      // point 6
      0, 0, 0, 0, 0,
    ];

    this._buffer.pushBackData(vertices);
    this._buffer.upload();
    this._buffer.unbind();
  }

  public update(time: number): void {}

  public draw(shader: Shader): void {
    let modelLocation = shader.getUniformLocation('u_model');
    gl.uniformMatrix4fv(
      modelLocation,
      false,
      new Float32Array(Matrix4x4.translation(this.position).data)
    );

    const colorLocation = shader.getUniformLocation('u_tint');
    //gl.uniform4f(colorLocation 1, 0.4, 1, 1);
    gl.uniform4fv(colorLocation, this._material.tint.toFloat32Array());

    if (this._material) {
      this._material.diffuseTexture.activateAndBind(0);
      const diffuseLocation = shader.getUniformLocation('u_diffuse');
      // pass a single integer
      gl.uniform1i(diffuseLocation, 0);
    }

    this._buffer.bind();
    this._buffer.draw();
  }
}
