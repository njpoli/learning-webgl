import {
  AssetManager,
  MESSAGE_ASSET_LOADER_ASSET_LOADED,
} from '../assets/assetManager';
import { ImageAsset } from '../assets/imageAssetLoader';
import { Vector2 } from '../math/vector2';
import { IMessageHandler } from '../message/IMessageHandler';
import { Message } from '../message/message';
import { MaterialManager } from './materialManager';
import { Sprite } from './sprite';

class UVInfo {
  public min: Vector2;
  public max: Vector2;

  public constructor(min: Vector2, max: Vector2) {
    this.min = min;
    this.max = max;
  }
}

export class AnimatedSprite extends Sprite implements IMessageHandler {
  private _frameHeight: number;
  private _frameWidth: number;
  private _frameCount: number;
  private _frameSequence: number[];
  // TODO: Make this configurable
  private _frameTime: number = 121;
  private _frameUVs: UVInfo[] = [];
  private _currentTime: number = 0;

  private _currentFrame: number = 0;
  private _assetLoaded: boolean = false;
  private _assetWidth: number = 2;
  private _assetHeight: number = 2;
  private _isPlaying: boolean = true;

  public constructor(
    name: string,
    materialName: string,
    width: number = 100,
    height: number = 100,
    frameWidth: number = 10,
    frameHeight: number = 10,
    frameCount: number = 1,
    frameSequence: number[] = []
  ) {
    super(name, materialName, width, height);

    this._frameWidth = frameWidth;
    this._frameHeight = frameHeight;
    this._frameCount = frameCount;
    this._frameSequence = frameSequence;

    if (this._material) {
      Message.subscribe(
        MESSAGE_ASSET_LOADER_ASSET_LOADED + this._material.diffuseTextureName,
        this
      );
    }
  }

  public get isPlaying(): boolean {
    return this._isPlaying;
  }

  public play(): void {
    this._isPlaying = true;
  }

  public stop(): void {
    this._isPlaying = false;
  }

  public setFrame(frameNumber: number): void {
    if (frameNumber >= this._frameCount) {
      throw new Error(
        'Frame is our of range:' +
          frameNumber +
          '\nframeCount: ' +
          this._frameCount
      );
    }

    this._currentFrame = frameNumber;
  }

  public onMessage(message: Message): void {
    if (
      message.code ===
      MESSAGE_ASSET_LOADER_ASSET_LOADED + this._material?.diffuseTextureName
    ) {
      this._assetLoaded = true;
      let asset = message.context as ImageAsset;
      this._assetHeight = asset.height;
      this._assetWidth = asset.width;
      this.calculateUVs();
    }
  }

  public destroy(): void {
    super.destroy();
  }

  public load(): void {
    super.load();

    if (!this._assetLoaded) {
      this.setupFromMaterial();
    }
  }

  public update(time: number): void {
    // Hack around for not being instantiated before onMessage is sent
    // Revisit
    if (this._material && !this._assetLoaded) {
      this.setupFromMaterial();
      if (!this._assetLoaded) {
        return;
      }
    }

    if (!this._isPlaying) {
      return;
    }

    this._currentTime += time;
    if (this._currentTime > this._frameTime) {
      this._currentFrame++;
      this._currentTime = 0;

      if (this._currentFrame >= this._frameSequence.length) {
        this._currentFrame = 0;
      }

      const frameUVs = this._frameSequence[this._currentFrame];
      this._vertices[0].texCoords.copyFrom(this._frameUVs[frameUVs].min);
      this._vertices[1].texCoords.copyFrom(
        new Vector2(
          this._frameUVs[frameUVs].min.x,
          this._frameUVs[frameUVs].max.y
        )
      );
      this._vertices[2].texCoords.copyFrom(this._frameUVs[frameUVs].max);
      this._vertices[3].texCoords.copyFrom(this._frameUVs[frameUVs].max);
      this._vertices[4].texCoords.copyFrom(
        new Vector2(
          this._frameUVs[frameUVs].max.x,
          this._frameUVs[frameUVs].min.y
        )
      );
      this._vertices[5].texCoords.copyFrom(this._frameUVs[frameUVs].min);

      this._buffer?.clearData();
      this._vertices.forEach((v) => {
        this._buffer?.pushBackData(v.toArray());
      });
      this._buffer?.upload();
      this._buffer?.unbind();
    }

    super.update(time);
  }

  private calculateUVs(): void {
    let totalWidth: number = 0;
    let yValue: number = 0;
    for (let i = 0; i < this._frameCount; i++) {
      totalWidth = i * this._frameWidth;
      if (totalWidth > this._assetWidth) {
        yValue++;
        totalWidth = 0;
      }

      let u = (i * this._frameWidth) / this._assetWidth;
      let v = (yValue * this._frameHeight) / this._assetHeight;
      let min: Vector2 = new Vector2(u, v);

      let uMax = (i * this._frameWidth + this._frameWidth) / this._assetWidth;
      let vMax =
        (yValue * this._frameHeight + this._frameHeight) / this._assetHeight;
      let max: Vector2 = new Vector2(uMax, vMax);

      this._frameUVs.push(new UVInfo(min, max));
    }
  }

  private setupFromMaterial(): void {
    if (!this._assetLoaded) {
      const material = MaterialManager.getMaterial(this._materialName);
      if (material?.diffuseTexture?.isLoaded) {
        if (AssetManager.isAssetLoaded(material.diffuseTextureName)) {
          this._assetHeight = material.diffuseTexture.height;
          this._assetWidth = material.diffuseTexture.width;
          this._assetLoaded = true;
          this.calculateUVs();
        }
      }
    }
  }
}
