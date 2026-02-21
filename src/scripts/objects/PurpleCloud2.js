import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class PurpleCloud2 extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const purpleCloudBack2 = Resources.getSubTexture(
  'bigThing',
  0,
  7756,
  3066,
  2369
);
        this.purpleCloudBack2Sprite = new PIXI.Sprite(purpleCloudBack2);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.purpleCloudBack2Sprite.anchor.set(0.5, 0.5);
        this.purpleCloudBack2Sprite.x = 0;
        this.purpleCloudBack2Sprite.y = 0;
            //   this.wingsSprite.scale.set(2);



        // Add to container
        this.addChild(this.purpleCloudBack2Sprite);
    }

    // update(delta) {
    //     this.wingsSprite.rotation += 0.01 * delta;
    // }
}