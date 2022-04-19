import { Shader } from '../core/gl/shader';
import { SimObject } from '../core/world/simObject';

export abstract class BaseComponent {
  protected _owner: SimObject | undefined;

  public name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public get owner(): SimObject | undefined {
    return this._owner;
  }

  public setOwner(owner: SimObject): void {
    this._owner = owner;
  }

  public load(): void {}

  public update(time: number): void {}

  public render(shader: Shader): void {}
}
