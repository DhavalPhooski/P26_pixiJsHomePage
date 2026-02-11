import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class PrakarshTitle extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const prakarshTitle = Resources.getSubTexture(
  'spritesheet',
  0,
  0,
  4133,
  836
);
        this.prakarshTitleSprite = new PIXI.Sprite(prakarshTitle);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.prakarshTitleSprite.anchor.set(0.5, 1);
        this.prakarshTitleSprite.x = 0;
        this.prakarshTitleSprite.y = 0;
            //   this.wingsSprite.scale.set(2);



        // Add to container
        this.addChild(this.prakarshTitleSprite);
    }

    // update(delta) {
    //     this.wingsSprite.rotation += 0.01 * delta;
    // }
}