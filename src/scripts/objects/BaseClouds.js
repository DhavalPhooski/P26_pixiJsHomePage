import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class BaseClouds extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Original Coords (5081x4156): x=2100, y=0, w=1525, h=425
        // Scaled for (10000x8179)
        const baseCloud = Resources.getSubTexture('spritesheet', 4133, 0, 3001, 836);
        this.baseSprite = new PIXI.Sprite(baseCloud);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.baseSprite.anchor.set(0.5, 1);
        this.baseSprite.x = 0;
        this.baseSprite.y = 0;

        // Add to container
        this.addChild(this.baseSprite);
    }
}