import { gl } from '../gl/gl';
import { AttributeInfo, GLBuffer } from '../gl/glBuffer';
import { Shader } from '../gl/shader';
import { Matrix4x4 } from '../math/matrix4x4';
import { MaterialManager } from './materialManager';
import { Material } from './material';
import { Vertex } from './vertex';
import { Vector3 } from '../math/vector3';

export class Sprite {
  protected _name: string;
  protected _width: number;
  protected _height: number;
  protected _buffer: GLBuffer | undefined;
  protected _material: Material | undefined;
  protected _materialName: string;
  protected _vertices: Vertex[] = [];
  protected _origin: Vector3 = new Vector3(0.5, 0.5, 0);

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
    this._material = MaterialManager.getMaterial(this._materialName);
  }

  public get name(): string {
    return this._name;
  }

  public get origin(): Vector3 {
    return this._origin;
  }

  public set origin(value: Vector3) {
    this._origin = value;
  }

  public destroy(): void {
    if (this._buffer) {
      this._buffer.destroy();
    }
    MaterialManager.releaseMaterial(this._materialName);
    // @ts-ignore
    this._material = undefined;
    // @ts-ignore
    this._materialName = undefined;
  }

  public load(): void {
    this._buffer = new GLBuffer();

    let positionAttribute = new AttributeInfo();
    // Removed reference to shader, bad practice to pass shader info to sprite on load
    // Still not ideal (referencing a_location in vertexShaderSource by hardcoding 0)
    // Each variable in shaderSource is referenced by index in order of declaration (e.g. because a_location is the first variable it is index 0)
    positionAttribute.location = 0;
    positionAttribute.size = 3;
    this._buffer.addAttributeLocation(positionAttribute);

    let texCoordAttribute = new AttributeInfo();
    texCoordAttribute.location = 1;
    texCoordAttribute.size = 2;
    this._buffer.addAttributeLocation(texCoordAttribute);

    const minX = -(this._width * this._origin.x);
    const maxX = this._width * (1.0 - this._origin.x);

    const minY = -(this._width * this._origin.y);
    const maxY = this._width * (1.0 - this._origin.y);

    // prettier-ignore
    this._vertices = [
      // x, y, z, U: texture x, V: texture y
      // triangle 1
      // point 1
      new Vertex(minX, minY, 0, 0, 0,),
      // point 2
      new Vertex(minX, maxY, 0, 0, 1.0,),
      // point 3
      new Vertex(maxX, maxY, 0, 1.0, 1.0,),
      // triangle 2
      // point 4
      new Vertex(maxX, maxY, 0, 1.0, 1.0),
      // point 5
      new Vertex(maxX, minY, 0, 1.0, 0),
      // point 6
      new Vertex(minX, minY, 0, 0, 0),
    ];

    this._vertices.forEach((v) => {
      this._buffer?.pushBackData(v.toArray());
    });
    this._buffer.upload();
    this._buffer.unbind();
  }

  public update(time: number): void {}

  public draw(shader: Shader, model: Matrix4x4): void {
    let modelLocation = shader.getUniformLocation('u_model');
    gl.uniformMatrix4fv(modelLocation, false, model.toFloat32Array());

    const colorLocation = shader.getUniformLocation('u_tint');
    if (this._material) {
      gl.uniform4fv(colorLocation, this._material.tint.toFloat32Array());
    }

    if (this._material?.diffuseTexture) {
      this._material.diffuseTexture.activateAndBind(0);
      const diffuseLocation = shader.getUniformLocation('u_diffuse');
      // pass a single integer
      gl.uniform1i(diffuseLocation, 0);
    }

    if (this._buffer) {
      this._buffer.bind();
      this._buffer.draw();
    } else {
      throw new Error('No assigned buffer for sprite ' + this._name);
    }
  }
}
