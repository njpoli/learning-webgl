import { Shader } from '../core/gl/shader';
import { Sprite } from '../core/graphics/sprite';
import { BaseComponent } from './baseComponent';

export class SpriteComponent extends BaseComponent {
  private _sprite: Sprite;

  public constructor(name: string, materialName: string) {
    super(name);

    this._sprite = new Sprite(name, materialName);
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
