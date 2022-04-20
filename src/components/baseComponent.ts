import { Shader } from '../core/gl/shader';
import { SimObject } from '../core/world/simObject';
import { IComponent } from './IComponent';
import { IComponentData } from './IComponentData';

export abstract class BaseComponent implements IComponent {
  protected _owner: SimObject | undefined;
  protected _data: IComponentData;

  public name: string;

  public constructor(data: IComponentData) {
    this._data = data;
    this.name = data.name;
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
