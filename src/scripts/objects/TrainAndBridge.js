import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class TrainAndBridge extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Original Coords (5081x4156): x=831, y=875, w=699, h=949
        const train = Resources.getSubTexture('bigThing', 0, 5215, 3066, 305);
        this.trainSprite = new PIXI.Sprite(train);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.trainSprite.anchor.set(0.5, 1);
        this.trainSprite.scale.set(.5);
        this.trainSprite.x = 0;
        this.trainSprite.y = 180;
        this.trainSprite.zIndex = 4;

        // 2. WINGS (Rotating)
        // Original Coords (5081x4156): x=0, y=425, w=470, h=450
        const bridge = Resources.getSubTexture('bigThing', 0, 5516, 3066, 284);
        this.bridgeSprite = new PIXI.Sprite(bridge);
        
        // Anchor at center (0.5, 0.5) for rotation
        this.bridgeSprite.anchor.set(0.5,0);
        this.bridgeSprite.x = 0;
        
        // Scaled height: -900 * 1.968 = -1771
        this.bridgeSprite.y = 0; 
        
        // Maintaining your mirrored scale logic
        this.bridgeSprite.scale.set(1);
        this.bridgeSprite.zIndex = 10;

        // Add to container
        this.addChild(this.trainSprite);
        this.addChild(this.bridgeSprite);


    this.trainSpeed = 10;          // speed of train
    this.waitTime = 8000;         // 8 seconds (in ms)
    this.elapsedTime = 0;         // timer
    this.isMoving = true;        // movement flag

    this.screenWidth = 2920;      // change if needed

    }

update(delta) {

    // Increase timer (delta is frame-based, so multiply by 16 for ms approx)
    this.elapsedTime += delta * 16;

    // If not moving, wait 8 seconds
    if (!this.isMoving) {
        if (this.elapsedTime >= this.waitTime) {
            this.isMoving = true;
            this.elapsedTime = 0;
        }
    }

    // Move train from right to left
    if (this.isMoving) {
        this.trainSprite.x -= this.trainSpeed * delta*1.5;

        // If train completely left screen
        if (this.trainSprite.x < -this.trainSprite.width) {
            this.trainSprite.x = this.screenWidth; // reset to right side
            this.isMoving = false;                 // stop again
            this.elapsedTime = 0;                  // reset timer
        }
    }
}
}