import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class FutureBg  extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const FutureBg  = Resources.getSubTexture(
  'bg',
  0,
  1082,
  1920,
  1080
);
        this.FutureBgSprite = new PIXI.Sprite(FutureBg );
        
        // Anchor at bottom-center (0.5, 1.0)
        this.FutureBgSprite.anchor.set(0, 0.5);
        this.FutureBgSprite.x = 0;
        this.FutureBgSprite.y = 0;
            //   this.wingsSprite.scale.set(2);



        // Add to container
        this.addChild(this.FutureBgSprite);
    }

    // update(delta) {
    //     this.wingsSprite.rotation += 0.01 * delta;
    // }
}