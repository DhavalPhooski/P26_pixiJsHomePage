import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class PeachCloudBack2 extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const peachCloudBack2 = Resources.getSubTexture(
  'spritesheet',
  7975,
  842,
  2025,
  886
);
        this.peachCloudBackSprite = new PIXI.Sprite(peachCloudBack2);
        
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