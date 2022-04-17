import { IAsset } from './iAsset';

export interface IAssetLoader {
  readonly supportedExtensions: string[];

  loadAsset(assetName: string): void;
}
