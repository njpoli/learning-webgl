import { AttributeInfo, GLBuffer } from '../gl/glBuffer';
import { Vector2 } from '../math/vector2';
import { Sprite } from './sprite';

export class AnimatedSprite extends Sprite {
  private _frameHeight: number;
  private _frameWidth: number;
  private _frameCount: number;
  private _frameSequence: number[];
  // TODO: Make this configurable
  private _frameTime: number = 333;
  private _frameUVs: Vector2[] = [];

  private _currentFrame: number = 0;

  public constructor(
    name: string,
    materialName: string,
    width: number = 100,
    height: number = 100,
    frameWidth: number = 10,
    frameHeight: number = 10,
    frameCount: number = 1,
    frameSequence: number[] = []
  ) {
    super(name, materialName, width, height);

    this._frameWidth = frameWidth;
    this._frameHeight = frameHeight;
    this._frameCount = frameCount;
    this._frameSequence = frameSequence;
  }

  public destroy(): void {
    super.destroy();
  }

  public load(): void {
    super.load();
  }

  public update(time: number): void {
    super.update(time);
  }
}
