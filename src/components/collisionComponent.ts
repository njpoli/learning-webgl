import { Shader } from '../core/gl/shader';
import { BaseComponent } from './baseComponent';
import { IComponent } from './IComponent';
import { IComponentBuilder } from './IComponentBuilder';
import { IComponentData } from './IComponentData';
import { IShape2D } from '../core/graphics/shapes2D/IShape2D';
import { Rectangle2D } from '../core/graphics/shapes2D/rectangle2d';
import { Circle2D } from '../core/graphics/shapes2D/circle2D';
import { CollisionManager } from '../collision/collisionManager';

export class CollisionComponentData implements IComponentData {
  public name: string = '';
  public shape: IShape2D | undefined;
  public static: boolean = true;

  public setFromJson(json: any): void {
    if (json.name) {
      this.name = String(json.name);
    }
    if (json.static !== undefined) {
      this.static = Boolean(json.static);
    }
    if (json.shape?.type) {
      switch (String(json.shape.type).toLowerCase()) {
        case 'rectangle':
          this.shape = new Rectangle2D();
          break;
        case 'circle':
          this.shape = new Circle2D();
          break;
        default:
          throw new Error('Unsupported shape type: ' + json.shape.type);
      }

      this.shape.setFromJson(json.shape);
    } else {
      throw new Error(
        'CollisionComponentData requires "shape" and "shape.type" to be present.'
      );
    }
  }
}

export class CollisionComponentBuilder implements IComponentBuilder {
  public get type(): string {
    return 'collision';
  }

  public buildFromJson(json: any): IComponent {
    let data = new CollisionComponentData();
    data.setFromJson(json);

    return new CollisionComponent(data);
  }
}

export class CollisionComponent extends BaseComponent {
  private _shape: IShape2D;
  private _static: boolean;

  public constructor(data: CollisionComponentData) {
    super(data);

    if (!data.shape) {
      throw new Error('Data is missing "shape" property:');
    }
    this._shape = data.shape;
    this._static = data.static;
  }

  public get shape(): IShape2D {
    return this._shape;
  }

  public get isStatic(): boolean {
    return this._static;
  }

  public load(): void {
    super.load();

    if (this.owner) {
      this._shape.position.copyFrom(
        this.owner.getWorldPosition().toVector2().subtract(this._shape.offset)
      );
    }

    // Tell the collision manager that we exist.
    CollisionManager.registerCollisionComponent(this);
  }

  public update(time: number): void {
    if (this.owner) {
      this._shape.position.copyFrom(
        this.owner.getWorldPosition().toVector2().subtract(this._shape.offset)
      );
    }

    super.update(time);
  }

  public render(shader: Shader): void {
    //if (this._owner?.worldMatrix) {
    //this._sprite.draw(shader, this._owner?.worldMatrix);
    //}

    super.render(shader);
  }

  public onCollisionEntry(other: CollisionComponent): void {}
  public onCollisionUpdate(other: CollisionComponent): void {}
  public onCollisionExit(other: CollisionComponent): void {}
}
