import { CollisionManager } from '../collision/collisionManager';
import { AnimatedSpriteComponentBuilder } from '../components/animatedSpriteComponent';
import { BitmapTextComponentBuilder } from '../components/bitmapTextComponent';
import { CollisionComponentBuilder } from '../components/collisionComponent';
import { ComponentManager } from '../components/componentManager';
import { SpriteComponentBuilder } from '../components/spriteComponent';
import { AssetManager } from './assets/assetManager';
import { AudioManager } from './audio/audioManager';
import { BehaviorManager } from './behaviors/behaviorManager';
import { KeyboardMovementBehaviorBuilder } from './behaviors/keyboardMovementBehavior';
import { PlayerBehaviorBuilder } from './behaviors/playerBehavior';
import { RotationBehaviorBuilder } from './behaviors/rotationBehavior';
import { ScrollBehaviorBuilder } from './behaviors/scrollBehavior';
import { gl, GLUtilities } from './gl/gl';
import { BasicShader } from './gl/shaders/basicShader';
import { BitmapFontManager } from './graphics/bitmapFontManager';
import { Color } from './graphics/color';
import { Material } from './graphics/material';
import { MaterialManager } from './graphics/materialManager';
import { InputManager, MouseContext } from './input/inputManager';
import { Matrix4x4 } from './math/matrix4x4';
import { IMessageHandler } from './message/IMessageHandler';
import { Message } from './message/message';
import { MessageBus } from './message/messageBus';
import { ZoneManager } from './world/zoneManager';

/**
 * The main game engine class
 */
export class Engine implements IMessageHandler {
  private _canvas: HTMLCanvasElement | undefined;
  private _basicShader: BasicShader | undefined;
  private _projection: Matrix4x4 | undefined;
  private _previousTime: number = 0;
  private _gameWidth: number | undefined;
  private _gameHeight: number | undefined;

  /**
   * Creates a new engine
   * @param width The width of the game in pixels
   * @param height The height of the game in pixels
   */
  public constructor(width?: number, height?: number) {
    this._gameWidth = width;
    this._gameHeight = height;

    Message.subscribe('MOUSE_DOWN', this);
  }

  /**
   * Starts up this engine
   */
  public start(): void {
    this._canvas = GLUtilities.initialize();
    if (this._gameWidth && this._gameHeight) {
      this._canvas.style.width = this._gameWidth + 'px';
      this._canvas.style.height = this._gameHeight + 'px';
      this._canvas.width = this._gameWidth;
      this._canvas.height = this._gameHeight;
    }

    AssetManager.initialize();
    InputManager.initialize();
    ZoneManager.initialize();

    gl.clearColor(99 / 255, 155 / 255, 255 / 255, 1);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let imageContext = require.context(
      '../assets/textures/',
      true,
      /\.(png|svg|jpg|jpeg|gif)$/i
    );
    let jsonContext = require.context('../assets/zones/', true, /\.(json)$/i);
    let audioContext = require.context(
      '../assets/sounds/',
      true,
      /\.(wav|mp3)$/i
    );
    let fontContext = require.context(
      '../assets/fonts/',
      true,
      /\.(png|txt)$/i
    );

    this.loadAll(imageContext);
    this.loadAll(jsonContext);
    this.loadAll(audioContext);
    this.loadAll(fontContext);

    this._basicShader = new BasicShader();
    this._basicShader.use();

    // Load fonts
    BitmapFontManager.addFont('default', 'src/assets/fonts/nate-8-bit.txt');
    BitmapFontManager.load();

    // Load materials
    MaterialManager.registerMaterial(
      new Material(
        'stoneWall',
        'src/assets/textures/stone_wall.jpg',
        Color.white()
      )
    );

    MaterialManager.registerMaterial(
      new Material(
        'woodPlank',
        'src/assets/textures/wood_plank.jpg',
        Color.white()
      )
    );

    MaterialManager.registerMaterial(
      new Material('bg', 'src/assets/textures/background.png', Color.white())
    );

    MaterialManager.registerMaterial(
      new Material('pipeEnd', 'src/assets/textures/pipe_end.png', Color.white())
    );

    MaterialManager.registerMaterial(
      new Material(
        'pipeBody',
        'src/assets/textures/pipe_body.png',
        Color.white()
      )
    );

    MaterialManager.registerMaterial(
      new Material('bird', 'src/assets/textures/bird_shrunk.png', Color.white())
    );

    MaterialManager.registerMaterial(
      new Material(
        'grass',
        'src/assets/textures/grass_bigger.png',
        Color.white()
      )
    );

    AudioManager.loadSoundFile(
      'birdJump',
      'src/assets/sounds/bird_jump.wav',
      false
    );

    AudioManager.loadSoundFile(
      'music',
      'src/assets/sounds/alf_remix.mp3',
      true
    );

    AudioManager.loadSoundFile('ting', 'src/assets/sounds/ting.wav', false);
    AudioManager.loadSoundFile(
      'flap',
      'src/assets/sounds/bird_jump.wav',
      false
    );
    AudioManager.loadSoundFile('dead', 'src/assets/sounds/death.wav', false);

    // Find a better place for this?
    ComponentManager.registerBuilder(new SpriteComponentBuilder());
    ComponentManager.registerBuilder(new AnimatedSpriteComponentBuilder());
    ComponentManager.registerBuilder(new CollisionComponentBuilder());
    ComponentManager.registerBuilder(new BitmapTextComponentBuilder());
    BehaviorManager.registerBuilder(new RotationBehaviorBuilder());
    BehaviorManager.registerBuilder(new PlayerBehaviorBuilder());
    BehaviorManager.registerBuilder(new KeyboardMovementBehaviorBuilder());
    BehaviorManager.registerBuilder(new ScrollBehaviorBuilder());

    this.resize();

    // Begin the preload phase, which waits for various elements to be loaded before starting the game.
    this.preloading();
  }

  /**
   * Resizes the canvas to fit the window.
   */
  public resize() {
    if (this._canvas !== undefined) {
      if (!this._gameWidth || !this._gameHeight) {
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
      }

      this._projection = Matrix4x4.orthographic(
        0,
        this._canvas.width,
        this._canvas.height,
        0,
        -100.0,
        100.0
      );

      gl.viewport(0, 0, this._canvas.width, this._canvas.height);
    }
  }

  private preloading(): void {
    // Make sure to always update the message bus.
    MessageBus.update(0);

    if (!BitmapFontManager.updateReady) {
      requestAnimationFrame(this.preloading.bind(this));
      return;
    }

    // Load up zone.  TODO: Make this configurable.
    ZoneManager.changeZone(0);

    // Kick off the render loop
    this.loop();
  }

  private loop(): void {
    this.update();
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }

  public onMessage(message: Message): void {
    const mouseContext = message.context as MouseContext;
    if (message.code === 'MOUSE_DOWN' && mouseContext) {
      Message.send('GAME_START', undefined, undefined);
    }
  }

  private loadAll(requireContext: __WebpackModuleApi.RequireContext) {
    requireContext.keys().forEach(requireContext);
  }

  private update(): void {
    let delta = performance.now() - this._previousTime;

    MessageBus.update(delta);

    ZoneManager.update(delta);

    CollisionManager.update(delta);

    this._previousTime = performance.now();
  }

  private render(): void {
    gl.clear(gl.COLOR_BUFFER_BIT);

    if (this._basicShader) {
      ZoneManager.render(this._basicShader);
    }
    // Set uniforms
    if (this._basicShader && this._projection) {
      const projectionPosition =
        this._basicShader.getUniformLocation('u_projection');

      gl.uniformMatrix4fv(
        projectionPosition,
        false,
        new Float32Array(this._projection.data)
      );
    }
  }
}
