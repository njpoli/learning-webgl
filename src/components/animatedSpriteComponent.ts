import { Shader } from '../core/gl/shader';
import { AnimatedSprite } from '../core/graphics/animatedSprite';
import { Vector3 } from '../core/math/vector3';
import { BaseComponent } from './baseComponent';
import { IComponent } from './IComponent';
import { IComponentBuilder } from './IComponentBuilder';
import { IComponentData } from './IComponentData';
import { SpriteComponentData } from './spriteComponent';

export class AnimatedSpriteComponentData
  extends SpriteComponentData
  implements IComponentData
{
  public frameWidth: number = 0;
  public frameHeight: number = 0;
  public frameCount: number = 0;
  public frameSequence: number[] = [];
  public autoPlay: boolean = true;
  public frameTime: number = 33;

  public setFromJson(json: any): void {
    super.setFromJson(json);

    if (json.autoPlay !== undefined) {
      this.autoPlay = Boolean(json.autoPlay);
    }

    if (json.frameWidth === undefined) {
      throw new Error('Animated sprite data requires frameWidth to be defined');
    } else {
      this.frameWidth = Number(json.frameWidth);
    }

    if (json.frameHeight === undefined) {
      throw new Error(
        'Animated sprite data requires frameHeight to be defined'
      );
    } else {
      this.frameHeight = Number(json.frameHeight);
    }

    if (json.frameCount === undefined) {
      throw new Error('Animated sprite data requires frameCount to be defined');
    } else {
      this.frameCount = Number(json.frameCount);
    }

    if (json.frameSequence === undefined) {
      throw new Error(
        'Animated sprite data requires frameSequence to be defined'
      );
    } else {
      this.frameSequence = json.frameSequence;
    }

    if (json.frameTime !== undefined) {
      this.frameTime = Number(json.frameTime);
    }
  }
}

export class AnimatedSpriteComponentBuilder implements IComponentBuilder {
  public get type(): string {
    return 'animatedSprite';
  }

  public buildFromJson(json: any): IComponent {
    let data = new AnimatedSpriteComponentData();
    data.setFromJson(json);

    return new AnimatedSpriteComponent(data);
  }
}

export class AnimatedSpriteComponent extends BaseComponent {
  private _autopPlay: boolean;
  private _sprite: AnimatedSprite;

  public constructor(data: AnimatedSpriteComponentData) {
    super(data);
    this._autopPlay = data.autoPlay;

    this._sprite = new AnimatedSprite(
      data.name,
      data.materialName,
      data.frameWidth,
      data.frameHeight,
      data.frameWidth,
      data.frameHeight,
      data.frameCount,
      data.frameSequence,
      data.frameTime
    );

    // Have to do this even though calling super because of this._sprite call
    // above wipes out the origin
    if (!data.origin.equals(Vector3.zero)) {
      this._sprite.origin.copyFrom(data.origin);
    }
  }

  public get isPlaying(): boolean {
    return this._sprite.isPlaying;
  }

  public load(): void {
    this._sprite.load();
  }

  public updateReady(): void {
    if (!this._autopPlay) {
      this._sprite.stop();
    }
  }

  public update(time: number): void {
    this._sprite.update(time);
    super.update(time);
  }

  public play(): void {
    this._sprite.play();
  }

  public stop(): void {
    this._sprite.stop();
  }

  public setFrame(frameNumber: number): void {
    this._sprite.setFrame(frameNumber);
  }

  public render(shader: Shader): void {
    if (this._owner?.worldMatrix) {
      this._sprite.draw(shader, this._owner?.worldMatrix);
    }

    super.render(shader);
  }
}
