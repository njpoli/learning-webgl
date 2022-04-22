import { Vector2 } from '../../math/vector2';
import { IShape2D } from './IShape2D';

export class Circle2D implements IShape2D {
  public position: Vector2 = Vector2.zero;
  public radius: number | undefined;

  setFromJson(json: any): void {
    if (json.position) {
      this.position.setFromJson(json.position);
    }

    if (json.radius === undefined) {
      throw new Error('Circle2D requires radius to be present.');
    }
    this.radius = json.radius;
  }

  public intersects(otherShape: IShape2D): boolean {
    if (otherShape instanceof Circle2D && this.radius && otherShape.radius) {
      const distance = Math.abs(
        Vector2.distance(otherShape.position, this.position)
      );
      const radiusLength = this.radius * otherShape.radius;
      if (distance <= radiusLength) {
        return true;
      }
    }
    return false;
  }

  public pointInShape(point: Vector2): boolean {
    const absDistance = Math.abs(Vector2.distance(this.position, point));
    if (this.radius && absDistance <= this.radius) {
      return true;
    }

    return false;
  }
}
