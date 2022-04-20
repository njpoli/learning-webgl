import { Shader } from '../core/gl/shader';
import { Sprite } from '../core/graphics/sprite';
import { BaseComponent } from './baseComponent';
import { IComponent } from './IComponent';
import { IComponentBuilder } from './IComponentBuilder';
import { IComponentData } from './IComponentData';
import { ComponentManager } from './componentManager';

export class SpriteComponentData implements IComponentData {
  public name: string = '';
  public materialName: string = '';

  public setFromJson(json: any): void {
    if (json.name) {
      this.name = String(json.name);
    }
    if (json.materialName) {
      this.materialName = String(json.materialName);
    }
  }
}

export class SpriteComponentBuilder implements IComponentBuilder {
  public get type(): string {
    return 'sprite';
  }

  public buildFromJson(json: any): IComponent {
    let data = new SpriteComponentData();
    data.setFromJson(json);

    return new SpriteComponent(data);
  }
}

export class SpriteComponent extends BaseComponent {
  private _sprite: Sprite;

  public constructor(data: SpriteComponentData) {
    super(data);

    this._sprite = new Sprite(data.name, data.materialName);
  }

  public load(): void {
    this._sprite.load();
  }

  public render(shader: Shader): void {
    if (this._owner?.worldMatrix) {
      this._sprite.draw(shader, this._owner?.worldMatrix);
    }

    super.render(shader);
  }
}
