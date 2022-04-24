import { SimObject } from '../world/simObject';
import { IBehavior } from './IBehavior';
import { IBehaviorData } from './IBehaviorData';

export abstract class BaseBehavior implements IBehavior {
  public name: string;

  protected _data: IBehaviorData;
  protected _owner: SimObject | undefined;

  public constructor(data: IBehaviorData) {
    this._data = data;
    this.name = this._data.name;
  }

  public setOwner(owner: SimObject): void {
    this._owner = owner;
  }

  public updateReady(): void {}

  public update(time: number): void {}

  public apply(userData: any): void {}
}
