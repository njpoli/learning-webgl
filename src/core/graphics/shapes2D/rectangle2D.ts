import { Vector2 } from '../../math/vector2';
import { Circle2D } from './circle2D';
import { IShape2D } from './IShape2D';

export class Rectangle2D implements IShape2D {
  public position: Vector2 = Vector2.zero;

  public width: number | undefined;
  public height: number | undefined;

  setFromJson(json: any): void {
    if (json.position) {
      this.position.setFromJson(json.position);
    }

    if (json.width === undefined) {
      throw new Error('rectangle2d requires width to be present.');
    }
    this.width = json.width;

    if (json.height === undefined) {
      throw new Error('rectangle2d requires height to be present.');
    }
    this.height = json.height;
  }

  public intersects(otherShape: IShape2D): boolean {
    if (
      otherShape instanceof Rectangle2D &&
      otherShape.width &&
      otherShape.height
    ) {
      if (
        this.pointInShape(otherShape.position) ||
        this.pointInShape(
          new Vector2(
            otherShape.position.x + otherShape.width,
            otherShape.position.y
          )
        ) ||
        this.pointInShape(
          new Vector2(
            otherShape.position.x + otherShape.width,
            otherShape.position.y + otherShape.height
          )
        ) ||
        this.pointInShape(
          new Vector2(
            otherShape.position.x,
            otherShape.position.y + otherShape.height
          )
        )
      ) {
        return true;
      }
    }

    if (
      otherShape instanceof Circle2D &&
      otherShape.radius &&
      this.width &&
      this.height
    ) {
      if (
        otherShape.pointInShape(this.position) ||
        otherShape.pointInShape(
          new Vector2(this.position.x + this.width, this.position.y)
        ) ||
        otherShape.pointInShape(
          new Vector2(
            this.position.x + this.width,
            this.position.y + this.height
          )
        ) ||
        otherShape.pointInShape(
          new Vector2(this.position.x, this.position.y + this.height)
        )
      ) {
        return true;
      }
    }

    return false;
  }

  public pointInShape(point: Vector2): boolean {
    if (this.width && this.height) {
      if (
        point.x >= this.position.x &&
        point.x <= this.position.x + this.width
      ) {
        if (
          point.y >= this.position.y &&
          point.y <= this.position.y + this.height
        ) {
          return true;
        }
      }
    }
    return false;
  }
}
