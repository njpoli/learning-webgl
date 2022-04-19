import { Shader } from '../gl/shader';
import { Matrix4x4 } from '../math/matrix4x4';
import { Transform } from '../math/transform';

export class SimObject {
  private _id: number;
  private _children: SimObject[] = [];
  private _parent: SimObject | undefined;
  private _isLoaded: boolean = false;
  //  private _scene

  private _localMatrix: Matrix4x4 = Matrix4x4.identity();
  private _worldMatrix: Matrix4x4 = Matrix4x4.identity();

  public name: string;

  public transform: Transform = new Transform();

  public constructor(id: number, name: string) {
    this._id = id;
    this.name = name;
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

  private get isLoaded(): boolean {
    return this._isLoaded;
  }

  public addChild(child: SimObject): void {
    child._parent = this;
    this._children.push(child);
  }

  public removeChild(child: SimObject): void {
    let index = this._children.indexOf(child);
    if (index !== -1) {
      child._parent = undefined;
      // double check this works
      this._children = this._children.filter((_, idx) => index !== idx);
    }
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

  public load(): void {
    this._isLoaded = true;

    for (let child of this._children) {
      child.load();
    }
  }

  public update(time: number): void {
    for (let child of this._children) {
      child.update(time);
    }
  }

  public render(shader: Shader): void {
    for (let child of this._children) {
      child.render(shader);
    }
  }
}
