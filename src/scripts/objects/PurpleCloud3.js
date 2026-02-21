import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class PurpleCloud3 extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const purpleCloudBack3 = Resources.getSubTexture(
  'bigThing',
  0,
  6410,
  3066,
  832
);
        this.purpleCloudBack3 = new PIXI.Sprite(purpleCloudBack3);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.purpleCloudBack3.anchor.set(0.5, 0.5);
        this.purpleCloudBack3.x = 0;
        this.purpleCloudBack3.y = 0;
            //   this.wingsSprite.scale.set(2);



        // Add to container
        this.addChild(this.purpleCloudBack3);
    }

    // update(delta) {
    //     this.wingsSprite.rotation += 0.01 * delta;
    // }
}