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

    let rotation = Matrix4x4.rotationXYZ(
      this.rotation.x,
      this.rotation.y,
      this.rotation.z
    );
    let scale = Matrix4x4.scale(this.scale);

    // order matters here
    // T * R * S
    return Matrix4x4.multiply(Matrix4x4.multiply(translation, rotation), scale);
  }

  public setFromJson(json: any): void {
    if (json.position) {
      this.position.setFromJson(json.position);
    }

    if (json.rotation) {
      this.rotation.setFromJson(json.rotation);
    }

    if (json.scale) {
      this.scale.setFromJson(json.scale);
    }
  }
}
