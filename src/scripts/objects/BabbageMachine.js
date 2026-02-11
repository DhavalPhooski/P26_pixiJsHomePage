import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class BabbageMachine extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Coords: x=831, y=875, w=699, h=949
const babbageMachine = Resources.getSubTexture(
  'spritesheet',
  1636,  // x
  4034,  // y
  2500,  // width
  1456   // height
);
        this.babbageMachineSprite = new PIXI.Sprite(babbageMachine);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.babbageMachineSprite.anchor.set(0.5, 1);
        this.babbageMachineSprite.x = 0;
        this.babbageMachineSprite.y = 0;
            //   this.wingsSprite.scale.set(2);



        // Add to container
        this.addChild(this.babbageMachineSprite);
    }

    // update(delta) {
    //     this.wingsSprite.rotation += 0.01 * delta;
    // }
}