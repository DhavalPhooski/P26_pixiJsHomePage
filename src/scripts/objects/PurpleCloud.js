import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class PurpleCloud extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const purpleCloudBack = Resources.getSubTexture(
  'bigThing',
  0,
  10125,
  3066,
  1782
);
        this.purpleCloudBackSprite = new PIXI.Sprite(purpleCloudBack);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.purpleCloudBackSprite.anchor.set(0.5, 0.5);
        this.purpleCloudBackSprite.x = 0;
        this.purpleCloudBackSprite.y = 0;
            //   this.wingsSprite.scale.set(2);



        // Add to container
        this.addChild(this.purpleCloudBackSprite);
    }

    // update(delta) {
    //     this.wingsSprite.rotation += 0.01 * delta;
    // }
}