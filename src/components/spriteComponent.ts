import { Shader } from '../core/gl/shader';
import { Sprite } from '../core/graphics/sprite';
import { BaseComponent } from './baseComponent';
import { IComponent } from './IComponent';
import { IComponentBuilder } from './IComponentBuilder';
import { IComponentData } from './IComponentData';
import { Vector3 } from '../core/math/vector3';

export class SpriteComponentData implements IComponentData {
  public name: string = '';
  public materialName: string = '';
  public origin: Vector3 = Vector3.zero;
  public width: number | undefined;
  public height: number | undefined;

  public setFromJson(json: any): void {
    if (json.width) {
      this.width = Number(json.width);
    }
    if (json.height) {
      this.height = Number(json.height);
    }
    if (json.name) {
      this.name = String(json.name);
    }
    if (json.materialName) {
      this.materialName = String(json.materialName);
    }
    if (json.origin) {
      this.origin.setFromJson(json.origin);
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
    console.log('sprite json', json);

    return new SpriteComponent(data);
  }
}

export class SpriteComponent extends BaseComponent {
  private _sprite: Sprite;
  private _width: number | undefined;
  private _height: number | undefined;

  public constructor(data: SpriteComponentData) {
    super(data);
    console.log(`setting sprite data: `, data);
    if (data.width !== undefined) {
      this._width = Number(data.width);
    }
    if (data.height !== undefined) {
      this._height = Number(data.height);
    }
    this._sprite = new Sprite(
      data.name,
      data.materialName,
      this._width,
      this._height
    );

    if (!data.origin.equals(Vector3.zero)) {
      this._sprite.origin.copyFrom(data.origin);
    }
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
