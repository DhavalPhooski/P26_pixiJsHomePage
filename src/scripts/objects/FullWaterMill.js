import * as PIXI from 'pixi.js';
import { Resources } from '../ResourceManager';

export class FullWaterMill extends PIXI.Container {
    constructor() {
        super();

        // 1. BASE (Static)
        // Original: 0, 875, 831, 949
        const baseTex = Resources.getSubTexture('spritesheet', 0, 1722, 1636, 1868);
        this.baseSprite = new PIXI.Sprite(baseTex);
        this.baseSprite.zIndex = 5;
        
        // Anchor at bottom-center (0.5, 1.0)
        this.baseSprite.anchor.set(0.5, 1);
        this.baseSprite.x = 0;
        this.baseSprite.y = 0;

        // 2. WINGS (Rotating)
        // INNER WHEEL
        // Original: 1530, 425, 570, 450 | Pos: -130, -350
        const innerWheel = Resources.getSubTexture('spritesheet', 3011, 836, 1122, 886);
        this.innerWheelSprite = new PIXI.Sprite(innerWheel);
        this.innerWheelSprite.scale.set(1);
        this.innerWheelSprite.zIndex = 4;
        
        this.innerWheelSprite.anchor.set(0.5);
        this.innerWheelSprite.x = -256; 
        this.innerWheelSprite.y = -689; 

        // OUTER WHEEL
        // Original: 831, 425, 699, 450 | Pos: -190, -360
        const outerWheel = Resources.getSubTexture('spritesheet', 1636, 836, 1376, 886);
        this.outerWheelSprite = new PIXI.Sprite(outerWheel);
        this.outerWheelSprite.scale.set(1.3);
        
        this.outerWheelSprite.anchor.set(0.5);
        this.outerWheelSprite.x = -374;
        this.outerWheelSprite.y = -708;

        // WATER
        // Original: 3700, 0, 340, 600 | Pos: -340, -950
        this.waterTimer = 0;
        const water = Resources.getSubTexture('spritesheet', 7282, 0, 669, 1181);
        this.waterSprite = new PIXI.Sprite(water);
        this.waterSprite.scale.set(2);
        this.waterSprite.zIndex = 6;
        
        this.waterSprite.anchor.set(0.5, 0);
        this.waterSprite.x = -669;
        this.waterSprite.y = -1870;

        // Add to container
        this.addChild(this.baseSprite);
        this.addChild(this.innerWheelSprite);
        this.addChild(this.outerWheelSprite);
        this.addChild(this.waterSprite);
    }

    update(delta) {
        this.innerWheelSprite.rotation -= 0.007 * delta;
        this.outerWheelSprite.rotation -= 0.01 * delta;

        this.waterTimer += 0.05 * delta;

        const baseScale = 2;
        const variation = Math.sin(this.waterTimer) * 0.05;
        this.waterSprite.scale.y = baseScale + variation;
    }
}