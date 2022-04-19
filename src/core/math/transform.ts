import { Matrix4x4 } from './matrix4x4';
import { Vector3 } from './vector3';

export class Transform {
  public position: Vector3 = Vector3.zero;
  public rotation: Vector3 = Vector3.zero;
  public scale: Vector3 = Vector3.one;

  public copyFrom(transform: Transform): void {
    this.position.copyFrom(transform.position);
    this.rotation.copyFrom(transform.rotation);
    this.scale.copyFrom(transform.scale);
  }

  public getTransformationMatrix(): Matrix4x4 {
    let translation = Matrix4x4.translation(this.position);

    // TODO: add x and y for 3D.
    let rotation = Matrix4x4.rotationZ(this.rotation.z);
    let scale = Matrix4x4.scale(this.scale);

    // order matters here
    // T * R * S
    return Matrix4x4.multiply(Matrix4x4.multiply(translation, rotation), scale);
  }
}