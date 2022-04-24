import { Shader } from '../core/gl/shader';
import { SimObject } from '../core/world/simObject';

export interface IComponent {
  name: string;
  readonly owner: SimObject | undefined;

  setOwner(owner: SimObject): void;

  load(): void;

  updateReady(): void;

  update(time: number): void;

  render(shader: Shader): void;
}
