import { Vector2 } from '../../math/vector2';
import { Circle2D } from './circle2D';
import { IShape2D } from './IShape2D';

export class Rectangle2D implements IShape2D {
  public origin: Vector2 = Vector2.zero;
  public position: Vector2 = Vector2.zero;

  public width: number | undefined;
  public height: number | undefined;

  public constructor(
    x: number = 0,
    y: number = 0,
    width: number = 0,
    height: number = 0
  ) {
    this.position.x = x;
    this.position.y = y;
    this.width = width;
    this.height = height;
  }

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
    if (otherShape instanceof Rectangle2D) {
      const a = this.getExtents(this);
      const b = this.getExtents(otherShape);

      if (
        a.width !== undefined &&
        a.height !== undefined &&
        b.width !== undefined &&
        b.height !== undefined
      )
        return (
          a.position.x <= b.width &&
          a.width >= b.position.x &&
          a.position.y <= b.height &&
          a.height >= b.position.y
        );
    }

    if (
      otherShape instanceof Circle2D &&
      otherShape.radius &&
      this.width !== undefined &&
      this.height !== undefined
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

  private getExtents(shape: Rectangle2D): Rectangle2D {
    if (shape.width === undefined || shape.height === undefined) {
      throw new Error('getExtents needs a shape with a height and a width');
    }

    const x =
      shape.width < 0 ? shape.position.x - shape.width : shape.position.x;
    const y =
      shape.height < 0 ? shape.position.y - shape.height : shape.position.y;

    const extentX =
      shape.width < 0 ? shape.position.x : shape.position.x + shape.width;
    const extentY =
      shape.height < 0 ? shape.position.y : shape.position.y + shape.height;

    return new Rectangle2D(x, y, extentX, extentY);
  }
}
