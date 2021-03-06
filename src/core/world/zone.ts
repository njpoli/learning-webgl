import { ComponentManager } from '../../components/componentManager';
import { BehaviorManager } from '../behaviors/behaviorManager';
import { Shader } from '../gl/shader';
import { Scene } from './scene';
import { SimObject } from './simObject';

export enum ZoneState {
  UNINITIALIZED,
  LOADING,
  UPDATING,
}

export class Zone {
  private _name: string;
  private _id: number;
  private _description: string;
  private _scene: Scene;
  private _state: ZoneState = ZoneState.UNINITIALIZED;
  private _globalId: number = -1;

  public constructor(id: number, name: string, description: string) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._scene = new Scene();
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get scene(): Scene {
    return this._scene;
  }

  public initialize(zoneData: any): void {
    if (zoneData.objects === undefined) {
      throw new Error('Zone initialization error: objects not present');
    }

    zoneData.objects.forEach((o: any) => {
      this.loadSimObject(o as SimObject, this._scene.root);
    });
  }

  public load(): void {
    this._state = ZoneState.LOADING;

    this._scene.load();

    this._scene.root.updateReady();

    this._state = ZoneState.UPDATING;
  }

  public unload(): void {}

  public update(time: number): void {
    if ((this._state = ZoneState.UPDATING)) {
      this._scene.update(time);
    }
  }

  public render(shader: Shader): void {
    if ((this._state = ZoneState.UPDATING)) {
      this._scene.render(shader);
    }
  }

  public onActivated(): void {}

  public onDeactivated(): void {}

  private loadSimObject(dataSection: any, parent: SimObject | undefined): void {
    let name: string = '';
    if (dataSection.name !== undefined) {
      name = String(dataSection.name);
    }

    this._globalId++;
    let simObject = new SimObject(this._globalId, name, this._scene);

    if (dataSection.transform !== undefined) {
      simObject.transform.setFromJson(dataSection.transform);
    }

    if (dataSection.components) {
      dataSection.components.forEach((c: any) => {
        const component = ComponentManager.extractComponent(c);
        simObject.addComponent(component);
      });
    }

    if (dataSection.behaviors) {
      dataSection.behaviors.forEach((b: any) => {
        const behavior = BehaviorManager.extractBehavior(b);
        simObject.addBehavior(behavior);
      });
    }

    if (dataSection.children && dataSection.children.length > 0) {
      dataSection.children.forEach((o: any) => {
        this.loadSimObject(o, simObject);
      });
    }

    if (parent !== undefined) {
      parent.addChild(simObject);
    }
  }
}
