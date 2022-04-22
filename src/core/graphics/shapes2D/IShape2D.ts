import { Vector2 } from '../../math/vector2';

export interface IShape2D {
  position: Vector2;

  setFromJson(json: any): void;

  pointInShape(point: Vector2): boolean;
}
