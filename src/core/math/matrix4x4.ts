import { Vector3 } from './vector3';

export class Matrix4x4 {
  private _data: number[] = [];

  private constructor() {
    // Identity matrix (default matrix)
    this._data = [
      // row 1
      1, 0, 0, 0,
      // row 2
      0, 1, 0, 0,
      // row 3
      0, 0, 1, 0,
      // row 4
      0, 0, 0, 1,
    ];
  }

  public get data(): number[] {
    return this._data;
  }

  public static identity(): Matrix4x4 {
    return new Matrix4x4();
  }

  /**
   * Orthographic matrix
   * No perspective, renders something as if it is flat in space
   * @param left position from left of screen (almost always 0)
   * @param right distance to right side of screen from the left (e.g. 1080p would be 1920)
   * @param bottom position from the bottom of the screen (almost always 0) webgl starts from the bottom of the screen
   * @param top position from bottom of screen to the top (e.g. 1080p would be 1080)
   * @param nearClip something negative (to prevent clipping in front)
   * @param farClip arbitrary number
   */
  public static orthographic(
    left: number,
    right: number,
    bottom: number,
    top: number,
    nearClip: number,
    farClip: number
  ): Matrix4x4 {
    let m = new Matrix4x4();

    const lr: number = 1.0 / (left - right);
    const bt: number = 1.0 / (bottom - top);
    const nf: number = 1.0 / (nearClip - farClip);

    m._data[0] = -2.0 * lr;
    m._data[5] = -2.0 * bt;
    m._data[10] = 2.0 * nf;

    m._data[12] = (left + right) * lr;
    m._data[13] = (top + bottom) * bt;
    m._data[14] = (farClip + nearClip) * nf;

    return m;
  }

  /**
   * A matrix that holds data that represents movement of an object
   * through space.
   */
  public static translation(position: Vector3): Matrix4x4 {
    let m = new Matrix4x4();

    // editing 1st 3 numbers in last row of matrix4
    m._data[12] = position.x;
    m._data[13] = position.y;
    m._data[14] = position.z;

    return m;
  }
}
