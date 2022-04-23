import { Vector2 } from '../../math/vector2';
import { IShape2D } from './IShape2D';
import { Rectangle2D } from './rectangle2d';

export class Circle2D implements IShape2D {
  public origin: Vector2 = Vector2.zero;
  public position: Vector2 = Vector2.zero;
  public radius: number | undefined;

  public get offset(): Vector2 {
    return new Vector2(
      // @ts-ignore
      this.radius + this.radius * this.origin.x,
      // @ts-ignore
      this.radius + this.radius * this.origin.y
    );
  }

  setFromJson(json: any): void {
    if (json.position) {
      this.position.setFromJson(json.position);
    }

    if (json.origin) {
      this.origin.setFromJson(json.origin);
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
      const radiusLengths = this.radius + otherShape.radius;
      if (distance <= radiusLengths) {
        return true;
      }
    }

    if (otherShape instanceof Rectangle2D) {
      if (!otherShape.width || !otherShape.height) {
        throw new Error(`${otherShape} requires a height and width`);
      }
      if (!this.radius) {
        throw new Error(`${this} requres a radius`);
      }
      let deltaX =
        this.position.x -
        Math.max(
          otherShape.position.x,
          Math.min(this.position.x, otherShape.position.x + otherShape.width)
        );
      let deltaY =
        this.position.y -
        Math.max(
          otherShape.position.y,
          Math.min(this.position.y, otherShape.position.y + otherShape.height)
        );
      if (deltaX * deltaX + deltaY * deltaY < this.radius * this.radius) {
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
