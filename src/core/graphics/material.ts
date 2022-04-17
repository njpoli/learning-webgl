import { Color } from './color';
import { Texture } from './texture';
import { TextureManager } from './textureManager';

export class Material {
  private _name: string;
  private _diffuseTextureName: string;

  // @ts-ignore
  private _diffuseTexture: Texture;
  private _tint: Color;

  public constructor(name: string, diffuseTextureName: string, tint: Color) {
    this._name = name;
    this._diffuseTextureName = diffuseTextureName;
    this._tint = tint;

    if (this._diffuseTextureName !== undefined) {
      this._diffuseTexture = TextureManager.getTexture(
        this._diffuseTextureName
      );
    }
  }

  public get name(): string {
    return this._name;
  }

  public get diffuseTextureName(): string {
    return this.diffuseTextureName;
  }

  public get diffuseTexture(): Texture {
    return this.diffuseTexture;
  }

  public get tint(): Color {
    return this._tint;
  }

  public set diffuseTextureName(value: string) {
    if (this._diffuseTexture !== undefined) {
      TextureManager.releaseTexture(this._diffuseTextureName);
    }
    this._diffuseTextureName = value;

    if (this._diffuseTextureName !== undefined) {
      this._diffuseTexture = TextureManager.getTexture(
        this._diffuseTextureName
      );
    }
  }

  public destroy(): void {
    TextureManager.releaseTexture(this._diffuseTextureName);
    //@ts-ignore
    this._diffuseTexture = undefined;
  }
}
