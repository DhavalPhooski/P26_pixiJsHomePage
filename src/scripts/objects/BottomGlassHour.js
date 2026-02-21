import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class BottomGlassHour extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
        const bottomGlassHour = Resources.getSubTexture('spritesheet', 4171,5516, 3046, 1317);
        this.topHourGlassSprite = new PIXI.Sprite(bottomGlassHour);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.topHourGlassSprite.anchor.set(0.5, 1);
        this.topHourGlassSprite.x = 0;
        this.topHourGlassSprite.y = 650;
            //   this.wingsSprite.scale.set(2);



        // Add to container
        this.addChild(this.topHourGlassSprite);
    }

    // update(delta) {
    //     this.wingsSprite.rotation += 0.01 * delta;
    // }
}