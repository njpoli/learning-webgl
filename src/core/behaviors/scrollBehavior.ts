import { Vector2 } from '../math/vector2';
import { IMessageHandler } from '../message/IMessageHandler';
import { Message } from '../message/message';
import { BaseBehavior } from './baseBehavior';
import { IBehavior } from './IBehavior';
import { IBehaviorBuilder } from './IBehaviorBuilder';
import { IBehaviorData } from './IBehaviorData';

export class ScrollBehaviorData implements IBehaviorData {
  // @ts-ignore
  public name: string;
  public velocity: Vector2 = Vector2.zero;
  public minPosition: Vector2 = Vector2.zero;
  public resetPosition: Vector2 = Vector2.zero;
  public startMessage: string | undefined;
  public stopMessage: string | undefined;
  public resetMessage: string | undefined;

  setFromJson(json: any): void {
    if (json.name === undefined) {
      throw new Error('Name not defined in behavior data.');
    }

    this.name = String(json.name);

    if (json.startMessage !== undefined) {
      this.startMessage = String(json.startMessage);
    }

    if (json.stopMessage !== undefined) {
      this.stopMessage = String(json.stopMessage);
    }

    if (json.resetMessage !== undefined) {
      this.resetMessage = String(json.resetMessage);
    }

    if (json.velocity !== undefined) {
      this.velocity.setFromJson(json.velocity);
    } else {
      throw new Error(
        'ScrollBehaviorData requires property "velocity" to be defined.'
      );
    }

    if (json.minPosition !== undefined) {
      this.minPosition.setFromJson(json.minPosition);
    } else {
      throw new Error(
        'ScrollBehaviorData requires property "minPosition" to be defined.'
      );
    }

    if (json.resetPosition !== undefined) {
      this.resetPosition.setFromJson(json.resetPosition);
    } else {
      throw new Error(
        'ScrollBehaviorData requires property "resetPosition" to be defined.'
      );
    }
  }
}

export class ScrollBehaviorBuilder implements IBehaviorBuilder {
  public get type(): string {
    return 'scroll';
  }

  buildFromJson(json: any): IBehavior {
    let data = new ScrollBehaviorData();
    data.setFromJson(json);
    return new ScrollBehavior(data);
  }
}

export class ScrollBehavior extends BaseBehavior implements IMessageHandler {
  private _velocity: Vector2 = Vector2.zero;
  private _minPosition: Vector2 = Vector2.zero;
  private _resetPosition: Vector2 = Vector2.zero;
  private _startMessage: string | undefined;
  private _stopMessage: string | undefined;
  private _resetMessage: string | undefined;
  private _isScrolling: boolean = false;
  private _initialPosition: Vector2 = Vector2.zero;

  public constructor(data: ScrollBehaviorData) {
    super(data);

    this._velocity.copyFrom(data.velocity);
    this._minPosition.copyFrom(data.minPosition);
    this._resetPosition.copyFrom(data.resetPosition);
    this._startMessage = data.startMessage;
    this._stopMessage = data.stopMessage;
    this._resetMessage = data.resetMessage;
  }

  public updateReady(): void {
    super.updateReady();

    if (this._startMessage !== undefined) {
      Message.subscribe(this._startMessage, this);
    }

    if (this._stopMessage !== undefined) {
      Message.subscribe(this._stopMessage, this);
    }

    if (this._resetMessage !== undefined) {
      Message.subscribe(this._resetMessage, this);
    }
  }

  public update(time: number): void {
    if (this._isScrolling) {
      this._owner!.transform.position.add(
        this._velocity
          .clone()
          .scale(time / 1000)
          .toVector3()
      );

      if (
        this._owner!.transform.position.x <= this._minPosition.x &&
        this._owner!.transform.position.y <= this._minPosition.y
      ) {
        this.reset();
      }
    }
  }

  onMessage(message: Message): void {
    if (message.code == this._startMessage) {
      this._isScrolling = true;
    }

    if (message.code == this._stopMessage) {
      this._isScrolling = false;
    }

    if (message.code == this._resetMessage) {
      this.initial();
    }
  }

  private reset(): void {
    this._owner!.transform.position.copyFrom(this._resetPosition.toVector3());
  }

  private initial(): void {
    this._owner!.transform.position.copyFrom(this._initialPosition.toVector3());
  }
}
