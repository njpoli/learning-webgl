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
import { MouseClickBehaviorBuilder } from './behaviors/mouseClickBehavior';
import { PlayerBehaviorBuilder } from './behaviors/playerBehavior';
import { RotationBehaviorBuilder } from './behaviors/rotationBehavior';
import { ScrollBehaviorBuilder } from './behaviors/scrollBehavior';
import { VisibilityOnMessageBehaviorBuilder } from './behaviors/visibilityOnMessageBehavior';
import { gl, GLUtilities } from './gl/gl';
import { BasicShader } from './gl/shaders/basicShader';
import { BitmapFontManager } from './graphics/bitmapFontManager';
import { Color } from './graphics/color';
import { Material } from './graphics/material';
import { MaterialManager } from './graphics/materialManager';
import { InputManager } from './input/inputManager';
import { Matrix4x4 } from './math/matrix4x4';
import { Vector2 } from './math/vector2';
import { Message } from './message/message';
import { MessageBus } from './message/messageBus';
import { ZoneManager } from './world/zoneManager';

/**
 * The main game engine class
 */
export class Engine {
  private _canvas: HTMLCanvasElement | undefined;
  private _basicShader: BasicShader | undefined;
  private _projection: Matrix4x4 | undefined;
  private _previousTime: number = 0;
  private _gameWidth: number | undefined;
  private _gameHeight: number | undefined;

  private _isFirstUpdate: boolean = true;
  // @ts-ignore
  private _aspect: number;

  /**
   * Creates a new engine
   * @param width The width of the game in pixels
   * @param height The height of the game in pixels
   */
  public constructor(width?: number, height?: number) {
    this._gameWidth = width;
    this._gameHeight = height;
  }

  /**
   * Starts up this engine
   */
  public start(elementName?: string): void {
    this._canvas = GLUtilities.initialize(elementName);
    if (this._gameWidth && this._gameHeight) {
      this._aspect = this._gameWidth / this._gameHeight;
    }

    AssetManager.initialize();
    InputManager.initialize(this._canvas);
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

    MaterialManager.registerMaterial(
      new Material(
        'playButton',
        'src/assets/textures/play_button.png',
        Color.white()
      )
    );

    MaterialManager.registerMaterial(
      new Material(
        'restartButton',
        'src/assets/textures/restart_button.png',
        Color.white()
      )
    );

    MaterialManager.registerMaterial(
      new Material(
        'scoreboard',
        'src/assets/textures/scoreboard.png',
        Color.white()
      )
    );

    MaterialManager.registerMaterial(
      new Material('title', 'src/assets/textures/title.png', Color.white())
    );

    MaterialManager.registerMaterial(
      new Material(
        'tutorial',
        'src/assets/textures/tutorial.png',
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
    BehaviorManager.registerBuilder(new MouseClickBehaviorBuilder());
    BehaviorManager.registerBuilder(new VisibilityOnMessageBehaviorBuilder());

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

        this._projection = Matrix4x4.orthographic(
          0,
          this._canvas.width,
          this._canvas.height,
          0,
          -100.0,
          100.0
        );

        gl.viewport(0, 0, this._canvas.width, this._canvas.height);
      } else {
        let newWidth = window.innerWidth;
        let newHeight = window.innerHeight;
        let newWidthToHeight = newWidth / newHeight;
        let gameArea = document.getElementById('gameArea');

        if (gameArea) {
          if (newWidthToHeight > this._aspect) {
            newWidth = newHeight * this._aspect;
            gameArea.style.height = newHeight + 'px';
            gameArea.style.width = newWidth + 'px';
          } else {
            newHeight = newWidth / this._aspect;
            gameArea.style.width = newWidth + 'px';
            gameArea.style.height = newHeight + 'px';
          }

          gameArea.style.marginTop = -newHeight / 2 + 'px';
          gameArea.style.marginLeft = -newWidth / 2 + 'px';

          this._canvas.width = newWidth;
          this._canvas.height = newHeight;

          this._projection = Matrix4x4.orthographic(
            0,
            this._gameWidth,
            this._gameHeight,
            0,
            -100.0,
            100.0
          );

          gl.viewport(0, 0, newWidth, newHeight);

          const resolutionScale = new Vector2(
            newWidth / this._gameWidth,
            newHeight / this._gameHeight
          );
          InputManager.setResolutionScale(resolutionScale);
        }
      }
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
    if (this._isFirstUpdate) {
    }
    this.update();
    this.render();
    requestAnimationFrame(this.loop.bind(this));
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
