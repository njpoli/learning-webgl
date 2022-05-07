import { MouseContext } from '../input/inputManager';
import { IMessageHandler } from '../message/IMessageHandler';
import { Message } from '../message/message';
import { BaseBehavior } from './baseBehavior';
import { IBehavior } from './IBehavior';
import { IBehaviorBuilder } from './IBehaviorBuilder';
import { IBehaviorData } from './IBehaviorData';

export class MouseClickBehaviorData implements IBehaviorData {
  // @ts-ignore
  public name: string;
  // @ts-ignore
  public width: number;
  // @ts-ignore
  public height: number;
  // @ts-ignore
  public messageCode: string;

  setFromJson(json: any): void {
    if (json.name === undefined) {
      throw new Error('Name must be defined in behavior data');
    }

    this.name = String(json.name);

    if (json.width === undefined) {
      throw new Error('Width must be defined in behavior data');
    }

    this.width = Number(json.width);

    if (json.height === undefined) {
      throw new Error('Height must be defined in behavior data');
    }

    this.height = Number(json.height);

    if (json.messageCode === undefined) {
      throw new Error('MessageCode must be defined in behavior data');
    }

    this.messageCode = String(json.messageCode);
  }
}

export class MouseClickBehaviorBuilder implements IBehaviorBuilder {
  public get type(): string {
    return 'mouseClick';
  }

  public buildFromJson(json: any): MouseClickBehavior {
    let data = new MouseClickBehaviorData();
    data.setFromJson(json);
    return new MouseClickBehavior(data);
  }
}

export class MouseClickBehavior
  extends BaseBehavior
  implements IMessageHandler
{
  private _width: number;
  private _height: number;
  private _messageCode: string;

  public constructor(data: MouseClickBehaviorData) {
    super(data);

    this._width = data.width;
    this._height = data.height;
    this._messageCode = data.messageCode;
    Message.subscribe('MOUSE_UP', this);
  }

  public onMessage(message: Message): void {
    if (message.code === 'MOUSE_UP') {
      if (this._owner) {
        if (!this._owner.isVisible) {
          return;
        }

        let context = message.context as MouseContext;
        let worldPos = this._owner.getWorldPosition();
        let extentX = worldPos.x + this._width;
        let extentY = worldPos.y + this._height;
        if (
          context.position.x >= worldPos.x &&
          context.position.x <= extentX &&
          context.position.y >= worldPos.y &&
          context.position.y <= extentY
        ) {
          Message.send(this._messageCode, this);
        }
      }
    }
  }
}
