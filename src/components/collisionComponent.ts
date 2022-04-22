import { Shader } from '../core/gl/shader';
import { Sprite } from '../core/graphics/sprite';
import { BaseComponent } from './baseComponent';
import { IComponent } from './IComponent';
import { IComponentBuilder } from './IComponentBuilder';
import { IComponentData } from './IComponentData';
import { Vector3 } from '../core/math/vector3';
import { IShape2D } from '../core/graphics/shapes2D/IShape2D';
import { Rectangle2D } from '../core/graphics/shapes2D/rectangle2d';
import { Circle2D } from '../core/graphics/shapes2D/circle2D';

export class CollisionComponentData implements IComponentData {
  public name: string = '';
  public shape: IShape2D;

  public setFromJson(json: any): void {
    if (json.name) {
      this.name = String(json.name);
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

  public constructor(data: CollisionComponentData) {
    super(data);

    this._shape = data.shape;
  }

  public get shape(): IShape2D {
    return this._shape;
  }

  public render(shader: Shader): void {
    //if (this._owner?.worldMatrix) {
    //this._sprite.draw(shader, this._owner?.worldMatrix);
    //}

    super.render(shader);
  }
}
