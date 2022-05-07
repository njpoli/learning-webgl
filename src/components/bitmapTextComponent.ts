import { Shader } from '../core/gl/shader';
import { BitmapText } from '../core/graphics/bitmapText';
import { Vector3 } from '../core/math/vector3';
import { BaseComponent } from './baseComponent';
import { IComponent } from './IComponent';
import { IComponentBuilder } from './IComponentBuilder';
import { IComponentData } from './IComponentData';

export class BitmapTextComponentData implements IComponentData {
  // @ts-ignore
  public name: string;
  // @ts-ignore
  public fontName: string;
  public origin: Vector3 = Vector3.zero;
  // @ts-ignore
  public text: string;

  setFromJson(json: any): void {
    if (json.name !== undefined) {
      this.name = String(json.name);
    }

    if (json.fontName !== undefined) {
      this.fontName = String(json.fontName);
    }

    if (json.text !== undefined) {
      this.text = String(json.text);
    }

    if (json.origin !== undefined) {
      this.origin = json.origin;
    }
  }
}

export class BitmapTextComponentBuilder implements IComponentBuilder {
  public get type(): string {
    return 'bitmapText';
  }

  buildFromJson(json: any): IComponent {
    let data = new BitmapTextComponentData();
    data.setFromJson(json);
    return new BitmapTextComponent(data);
  }
}

export class BitmapTextComponent extends BaseComponent {
  private _bitmapText: BitmapText;
  private _fontName: string;

  public constructor(data: BitmapTextComponentData) {
    super(data);
    this._fontName = data.fontName;
    this._bitmapText = new BitmapText(this.name, this._fontName);
    if (!data.origin.equals(Vector3.zero)) {
      this._bitmapText.origin.copyFrom(data.origin);
    }

    this._bitmapText.text = data.text;
  }

  public load(): void {
    this._bitmapText.load();
  }

  public update(time: number): void {
    this._bitmapText.update(time);
  }

  public render(shader: Shader): void {
    if (this._owner) {
      this._bitmapText.draw(shader, this._owner?.worldMatrix);
      super.render(shader);
    }
  }
}
