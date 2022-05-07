import { AssetManager } from './assetManager';
import { IAsset } from './iAsset';
import { IAssetLoader } from './IAssetLoader';

export class TextAsset implements IAsset {
  public readonly name: string;
  public readonly data: unknown;

  public constructor(name: string, data: string) {
    this.name = name;
    this.data = data;
  }
}

export class TextAssetLoader implements IAssetLoader {
  public get supportedExtensions(): string[] {
    return ['txt'];
  }

  loadAsset(assetName: string): void {
    const request = new XMLHttpRequest();
    request.open('GET', assetName);
    request.addEventListener(
      'load',
      this.onTextLoaded.bind(this, assetName, request)
    );
    request.send();
  }

  private onTextLoaded(assetName: string, request: XMLHttpRequest): void {
    console.debug('onTextLoaded: assetname/request', assetName, request);

    if (request.readyState === request.DONE) {
      const asset = new TextAsset(assetName, request.responseText);
      AssetManager.onAssetLoaded(asset);
    }
  }
}
