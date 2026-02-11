import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class Windmill extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Original Coords (5081x4156): x=831, y=875, w=699, h=949
        const baseTex = Resources.getSubTexture('spritesheet', 1636, 1722, 1376, 1868);
        this.baseSprite = new PIXI.Sprite(baseTex);
        
        // Anchor at bottom-center (0.5, 1.0)
        this.baseSprite.anchor.set(0.5, 1);
        this.baseSprite.x = 0;
        this.baseSprite.y = 0;
        this.baseSprite.zIndex = 6;

        // 2. WINGS (Rotating)
        // Original Coords (5081x4156): x=0, y=425, w=470, h=450
        const wingsTex = Resources.getSubTexture('spritesheet', 0, 836, 925, 886);
        this.wingsSprite = new PIXI.Sprite(wingsTex);
        
        // Anchor at center (0.5, 0.5) for rotation
        this.wingsSprite.anchor.set(0.5);
        this.wingsSprite.x = 0;
        
        // Scaled height: -900 * 1.968 = -1771
        this.wingsSprite.y = -1771; 
        
        // Maintaining your mirrored scale logic
        this.wingsSprite.scale.set(-2, 2);
        this.wingsSprite.zIndex = 5;

        // Add to container
        this.addChild(this.baseSprite);
        this.addChild(this.wingsSprite);
    }

    update(delta) {
        this.wingsSprite.rotation += 0.01 * delta;
    }
}