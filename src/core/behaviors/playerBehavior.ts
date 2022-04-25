import { CollisionData } from '../../collision/collisionManager';
import { AnimatedSpriteComponent } from '../../components/animatedSpriteComponent';
import { AudioManager } from '../audio/audioManager';
import { MathExtensions } from '../math/mathExtensions';
import { Vector2 } from '../math/vector2';
import { IMessageHandler } from '../message/IMessageHandler';
import { Message } from '../message/message';
import { BaseBehavior } from './baseBehavior';
import { IBehavior } from './IBehavior';
import { IBehaviorBuilder } from './IBehaviorBuilder';
import { IBehaviorData } from './IBehaviorData';

export class PlayerBehaviorData implements IBehaviorData {
  public name: string = '';
  public acceleration: Vector2 = new Vector2(0, 920);
  public playerCollisionComponent: string = '';
  public groundCollisionComponent: string = '';
  public animatedSpriteName: string = '';

  public setFromJson(json: any): void {
    if (!json.name) {
      throw new Error('Name must be defined in behavior data.');
    }

    this.name = String(json.name);

    if (json.acceleration) {
      this.acceleration.setFromJson(json.acceleration);
    }

    if (!json.animatedSpriteName) {
      throw new Error('animatedSpriteName must be defined in behavior data.');
    }

    this.animatedSpriteName = String(json.animatedSpriteName);

    if (!json.playerCollisionComponent) {
      throw new Error(
        'playerCollisionComponent must be defined in behavior data.'
      );
    }

    this.playerCollisionComponent = String(json.playerCollisionComponent);

    if (!json.groundCollisionComponent) {
      throw new Error(
        'groundCollisionComponent must be defined in behavior data.'
      );
    }

    this.groundCollisionComponent = String(json.groundCollisionComponent);
  }
}

export class PlayerBehaviorBuilder implements IBehaviorBuilder {
  public get type(): string {
    return 'player';
  }

  buildFromJson(json: any): IBehavior {
    let data = new PlayerBehaviorData();
    data.setFromJson(json);
    return new PlayerBehavior(data);
  }
}

export class PlayerBehavior extends BaseBehavior implements IMessageHandler {
  private _acceleration: Vector2;
  private _velocity = Vector2.zero;
  private _isAlive: boolean = true;
  private _playerCollisionComponent: string = '';
  private _groundCollisionComponent: string = '';
  private _animatedSpriteName: string = '';

  //@ts-ignore
  private _sprite: AnimatedSpriteComponent;

  public constructor(data: PlayerBehaviorData) {
    super(data);

    this._acceleration = data.acceleration;
    this._playerCollisionComponent = data.playerCollisionComponent;
    this._groundCollisionComponent = data.groundCollisionComponent;
    this._animatedSpriteName = data.animatedSpriteName;

    Message.subscribe('MOUSE_DOWN', this);
    Message.subscribe(
      'COLLISION_ENTRY:' + this._playerCollisionComponent,
      this
    );
  }

  public updateReady(): void {
    super.updateReady();

    // Obtain a reference to the animated sprite
    this._sprite = this._owner?.getComponentByName(
      this._animatedSpriteName
    ) as AnimatedSpriteComponent;
  }

  public update(time: number): void {
    if (!this._isAlive) {
      return;
    }

    const spriteReady = this._owner?.getComponentByName(
      this._animatedSpriteName
    );
    if (!spriteReady) {
      return;
    }

    if (this._owner) {
      const seconds: number = time / 1000;
      this._velocity.add(this._acceleration.clone().scale(seconds));

      // Limit max speed of falling
      if (this._velocity.y > 400) {
        this._velocity.y = 400;
      }

      // Prevent flying too high
      if (this._owner.transform.position.y < -13) {
        this._owner.transform.position.y = -13;
        this._velocity.y = 0;
      }

      this._owner?.transform.position.add(
        this._velocity.clone().scale(seconds).toVector3()
      );

      if (this._velocity.y < 0) {
        this._owner.transform.rotation.z -=
          MathExtensions.degToRad(600.0) * seconds;
        if (this._owner.transform.rotation.z < MathExtensions.degToRad(-20)) {
          this._owner.transform.rotation.z = MathExtensions.degToRad(-20);
        }
      }

      if (this.isFalling() || !this._isAlive) {
        this._owner.transform.rotation.z +=
          MathExtensions.degToRad(480.0) * seconds;
        if (this._owner.transform.rotation.z > MathExtensions.degToRad(90)) {
          this._owner.transform.rotation.z = MathExtensions.degToRad(90);
        }
      }

      if (this.shouldNotFlap()) {
        this._sprite.stop();
      } else {
        if (!this._sprite.isPlaying()) {
          this._sprite.play();
        }
      }
    }

    super.update(time);
  }

  onMessage(message: Message): void {
    switch (message.code) {
      case 'MOUSE_DOWN':
        this.onFlap();
        break;
      case 'COLLISION_ENTRY:' + this._playerCollisionComponent:
        const data: CollisionData = message.context as CollisionData;
        if (
          data?.a?.name === this._groundCollisionComponent ||
          data?.b?.name === this._groundCollisionComponent
        ) {
          this.die();
          this.decelerate();
          Message.send('PLAYER_DIED', this);
        }
        break;
      default:
        console.log('got a message');
        break;
    }
  }

  private isFalling(): boolean {
    return this._velocity.y > 220.0;
  }

  private shouldNotFlap(): boolean {
    return this._velocity.y > 220.0 || !this._isAlive;
  }

  private die(): void {
    this._isAlive = false;
    AudioManager.playSound('dead');
  }

  private decelerate(): void {
    this._acceleration.y = 0;
    this._velocity.y = 0;
  }

  private onFlap(): void {
    if (this._isAlive) {
      this._velocity.y = -280;
      AudioManager.playSound('flap');
    }
  }

  private onRestart(y: number): void {
    if (this._owner) {
      this._owner.transform.rotation.z = 0;
      this._owner.transform.position.set(200, y);
      this._velocity.set(0, 0);
      this._acceleration.set(0, 920);
      this._isAlive = true;
      this._sprite.play();
    } else {
      throw new Error(
        `${this._animatedSpriteName}'s playerBehavior has no owner`
      );
    }
  }
}
