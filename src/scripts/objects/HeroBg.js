import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class HeroBg extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const HeroBg = Resources.getSubTexture(
  'bg',
  0,
  0,
  1920,
  1080
);
        this.HeroBgSprite = new PIXI.Sprite(HeroBg);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.HeroBgSprite.anchor.set(0, 0);
        this.HeroBgSprite.x = 0;
        this.HeroBgSprite.y = 0;
            //   this.wingsSprite.scale.set(2);



        // Add to container
        this.addChild(this.HeroBgSprite);
    }

    // update(delta) {
    //     this.wingsSprite.rotation += 0.01 * delta;
    // }
}