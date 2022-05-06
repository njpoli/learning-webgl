import { CollisionComponent } from '../components/collisionComponent';
import { Message } from '../core/message/message';

export class CollisionData {
  public time: number;
  public a: CollisionComponent | undefined;
  public b: CollisionComponent | undefined;

  public constructor(
    time: number,
    a: CollisionComponent,
    b: CollisionComponent
  ) {
    this.time = time;
    this.a = a;
    this.b = b;
  }
}

export class CollisionManager {
  private static _totalTime: number = 0;
  private static _components: CollisionComponent[] = [];

  private static _collisionData: CollisionData[] = [];

  private constructor() {}

  public static registerCollisionComponent(component: CollisionComponent) {
    CollisionManager._components.push(component);
  }

  public static unregisterCollisionComponent(component: CollisionComponent) {
    const idx = CollisionManager._components.indexOf(component);
    if (idx !== -1) {
      CollisionManager._components = CollisionManager._components.filter(
        (_, i) => i !== idx
      );
    }
  }

  public static clear(): void {
    CollisionManager._components.length = 0;
  }

  public static update(time: number): void {
    CollisionManager._totalTime += time;

    for (let c = 0; c < CollisionManager._components.length; c++) {
      let comp = CollisionManager._components[c];
      for (let o = c + 1; o < CollisionManager._components.length; o++) {
        let other = CollisionManager._components[o];
        // If both shapes are static, stop detection.
        if (comp && other && comp.isStatic && other.isStatic) {
          continue;
        }

        if (comp.shape.intersects(other.shape)) {
          // Have a collision
          let exists: boolean = false;
          for (let d = 0; d < CollisionManager._collisionData.length; d++) {
            let data = CollisionManager._collisionData[d];
            if (
              (data.a === comp && data.b === other) ||
              (data.b === comp && data.a === other)
            ) {
              // We have existing data. Update it.
              // onCollisionUpdate
              comp.onCollisionUpdate(other);
              other.onCollisionUpdate(comp);
              data.time = CollisionManager._totalTime;
              exists = true;
              break;
            }
          }

          if (!exists) {
            // Create a collision
            // onCollisionEntry
            comp.onCollisionEntry(other);
            other.onCollisionEntry(comp);
            const coll = new CollisionData(
              CollisionManager._totalTime,
              comp,
              other
            );
            Message.sendPriority('COLLISION_ENTRY:' + comp.name, this, coll);
            Message.sendPriority('COLLISION_ENTRY:' + other.name, this, coll);
            this._collisionData.push(coll);
          }
        }
      }
    }

    // Remove stale collision data.
    const removeData: CollisionData[] = [];
    for (let d = 0; d < CollisionManager._collisionData.length; d++) {
      const data = CollisionManager._collisionData[d];
      if (data.time !== CollisionManager._totalTime) {
        // Old collision data
        // onCollisionExit
        removeData.push(data);
        // @ts-ignore
        data.a?.onCollisionExit(data.b);
        // @ts-ignore
        data.b?.onCollisionExit(data.a);
        // @ts-ignore
        Message.sendPriority('COLLISION_EXIT:' + data.a.name, this, data);
        // @ts-ignore
        Message.sendPriority('COLLISION_EXIT:' + data.b.name, this, data);
      }
    }

    while (removeData.length !== 0) {
      const idx = CollisionManager._collisionData.indexOf(removeData[0]);

      CollisionManager._collisionData.splice(idx, 1);
      removeData.shift();
    }
  }
}
