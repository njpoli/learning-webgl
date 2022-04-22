export enum Keys {
  LEFT = 37,
  UP = 38,
  RIGHT = 39,
  DOWN = 40,
}

export class InputManager {
  private static _keys: boolean[] = [];

  public static initialize(): void {
    for (let i = 0; i < 255; i++) {
      InputManager._keys[i] = false;
    }

    window.addEventListener('keydown', InputManager.onKeyDown);
    window.addEventListener('keyup', InputManager.onKeyUp);
  }

  public static isKeyDown(key: Keys): boolean {
    return InputManager._keys[key];
  }

  private static onKeyDown(event: KeyboardEvent): boolean {
    InputManager._keys[event.keyCode] = true;
    if (event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 73) {
      event.preventDefault();
      event.stopPropagation();
    }
    return true;
  }

  private static onKeyUp(event: KeyboardEvent): boolean {
    InputManager._keys[event.keyCode] = false;
    if (event.keyCode !== 16 && event.keyCode !== 17 && event.keyCode !== 73) {
      event.preventDefault();
      event.stopPropagation();
    }
    return false;
  }
}
