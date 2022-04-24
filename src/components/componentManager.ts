import { IComponent } from './IComponent';
import { IComponentBuilder } from './IComponentBuilder';

export class ComponentManager {
  private static _registeredBuilders: { [type: string]: IComponentBuilder } =
    {};

  public static registerBuilder(builder: IComponentBuilder): void {
    ComponentManager._registeredBuilders[builder.type] = builder;
  }

  public static extractComponent(json: any): IComponent {
    if (json.type) {
      if (ComponentManager._registeredBuilders[String(json.type)]) {
        return ComponentManager._registeredBuilders[
          String(json.type)
        ].buildFromJson(json);
      }
      throw new Error(
        'Component manager error: type is missing or builder is not registered for this type'
      );
    }
    throw new Error(
      'Component manager error: type is missing or builder is not registered for this type'
    );
  }
}
