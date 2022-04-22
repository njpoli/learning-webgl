import { AnimatedSpriteComponentBuilder } from '../components/animatedSpriteComponent';
import { ComponentManager } from '../components/componentManager';
import { SpriteComponentBuilder } from '../components/spriteComponent';
import { AssetManager } from './assets/assetManager';
import { AudioManager } from './audio/audioManager';
import { BehaviorManager } from './behaviors/behaviorManager';
import { KeyboardMovementBehaviorBuilder } from './behaviors/keyboardMovementBehavior';
import { RotationBehaviorBuilder } from './behaviors/rotationBehavior';
import { gl, GLUtilities } from './gl/gl';
import { BasicShader } from './gl/shaders/basicShader';
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

  /**
   * Creates a new engine
   */
  public constructor() {}

  /**
   * Starts up this engine
   */
  public start(): void {
    this._canvas = GLUtilities.initialize();
    AssetManager.initialize();
    InputManager.initialize();
    ZoneManager.initialize();

    Message.subscribe('MOUSE_DOWN', this);

    gl.clearColor(0, 0, 0.3, 1);
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

    this.loadAll(imageContext);
    this.loadAll(jsonContext);
    this.loadAll(audioContext);

    this._basicShader = new BasicShader();
    this._basicShader.use();

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
      new Material('bird', 'src/assets/textures/bird.png', Color.white())
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

    // Find a better place for this?
    ComponentManager.registerBuilder(new SpriteComponentBuilder());
    ComponentManager.registerBuilder(new AnimatedSpriteComponentBuilder());
    BehaviorManager.registerBuilder(new RotationBehaviorBuilder());
    BehaviorManager.registerBuilder(new KeyboardMovementBehaviorBuilder());

    // TODO: Change this to be read from game config
    ZoneManager.changeZone(0);

    this.resize();
    this.loop();
  }

  /**
   * Resizes the canvas to fit the window.
   */
  public resize() {
    if (this._canvas !== undefined) {
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
    }
  }

  private loop(): void {
    this.update();
    this.render();
  }

  public onMessage(message: Message): void {
    const mouseContext = message.context as MouseContext;
    if (message.code === 'MOUSE_DOWN' && mouseContext) {
      console.log(mouseContext);
      if (mouseContext.leftDown) {
        AudioManager.playSound('birdJump');
      } else if (mouseContext.rightDown) {
        AudioManager.toggleSound('music');
      }
    }
  }

  private loadAll(requireContext: __WebpackModuleApi.RequireContext) {
    requireContext.keys().forEach(requireContext);
  }

  private update(): void {
    let delta = performance.now() - this._previousTime;

    MessageBus.update(delta);

    ZoneManager.update(delta);

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
    requestAnimationFrame(this.loop.bind(this));
  }
}
