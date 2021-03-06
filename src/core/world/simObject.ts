import { IComponent } from '../../components/IComponent';
import { IBehavior } from '../behaviors/IBehavior';
import { Shader } from '../gl/shader';
import { Matrix4x4 } from '../math/matrix4x4';
import { Transform } from '../math/transform';
import { Vector3 } from '../math/vector3';
import { Scene } from './scene';

export class SimObject {
  private _id: number;
  private _children: SimObject[] = [];
  private _parent: SimObject | undefined;
  private _isLoaded: boolean = false;
  private _scene: Scene | undefined;
  private _components: IComponent[] = [];
  private _behaviors: IBehavior[] = [];
  private _isVisible: boolean = true;

  private _localMatrix: Matrix4x4 = Matrix4x4.identity();
  private _worldMatrix: Matrix4x4 = Matrix4x4.identity();

  public name: string;

  public transform: Transform = new Transform();

  public constructor(id: number, name: string, scene?: Scene) {
    this._id = id;
    this.name = name;
    this._scene = scene;
  }

  public get id(): number {
    return this._id;
  }

  public get parent(): SimObject | undefined {
    return this._parent || undefined;
  }

  public get worldMatrix(): Matrix4x4 {
    return this._worldMatrix;
  }

  public get isLoaded(): boolean {
    return this._isLoaded;
  }

  public get isVisible(): boolean {
    return this._isVisible;
  }

  public set isVisible(value: boolean) {
    this._isVisible = value;
  }

  public addChild(child: SimObject): void {
    child._parent = this;
    this._children.push(child);
    if (this._scene) {
      child.onAdded(this._scene);
    }
  }

  public removeChild(child: SimObject): void {
    let index = this._children.indexOf(child);
    if (index !== -1) {
      child._parent = undefined;
      // double check this works
      this._children = this._children.filter((_, idx) => index !== idx);
    }
  }

  public getComponentByName(name: string): IComponent | undefined {
    for (let component of this._components) {
      if (component.name === name) {
        return component;
      }
    }

    for (let child of this._children) {
      let component = child.getComponentByName(name);
      if (component !== undefined) {
        return component;
      }
    }
    return undefined;
  }

  public getBehaviorByName(name: string): IBehavior | undefined {
    for (let behavior of this._behaviors) {
      if (behavior.name === name) {
        return behavior;
      }
    }

    for (let child of this._children) {
      let behavior = child.getBehaviorByName(name);
      if (behavior !== undefined) {
        return behavior;
      }
    }
    return undefined;
  }

  public getObjectByName(name: string): SimObject | undefined {
    if (this.name === name) {
      return this;
    }

    for (let child of this._children) {
      let result = child.getObjectByName(name);
      if (result !== undefined) {
        return result;
      }
    }

    return undefined;
  }

  public addComponent(component: IComponent): void {
    this._components.push(component);
    component.setOwner(this);
  }

  public addBehavior(behavior: IBehavior): void {
    this._behaviors.push(behavior);
    behavior.setOwner(this);
  }

  public load(): void {
    this._isLoaded = true;

    this._components.forEach((component) => {
      component.load();
    });

    for (let child of this._children) {
      child.load();
    }
  }

  public updateReady(): void {
    this._components.forEach((component) => {
      component.updateReady();
    });

    this._behaviors.forEach((behavior) => {
      behavior.updateReady();
    });

    for (let child of this._children) {
      child.updateReady();
    }
  }

  public update(time: number): void {
    this._localMatrix = this.transform.getTransformationMatrix();
    this.updateWorldMatrix(
      this._parent !== undefined ? this._parent.worldMatrix : undefined
    );

    this._components.forEach((component) => {
      component.update(time);
    });

    this._behaviors.forEach((behavior) => {
      behavior.update(time);
    });

    for (let child of this._children) {
      child.update(time);
    }
  }

  public render(shader: Shader): void {
    if (!this._isVisible) {
      return;
    }

    this._components.forEach((component) => {
      component.render(shader);
    });

    for (let child of this._children) {
      child.render(shader);
    }
  }

  public getWorldPosition(): Vector3 {
    return new Vector3(
      this._worldMatrix.data[12],
      this._worldMatrix.data[13],
      this._worldMatrix.data[14]
    );
  }

  protected onAdded(scene: Scene): void {
    this._scene = scene;
  }

  private updateWorldMatrix(parentWorldMatrix: Matrix4x4 | undefined): void {
    if (parentWorldMatrix !== undefined) {
      this._worldMatrix = Matrix4x4.multiply(
        parentWorldMatrix,
        this._localMatrix
      );
    } else {
      this._worldMatrix.copyFrom(this._localMatrix);
    }
  }
}
