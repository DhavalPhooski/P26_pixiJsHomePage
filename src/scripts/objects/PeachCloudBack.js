import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class PeachCloudBack extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const peachCloudBack = Resources.getSubTexture(
  'bigThing',
  0,
  4090,
  3066,
  1125
);
        this.peachCloudBackSprite = new PIXI.Sprite(peachCloudBack);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.peachCloudBackSprite.anchor.set(0.5, 0.5);
        this.peachCloudBackSprite.x = 0;
        this.peachCloudBackSprite.y = 0;
            //   this.wingsSprite.scale.set(2);



        // Add to container
        this.addChild(this.peachCloudBackSprite);
    }

    // update(delta) {
    //     this.wingsSprite.rotation += 0.01 * delta;
    // }
}