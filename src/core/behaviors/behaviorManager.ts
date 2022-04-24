import { IBehavior } from './IBehavior';
import { IBehaviorBuilder } from './IBehaviorBuilder';

export class BehaviorManager {
  private static _registeredBuilders: { [type: string]: IBehaviorBuilder } = {};

  public static registerBuilder(builder: IBehaviorBuilder): void {
    BehaviorManager._registeredBuilders[builder.type] = builder;
  }

  public static extractBehavior(json: any): IBehavior {
    if (json.type) {
      if (BehaviorManager._registeredBuilders[String(json.type)]) {
        return BehaviorManager._registeredBuilders[
          String(json.type)
        ].buildFromJson(json);
      }
      throw new Error(
        'Behavior manager error: type is missing or builder is not registered for this type'
      );
    }
    throw new Error(
      'Behavior manager error: type is missing or builder is not registered for this type'
    );
  }
}
