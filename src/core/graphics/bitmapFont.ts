import {
  AssetManager,
  MESSAGE_ASSET_LOADER_ASSET_LOADED,
} from '../assets/assetManager';
import { TextAsset } from '../assets/textAssetLoader';
import { Vector2 } from '../math/vector2';
import { IMessageHandler } from '../message/IMessageHandler';
import { Message } from '../message/message';

class FontUtilities {
  public static extractFieldValue(field: string): string {
    return field.split('=')[1];
  }
}

export class FontGlyph {
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public x: number;
  // @ts-ignore
  public y: number;
  // @ts-ignore
  public width: number;
  // @ts-ignore
  public height: number;
  // @ts-ignore
  public xOffset: number;
  // @ts-ignore
  public yOffset: number;
  // @ts-ignore
  public xAdvance: number;
  // @ts-ignore
  public page: number;
  // @ts-ignore
  public channel: number;

  public static fromFields(fields: string[]): FontGlyph {
    const glyph: FontGlyph = new FontGlyph();

    glyph.id = Number(FontUtilities.extractFieldValue(fields[1]));
    glyph.x = Number(FontUtilities.extractFieldValue(fields[2]));
    glyph.y = Number(FontUtilities.extractFieldValue(fields[3]));
    glyph.width = Number(FontUtilities.extractFieldValue(fields[4]));
    glyph.height = Number(FontUtilities.extractFieldValue(fields[5]));
    glyph.xOffset = Number(FontUtilities.extractFieldValue(fields[6]));
    glyph.yOffset = Number(FontUtilities.extractFieldValue(fields[7]));
    glyph.xAdvance = Number(FontUtilities.extractFieldValue(fields[8]));
    glyph.page = Number(FontUtilities.extractFieldValue(fields[9]));
    glyph.channel = Number(FontUtilities.extractFieldValue(fields[10]));

    return glyph;
  }
}

export class BitmapFont implements IMessageHandler {
  private _name: string;
  private _fontFileName: string;
  private _assetLoaded: boolean = false;
  // @ts-ignore
  private _imageFile: string;
  private _glyphs: { [id: number]: FontGlyph } = {};
  // @ts-ignore
  private _size: number;
  // @ts-ignore
  private _imageWidth: number;
  // @ts-ignore
  private _imageHeight: number;

  public constructor(name: string, fontFileName: string) {
    this._name = name;
    this._fontFileName = fontFileName;
  }

  public get name(): string {
    return this._name;
  }

  public get size(): number {
    return this._size;
  }

  public get imageWidth(): number {
    return this._imageWidth;
  }

  public get imageHeight(): number {
    return this._imageHeight;
  }

  public get textureName(): string {
    return this._imageFile;
  }

  public get isLoaded(): boolean {
    return this._assetLoaded;
  }

  public load(): void {
    const asset = AssetManager.getAsset(this._fontFileName);
    if (asset !== undefined) {
      this.processFontFile(String(asset.data));
    } else {
      Message.subscribe(
        MESSAGE_ASSET_LOADER_ASSET_LOADED + this._fontFileName,
        this
      );
    }
  }

  onMessage(message: Message): void {
    if (
      message.code ===
      MESSAGE_ASSET_LOADER_ASSET_LOADED + this._fontFileName
    ) {
      this.processFontFile(String((message.context as TextAsset).data));
    } else if (
      this._imageFile &&
      message.code === MESSAGE_ASSET_LOADER_ASSET_LOADED + this._imageFile
    ) {
    }
  }

  public getGlyph(char: string): FontGlyph {
    // replace unrecognized characters with a '0'.
    let code = char.charCodeAt(0);
    code = this._glyphs[code] === undefined ? 48 : code;

    return this._glyphs[code];
  }

  public measureText(text: string): Vector2 {
    let size: Vector2 = Vector2.zero;

    let maxX = 0;
    let x = 0;
    let y = 0;

    text.split('').forEach((c) => {
      switch (c) {
        case '\n':
          if (x > maxX) {
            maxX = x;
          }
          x = 0;
          y += this._size;
          break;
        default:
          x += this.getGlyph(c).xAdvance;
          break;
      }
    });

    size.set(maxX, y);
    return size;
  }

  private processFontFile(content: string): void {
    let charCount: number = 0;
    let lines: string[] = content.split('\n');
    lines.forEach((line) => {
      // Sanitize line
      const data = line.replace(/\s\s+/g, ' ');
      const fields = data.split(' ');

      // Look at type of line
      switch (fields[0]) {
        case 'info':
          this._size = Number(FontUtilities.extractFieldValue(fields[4]));
          break;
        case 'common':
          this._imageWidth = Number(FontUtilities.extractFieldValue(fields[3]));
          this._imageHeight = Number(
            FontUtilities.extractFieldValue(fields[4])
          );
          break;
        case 'page':
          {
            const id = Number(FontUtilities.extractFieldValue(fields[1]));

            this._imageFile = FontUtilities.extractFieldValue(fields[2]);
            // Strip quotes
            this._imageFile = this._imageFile.replace(/"/g, '');

            // Prepend the path to the image name.  TODO: This should be configurable
            this._imageFile = 'src/assets/fonts/' + this._imageFile.trim();
          }
          break;
        case 'chars':
          charCount = Number(FontUtilities.extractFieldValue(fields[1]));
          break;
        case 'char':
          const glyph = FontGlyph.fromFields(fields);
          this._glyphs[glyph.id] = glyph;
          break;
      }
    });

    // Verify the loaded glyphs
    let actualGlyphCount = 0;

    //Only count properties
    let keys = Object.keys(this._glyphs);

    keys.forEach((key) => {
      if (this._glyphs.hasOwnProperty(key)) {
        actualGlyphCount++;
      }
    });

    if (actualGlyphCount !== charCount) {
      throw new Error(
        `Font file reported existence of ${charCount} glyphs, but only ${actualGlyphCount} were found.`
      );
    }

    this._assetLoaded = true;
  }
}
