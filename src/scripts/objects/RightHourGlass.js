import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class RightHourGlass extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Original Coords (5081x4156): x=2100, y=0, w=1525, h=425
        // Scaled for (10000x8179)
const rightHourGlass = Resources.getSubTexture(
    'spritesheet',
    890,     // new x
    5516,   // new y
    708,    // new width
    2664     // new height
);
        this.rightHourGlassSprite = new PIXI.Sprite(rightHourGlass);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.rightHourGlassSprite.anchor.set(0, 0.5);
        this.rightHourGlassSprite.x = -630;
        this.rightHourGlassSprite.y = 20;

        // Add to container
        this.addChild(this.rightHourGlassSprite);
    }
}