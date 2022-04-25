export class SoundEffect {
  private _player: HTMLAudioElement;

  public assetPath: string;

  public constructor(assetPath: string, loop: boolean) {
    this._player = new Audio(assetPath);
    this._player.volume = 0.05;
    this.assetPath = assetPath;
    this._player.loop = loop;
  }

  public get loop(): boolean {
    return this._player.loop;
  }

  public set loop(value: boolean) {
    this._player.loop = value;
  }

  public destroy(): void {
    // @ts-ignore
    this._player = undefined;
  }

  public isPaused(): boolean {
    return this._player.paused;
  }

  public play(): void {
    this._player.play();
  }

  public pause(): void {
    this._player.pause();
  }

  public stop(): void {
    this._player.pause();
    this._player.currentTime = 0;
  }
}

export class AudioManager {
  private static _soundEffects: { [name: string]: SoundEffect } = {};

  public static loadSoundFile(
    name: string,
    assetPath: string,
    loop: boolean
  ): void {
    AudioManager._soundEffects[name] = new SoundEffect(assetPath, loop);
  }

  public static playSound(name: string): void {
    if (AudioManager._soundEffects[name]) {
      AudioManager._soundEffects[name].play();
    } else {
      console.log(`could not play sound ${name}`);
    }
  }

  public static stopSound(name: string): void {
    if (AudioManager._soundEffects[name]) {
      AudioManager._soundEffects[name].stop();
    }
  }

  public static pauseSound(name: string): void {
    if (AudioManager._soundEffects[name]) {
      AudioManager._soundEffects[name].pause();
    }
  }

  public static toggleSound(name: string): void {
    const sound = AudioManager._soundEffects[name];
    if (sound) {
      sound.isPaused() ? sound.play() : sound.pause();
    }
  }

  public static pauseAll(): void {
    Object.values(AudioManager._soundEffects).forEach((sound) => {
      sound.pause();
    });
  }

  public static stopAll(): void {
    Object.values(AudioManager._soundEffects).forEach((sound) => {
      sound.stop();
    });
  }
}
