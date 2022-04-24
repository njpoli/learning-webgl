export var gl: WebGLRenderingContext;

/**
 * Responsible for setting up a WebGL rendering context
 */
export class GLUtilities {
  /**
   * Initializes WebGL, potentially using the canvas with an assigned id matching
   * the provided if it is defined.
   * @param elementId The id of the element to search for.
   * @returns reference to the HTMLCanvasElement
   */
  public static initialize(elementId?: string): HTMLCanvasElement {
    let canvas: HTMLCanvasElement;

    if (elementId !== undefined) {
      canvas = document.getElementById(elementId) as HTMLCanvasElement;
      if (canvas === undefined) {
        throw new Error('Could not find a canvas element named ' + elementId);
      }
    } else {
      canvas = document.createElement('canvas') as HTMLCanvasElement;
      document.body.appendChild(canvas);
    }

    gl = canvas.getContext('webgl') as WebGLRenderingContext;

    if (gl === undefined || gl === null) {
      throw new Error('Unable to initialize WebGL');
    }

    return canvas;
  }
}
