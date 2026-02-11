import * as PIXI from 'pixi.js';
import { Resources } from './ResourceManager';
import { Windmill } from './objects/Windmill';
import { BaseClouds } from './objects/BaseClouds';
import { FullWaterMill } from './objects/FullWaterMill';
import { TopGlassHour } from './objects/TopGlassHour';
import { LeftHourGlass } from './objects/LeftHourGlass';
import { BabbageMachine } from './objects/BabbageMachine';
import { PeachCloudBack } from './objects/PeachCloudBack';
import { PeachCloudBack2 } from './objects/PeachCloudBack2';
import {PrakarshTitle} from './objects/PrakarshTitle';
export class PixiApp {
    constructor(containerId) {
        // We save the ID to use it later
        this.containerId = containerId;
        this.logicalWidth = 1920; 

        // Start the async initialization
        this._init();
    }

async _init() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error("Pixi Container not found!");
            return;
        }

        this.app = new PIXI.Application();

        // 1. Initialize Pixi to match the container's dimensions (which we'll set to 300vh in CSS)
        await this.app.init({
            background: '#87CEEB',
            resizeTo: container, // Crucial: Resize to the tall div, not the window
            antialias: true,
            autoDensity: true,
            resolution: window.devicePixelRatio || 1,
        });

        container.appendChild(this.app.canvas);

        this.world = new PIXI.Container();
        this.app.stage.addChild(this.world);

        await this.loadGame();
    }

    async loadGame() {
        try {
            // Load resources
            await Resources.loadAll();

            // Create World Objects
            this.baseClouds = new BaseClouds();
            this.world.addChild(this.baseClouds);
            this.windmill = new Windmill();
            this.world.addChild(this.windmill);
            this.watermill = new FullWaterMill();
            this.world.addChild(this.watermill);
            this.topGlassHour = new TopGlassHour();
            this.world.addChild(this.topGlassHour);
            this.leftHourGlass = new LeftHourGlass();
            this.world.addChild(this.leftHourGlass);
            this.babbageMachine = new BabbageMachine();
            this.world.addChild(this.babbageMachine);
            
            this.peachCloudBack = new PeachCloudBack();
            this.world.addChild(this.peachCloudBack);
            
            this.peachCloudBack2 = new PeachCloudBack2();
            this.world.addChild(this.peachCloudBack2);

            this.PrakarshTitle = new PrakarshTitle();
            this.world.addChild(this.PrakarshTitle);


            // Setup Resize
            window.addEventListener('resize', this.onResize.bind(this));
            this.onResize(); // Initial scaling

            // Start Loop
            this.app.ticker.add((ticker) => {
                // In v8, ticker is passed as an object. 
                // Use ticker.deltaTime for smooth animation
                this.windmill.update(ticker.deltaTime);
                this.watermill.update(ticker.deltaTime);
                
            });

        } catch (error) {
            console.error("Game Load Failed:", error);
        }
    }

    onResize() {
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;

        // Scale Logic
        const scale = screenW / this.logicalWidth;
        this.world.scale.set(scale);

        // Positioning Logic
        const heroSectionH = screenH / scale;
        const marginBytes = 10; 
        
        // Ensure windmill exists before trying to move it
        if (this.windmill) {
            this.windmill.scale.set(0.2);
            this.windmill.y = heroSectionH - 220;
            this.windmill.x = 300; 
            this.windmill.zIndex = 1;
        }
        if(this.baseClouds){
            this.baseClouds.y=heroSectionH;
            this.baseClouds.x = this.logicalWidth/2; 
            this.baseClouds.scale.set(.8);
            this.baseClouds.zIndex = 2;
        }
        if(this.watermill){
                        this.watermill.scale.set(.3);
            this.watermill.y = heroSectionH - 150;
            this.watermill.x = this.logicalWidth-150; 
            this.watermill.zIndex = 1;
        }
        if(this.topGlassHour){
            this.topGlassHour.y=0;
            this.topGlassHour.x = this.logicalWidth/2; 
            this.topGlassHour.scale.set(1);
            this.topGlassHour.zIndex = 2;
        }
        
        if(this.babbageMachine){
            this.babbageMachine.y = heroSectionH - 110;
            this.babbageMachine.baseX = this.logicalWidth / 2; 
            this.babbageMachine.scale.set(0.3);
            if (this.babbageMachine.x === 0) this.babbageMachine.x = this.babbageMachine.baseX;
        }
        
        if(this.peachCloudBack){
            this.peachCloudBack.y = heroSectionH*1.25;
            this.peachCloudBack.baseX = this.logicalWidth / 2; 
            this.peachCloudBack.scale.set(1.7);
            this.peachCloudBack.zIndex = 5;
            if (this.peachCloudBack.x === 0) this.peachCloudBack.x = this.peachCloudBack.baseX;
        }

        if(this.peachCloudBack2){
            this.peachCloudBack2.y = heroSectionH*1.2;
            this.peachCloudBack2.baseX = this.logicalWidth / 2 ; 
            this.peachCloudBack2.scale.set(1.5);
            this.peachCloudBack2.zIndex = 5;
            if (this.peachCloudBack2.x === 0) this.peachCloudBack2.x = this.peachCloudBack2.baseX;
        }
        if(this.PrakarshTitle){
            this.PrakarshTitle.y = 350;
            this.PrakarshTitle.baseX = this.logicalWidth / 2 ; 
            this.PrakarshTitle.scale.set(.2);
            this.PrakarshTitle.zIndex = 1;
            if (this.PrakarshTitle.x === 0) this.PrakarshTitle.x = this.PrakarshTitle.baseX;
        }


    // 2. The Hourglass Logic
    if (this.leftHourGlass) {
        const totalCanvasHeightPx = screenH * 3; 
        // Stick to the absolute top-left of the world container
        this.leftHourGlass.x = 0; 
        this.leftHourGlass.y = (heroSectionH*3)/2 ;
        this.leftHourGlass.zIndex =10;
        // Calculate 300vh in pixels
        

        /* Crucial: We divide the desired pixel height by the world's scale.
           This cancels out the parent's scaling so the hourglass 
           is exactly 'totalCanvasHeightPx' tall on the screen.
        */
        this.leftHourGlass.height = (totalCanvasHeightPx / scale)*1.05;

        // Keep the width proportional so it doesn't look squished
        this.leftHourGlass.scale.x = this.leftHourGlass.scale.y;
        
    }
    }
}
       