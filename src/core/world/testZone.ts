import { Shader } from '../gl/shader';
import { Sprite } from '../graphics/sprite';
import { Zone } from './zone';

export class TestZone extends Zone {
  private _sprite: Sprite | undefined;

  public load(): void {
    this._sprite = new Sprite('test', 'stoneWall');
    this._sprite.load();
    this._sprite.position.x = 200;
    this._sprite.position.y = 100;

    super.load();
  }

  public render(shader: Shader): void {
    if (this._sprite) {
      this._sprite.draw(shader);
    }

    super.render(shader);
  }
}
