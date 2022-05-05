import { Vector2 } from '../../math/vector2';
import { Circle2D } from './circle2D';
import { IShape2D } from './IShape2D';

export class Rectangle2D implements IShape2D {
  public origin: Vector2 = Vector2.zero;
  public position: Vector2 = Vector2.zero;

  public width: number | undefined;
  public height: number | undefined;

  public get offset(): Vector2 {
    return new Vector2(
      //@ts-ignore
      this.width * this.origin.x,
      //@ts-ignore
      this.height * this.origin.y
    );
  }

  setFromJson(json: any): void {
    if (json.position) {
      this.position.setFromJson(json.position);
    }

    if (json.origin) {
      this.origin.setFromJson(json.origin);
    }

    if (json.width === undefined) {
      throw new Error('rectangle2d requires width to be present.');
    }
    this.width = Number(json.width);

    if (json.height === undefined) {
      throw new Error('rectangle2d requires height to be present.');
    }
    this.height = Number(json.height);
  }

  public intersects(otherShape: IShape2D): boolean {
    if (
      otherShape instanceof Rectangle2D &&
      otherShape.width &&
      otherShape.height
    ) {
      return (
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
      );
    }

    if (
      otherShape instanceof Circle2D &&
      otherShape.radius &&
      this.width &&
      this.height
    ) {
      const deltaX =
        otherShape.position.x -
        Math.max(
          this.position.x,
          Math.min(otherShape.position.x, this.position.x + this.width)
        );

      const deltaY =
        otherShape.position.y -
        Math.max(
          this.position.y,
          Math.min(otherShape.position.y, this.position.y + this.height)
        );

      if (
        deltaX * deltaX + deltaY * deltaY <
        otherShape.radius * otherShape.radius
      ) {
        return true;
      }
    }

    return false;
  }

  public pointInShape(point: Vector2): boolean {
    if (this.width && this.height) {
      let x = this.width < 0 ? this.position.x - this.width : this.position.x;
      let y = this.height < 0 ? this.position.y - this.height : this.position.y;

      let extentX =
        this.width < 0 ? this.position.x : this.position.x + this.width;
      let extentY =
        this.height < 0 ? this.position.y : this.position.y + this.height;

      if (
        point.x >= x &&
        point.x <= extentX &&
        point.y >= y &&
        point.y <= extentY
      ) {
        return true;
      }
    }

    return false;
  }
}
