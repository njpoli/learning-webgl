import { Shader } from '../core/gl/shader';
import { AnimatedSprite } from '../core/graphics/animatedSprite';
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

  public setFromJson(json: any): void {
    super.setFromJson(json);

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
  private _sprite: AnimatedSprite;

  public constructor(data: AnimatedSpriteComponentData) {
    super(data);

    this._sprite = new AnimatedSprite(
      data.name,
      data.materialName,
      data.frameWidth,
      data.frameHeight,
      data.frameWidth,
      data.frameHeight,
      data.frameCount,
      data.frameSequence
    );
  }

  public load(): void {
    this._sprite.load();
  }

  public update(time: number): void {
    this._sprite.update(time);
    super.update(time);
  }

  public render(shader: Shader): void {
    if (this._owner?.worldMatrix) {
      this._sprite.draw(shader, this._owner?.worldMatrix);
    }

    super.render(shader);
  }
}
