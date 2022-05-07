import { IMessageHandler } from '../message/IMessageHandler';
import { Message } from '../message/message';
import { BaseBehavior } from './baseBehavior';
import { IBehavior } from './IBehavior';
import { IBehaviorBuilder } from './IBehaviorBuilder';
import { IBehaviorData } from './IBehaviorData';

export class VisibilityOnMessageBehaviorData implements IBehaviorData {
  // @ts-ignore
  public name: string;
  // @ts-ignore
  public messageCode: string;
  // @ts-ignore
  public visible: boolean;

  setFromJson(json: any): void {
    if (json.messageCode === undefined) {
      throw new Error(
        'VisibilityOnMessageBehaviorData requires "messageCode" to be defined'
      );
    }

    this.messageCode = String(json.messageCode);

    if (json.visible === undefined) {
      throw new Error(
        'VisibilityOnMessageBehaviorData requires "visible" to be defined'
      );
    }

    this.visible = Boolean(json.visible);
  }
}

export class VisibilityOnMessageBehaviorBuilder implements IBehaviorBuilder {
  public get type(): string {
    return 'visibilityOnMessage';
  }

  buildFromJson(json: any): IBehavior {
    let data = new VisibilityOnMessageBehaviorData();
    data.setFromJson(json);
    return new VisibilityOnMessageBehavior(data);
  }
}

export class VisibilityOnMessageBehavior
  extends BaseBehavior
  implements IMessageHandler
{
  private _messageCode: string;
  private _visible: boolean;

  public constructor(data: VisibilityOnMessageBehaviorData) {
    super(data);

    this._messageCode = data.messageCode;
    this._visible = data.visible;

    Message.subscribe(this._messageCode, this);
  }

  public onMessage(message: Message): void {
    if (message.code === this._messageCode) {
      if (this._owner) {
        this._owner.isVisible = this._visible;
      }
    }
  }
}
