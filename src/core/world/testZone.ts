//import { SpriteComponent } from '../../components/spriteComponent';
//import { SimObject } from './simObject';
//import { Zone } from './zone';

//export class TestZone extends Zone {
//private _parentObject: SimObject | undefined;
//private _parentSprite: SpriteComponent | undefined;
//private _testObject: SimObject | undefined;
//private _testSprite: SpriteComponent | undefined;

//public load(): void {
//this._parentObject = new SimObject(0, 'parentObject');
//this._parentSprite = new SpriteComponent('parentTest', 'woodPlank');
//this._parentObject.addComponent(this._parentSprite);
//this._parentObject.transform.position.x = 800;
//this._parentObject.transform.position.y = 400;

//this._testObject = new SimObject(1, 'testObject');
//this._testSprite = new SpriteComponent('test', 'stoneWall');
//this._testObject.addComponent(this._testSprite);

//this._testObject.transform.position.x = 100;
//this._testObject.transform.position.y = 100;

//this._parentObject.addChild(this._testObject);

//this.scene.addObject(this._parentObject);

//super.load();
//}

//public update(time: number): void {
//this._parentObject!.transform.rotation.z += 0.015;
//this._testObject!.transform.rotation.z += 0.01;
//super.update(time);
//}
//}
