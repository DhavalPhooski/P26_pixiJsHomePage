import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class LeftHourGlass extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Original Coords (5081x4156): x=2100, y=0, w=1525, h=425
        // Scaled for (10000x8179)
        const leftHourGlass = Resources.getSubTexture('spritesheet', 0, 5491, 925, 2688);
        this.leftHourGlassSprite = new PIXI.Sprite(leftHourGlass);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.leftHourGlassSprite.anchor.set(0, 0.5);
        this.leftHourGlassSprite.x = -250;
        this.leftHourGlassSprite.y = 0;

        // Add to container
        this.addChild(this.leftHourGlassSprite);
    }
}