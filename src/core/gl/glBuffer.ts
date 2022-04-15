import { gl } from './gl';

/**
 * Represents the information needed for a GLBuffer attribute
 */
export class AttributeInfo {
  /**
   * Location of the attribute
   */
  //@ts-ignore
  public location: number;
  /**
   * The size (number of elements) in this attribute (i.e. Vector3 = 3)
   */
  //@ts-ignore
  public size: number;
  /**
   * The number of elements from the beginning of the buffer.
   */
  //@ts-ignore
  public offset: number;
}

/**
 * Represents a WebGL buffer
 */
export class GLBuffer {
  private _hasAttributeLocation: boolean = false;
  private _elementSize: number;
  private _stride: number;
  private _buffer: WebGLBuffer;

  private _targetBufferType: number;
  private _dataType: number;
  private _mode: number;
  private _typeSize: number;

  private _data: number[] = [];
  private _attributes: AttributeInfo[] = [];
  /**
   * Creates a new GL Buffer.
   * @param elementSize The size of each element in the buffer.
   * @param dataType The data type of the buffer. Default: gl.FLOAT
   * @param targetBufferType The buffer target type. gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER. Default: gl.ARRAY_BUFFER
   * @param mode The drawing mode of the buffer. (i.e. gl.TRIANGLES or gl.LINES). Default: gl.TRIANGLES
   */
  public constructor(
    elementSize: number,
    dataType: number = gl.FLOAT,
    targetBufferType: number = gl.ARRAY_BUFFER,
    mode: number = gl.TRIANGLES
  ) {
    this._elementSize = elementSize;
    this._dataType = dataType;
    this._targetBufferType = targetBufferType;
    this._mode = mode;

    // Determine byte size
    switch (this._dataType) {
      case gl.FLOAT:
      // positive or negative
      case gl.INT:
      // only positive but twice the size of int
      case gl.UNSIGNED_INT:
        this._typeSize = 4;
        break;
      case gl.SHORT:
      case gl.UNSIGNED_SHORT:
        this._typeSize = 2;
        break;
      case gl.BYTE:
      case gl.UNSIGNED_BYTE:
        this._typeSize = 1;
      default:
        throw new Error(`Unrecognized data type ${dataType.toString()}`);
    }

    // size of elements * number of bytes in each element
    this._stride = this._elementSize * this._typeSize;
    this._buffer = gl.createBuffer() as WebGLBuffer;
  }

  /**
   * Destroys the buffer
   */
  public destroy(): void {
    gl.deleteBuffer(this._buffer);
  }

  /**
   * Binds this buffer.
   * @param normalized Indicates if this data should be normalized. Default: false
   */
  public bind(normalized: boolean = false): void {
    gl.bindBuffer(this._targetBufferType, this._buffer);

    if (this._hasAttributeLocation) {
      this._attributes.forEach((it) => {
        gl.vertexAttribPointer(
          it.location,
          it.size,
          this._dataType,
          normalized,
          this._stride,
          it.offset * this._typeSize
        );

        gl.enableVertexAttribArray(it.location);
      });
    }
  }

  public unbind(): void {
    this._attributes.forEach((it) => {
      gl.disableVertexAttribArray(it.location);
    });

    gl.bindBuffer(this._targetBufferType, null);
  }

  /**
   * Adds an attribute with the provided information to the buffer
   * @param info The information to be added
   */
  public addAttributeLocation(info: AttributeInfo): void {
    this._hasAttributeLocation = true;

    this._attributes.push(info);
  }

  /**
   * Adds data to the buffer
   * @param data
   */
  public pushBackData(data: number[]): void {
    this._data = this._data.concat(data);
  }

  /**
   * Uploads this data to the GPU
   */
  public upload(): void {
    gl.bindBuffer(this._targetBufferType, this._buffer);

    let bufferData: ArrayBuffer;
    switch (this._dataType) {
      case gl.FLOAT:
        bufferData = new Float32Array(this._data);
        break;
      case gl.INT:
        bufferData = new Int32Array(this._data);
        break;
      case gl.UNSIGNED_INT:
        bufferData = new Uint32Array(this._data);
        break;
      case gl.SHORT:
        bufferData = new Int16Array(this._data);
        break;
      case gl.UNSIGNED_SHORT:
        bufferData = new Uint16Array(this._data);
        break;
      case gl.BYTE:
        bufferData = new Int8Array(this._data);
        break;
      case gl.UNSIGNED_BYTE:
        bufferData = new Uint8Array(this._data);
        break;
      default:
        throw new Error(
          `Data type error in pushBackData() for datatype ${this._dataType.toString()}`
        );
    }

    gl.bufferData(this._targetBufferType, bufferData, gl.STATIC_DRAW);
  }
  /**
   * Draws the buffer
   */
  public draw(): void {
    if (this._targetBufferType === gl.ARRAY_BUFFER) {
      gl.drawArrays(this._mode, 0, this._data.length / this._elementSize);
    } else if (this._targetBufferType === gl.ELEMENT_ARRAY_BUFFER) {
      gl.drawElements(this._mode, this._data.length, this._dataType, 0);
    }
  }
}
