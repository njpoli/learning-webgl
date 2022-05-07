import { BitmapFont } from './bitmapFont';

export class BitmapFontManager {
  private static _fonts: { [name: string]: BitmapFont } = {};

  public static addFont(name: string, fontFileName: string): void {
    BitmapFontManager._fonts[name] = new BitmapFont(name, fontFileName);
  }

  public static getFont(name: string): BitmapFont {
    if (BitmapFontManager._fonts[name] === undefined) {
      throw new Error(`A font named ${name} does not exist`);
    }

    return BitmapFontManager._fonts[name];
  }

  public static load(): void {
    let keys = Object.keys(BitmapFontManager._fonts);
    keys.forEach((key) => {
      BitmapFontManager._fonts[key].load();
    });
  }

  public static updateReady(): boolean {
    let keys = Object.keys(BitmapFontManager._fonts);
    keys.forEach((key) => {
      if (!BitmapFontManager._fonts[key].isLoaded) {
        console.debug(`font ${key} is still loading`);
        return false;
      }
    });

    console.debug('All fonts are loaded');
    return true;
  }
}
