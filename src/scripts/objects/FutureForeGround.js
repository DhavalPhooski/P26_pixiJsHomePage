import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class FutureForeGround  extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const FutureForeGround  = Resources.getSubTexture(
  'bigThing',
  0,
  0,
  3066,
  1268
);
        this.FutureBgSprite = new PIXI.Sprite(FutureForeGround);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.FutureBgSprite.anchor.set(0.5, 1);
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