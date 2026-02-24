import * as PIXI from "pixi.js";
import { Resources } from "./ResourceManager";
import { Windmill } from "./objects/Windmill";
import { BaseClouds } from "./objects/BaseClouds";
import { FullWaterMill } from "./objects/FullWaterMill";
import { TopGlassHour } from "./objects/TopGlassHour";
import { BottomGlassHour } from "./objects/BottomGlassHour";
import { LeftHourGlass } from "./objects/LeftHourGlass";
import { RightHourGlass } from "./objects/RightHourGlass";
import { BabbageMachine } from "./objects/BabbageMachine";
import { PeachCloudBack } from "./objects/PeachCloudBack";
import { PeachCloudBack2 } from "./objects/PeachCloudBack2";
import { CyberBuildfront } from "./objects/CyberBuildfront";
import { CyberBuildback } from "./objects/CyberBuildback";
import { HeroBg } from "./objects/HeroBg";
import { FutureBg } from "./objects/FutureBg";
import { TrainAndBridge } from "./objects/TrainAndBridge";
import { FutureForeGround } from "./objects/FutureForeGround";
import { PurpleCloud } from "./objects/PurpleCloud";
import { PurpleCloud2 } from "./objects/PurpleCloud2";
import { PurpleCloud3 } from "./objects/PurpleCloud3";
import { PrakarshTitle } from "./objects/PrakarshTitle";

export class PixiApp {
  constructor(containerId) {
    // We save the ID to use it later
    this.containerId = containerId;
    this.logicalWidth = 520;

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
      background: "#ffffff",
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
      
      this.bottomGlassHour = new BottomGlassHour();
      this.world.addChild(this.bottomGlassHour);
      this.leftHourGlass = new LeftHourGlass();
      this.rightHourGlass = new RightHourGlass();
      this.world.addChild(this.leftHourGlass);
      this.world.addChild(this.rightHourGlass);
      this.babbageMachine = new BabbageMachine();
      this.world.addChild(this.babbageMachine);

      this.futureBg = new FutureBg();
      this.world.addChild(this.futureBg);

      this.cyberBuildfront = new CyberBuildfront();
      this.world.addChild(this.cyberBuildfront);

      this.cyberBuildback = new CyberBuildback();
      this.world.addChild(this.cyberBuildback);

      this.futureForeGround = new FutureForeGround();
      this.world.addChild(this.futureForeGround);
      

      
      this.trainAndBridge = new TrainAndBridge();
      this.world.addChild(this.trainAndBridge);

      this.heroBg = new HeroBg();
      this.world.addChild(this.heroBg);

      this.peachCloudBack = new PeachCloudBack();
      this.world.addChild(this.peachCloudBack);

      this.purpleCloudBack = new PurpleCloud();
      this.world.addChild(this.purpleCloudBack);

      this.purpleCloudBack2 = new PurpleCloud2();
      this.world.addChild(this.purpleCloudBack2);
      this.purpleCloudBack3 = new PurpleCloud3();
      this.world.addChild(this.purpleCloudBack3);

      this.peachCloudBack2 = new PeachCloudBack2();
      this.world.addChild(this.peachCloudBack2);
      this.PrakarshTitle = new PrakarshTitle();
      this.world.addChild(this.PrakarshTitle);

      // Setup Resize
      window.addEventListener("resize", this.onResize.bind(this));
      this.onResize(); // Initial scaling

      // Start Loop
      this.app.ticker.add((ticker) => {
        // In v8, ticker is passed as an object.
        // Use ticker.deltaTime for smooth animation
        this.windmill.update(ticker.deltaTime);
        this.watermill.update(ticker.deltaTime);
        this.trainAndBridge.update(ticker.deltaTime);
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
    if (this.baseClouds) {
      this.baseClouds.y = heroSectionH;
      this.baseClouds.x = this.logicalWidth / 2;
      this.baseClouds.scale.set(0.8);
      this.baseClouds.zIndex = 2;
    }
    if (this.watermill) {
      this.watermill.scale.set(0.3);
      this.watermill.y = heroSectionH - 150;
      this.watermill.x = this.logicalWidth - 150;
      this.watermill.zIndex = 1;
    }
    if (this.topGlassHour) {
      this.topGlassHour.y = 0;
      this.topGlassHour.x = this.logicalWidth / 2;
      this.topGlassHour.scale.set(1);
      this.topGlassHour.zIndex = 2;
    }
        
    if (this.bottomGlassHour) {
      this.bottomGlassHour.y = (heroSectionH*3)-0;
      this.bottomGlassHour.x = this.logicalWidth / 2;
      this.bottomGlassHour.scale.set(1);
      this.bottomGlassHour.zIndex = 9;
    }

    if (this.babbageMachine) {
      this.babbageMachine.y = heroSectionH - 110;
      this.babbageMachine.baseX = this.logicalWidth / 2;
      this.babbageMachine.scale.set(0.3);
      this.babbageMachine.zIndex = 1;
      if (this.babbageMachine.x === 0)
        this.babbageMachine.x = this.babbageMachine.baseX;
    }

    if (this.peachCloudBack) {
      this.peachCloudBack.y = heroSectionH * 1.15;
      this.peachCloudBack.baseX = this.logicalWidth / 2;
      this.peachCloudBack.scale.set(.8);
      this.peachCloudBack.zIndex = 5;
      if (this.peachCloudBack.x === 0)
        this.peachCloudBack.x = this.peachCloudBack.baseX;
    }

    if (this.peachCloudBack2) {
      this.peachCloudBack2.y = heroSectionH * 1.1;
      this.peachCloudBack2.baseX = this.logicalWidth / 2;
      this.peachCloudBack2.scale.set(.85);
      this.peachCloudBack2.zIndex = 5;
      if (this.peachCloudBack2.x === 0)
        this.peachCloudBack2.x = this.peachCloudBack2.baseX;
    }
    if (this.PrakarshTitle) {
      this.PrakarshTitle.y = 350;
      this.PrakarshTitle.baseX = this.logicalWidth / 2;
      this.PrakarshTitle.scale.set(0.2);
      this.PrakarshTitle.zIndex = 1;
      if (this.PrakarshTitle.x === 0)
        this.PrakarshTitle.x = this.PrakarshTitle.baseX;
    }
        if (this.futureForeGround) {
      this.futureForeGround.y = heroSectionH*3+100;
      this.futureForeGround.baseX = this.logicalWidth / 2;
      this.futureForeGround.scale.set(1);
      this.futureForeGround.zIndex = 6;
      if (this.futureForeGround.x === 0)
        this.futureForeGround.x = this.futureForeGround.baseX;
    }

    // 2. The Hourglass Logic
    if (this.leftHourGlass) {
      const totalCanvasHeightPx = screenH * 3;
      // Stick to the absolute top-left of the world container
      this.leftHourGlass.x = 0;
      this.leftHourGlass.y = (heroSectionH * 3) / 2;
      this.leftHourGlass.zIndex = 10;
      // Calculate 300vh in pixels

      /* Crucial: We divide the desired pixel height by the world's scale.
           This cancels out the parent's scaling so the hourglass 
           is exactly 'totalCanvasHeightPx' tall on the screen.
        */
      this.leftHourGlass.height = (totalCanvasHeightPx / scale) * 1.05;

      // Keep the width proportional so it doesn't look squished
      this.leftHourGlass.scale.x = this.leftHourGlass.scale.y;
    }

    if (this.rightHourGlass) {
      const totalCanvasHeightPx = screenH * 3;
      // Stick to the absolute top-left of the world container
      this.rightHourGlass.x = 1920;
      this.rightHourGlass.y = (heroSectionH * 3) / 2;
      this.rightHourGlass.zIndex = 10;
      // Calculate 300vh in pixels

      /* Crucial: We divide the desired pixel height by the world's scale.
           This cancels out the parent's scaling so the hourglass 
           is exactly 'totalCanvasHeightPx' tall on the screen.
        */
      this.rightHourGlass.height = (totalCanvasHeightPx / scale) * 1.05;

      // Keep the width proportional so it doesn't look squished
      this.rightHourGlass.scale.x = this.rightHourGlass.scale.y;
    }
    if(this.purpleCloudBack){
              this.purpleCloudBack.y = heroSectionH * 1.9;
      this.purpleCloudBack.baseX = this.logicalWidth / 2;
      this.purpleCloudBack.scale.set(.75);
      this.purpleCloudBack.zIndex = -2;
      if (this.purpleCloudBack.x === 0)
        this.purpleCloudBack.x = this.purpleCloudBack.baseX;
    }
    if(this.purpleCloudBack2){
              this.purpleCloudBack2.y = heroSectionH * 1.6;
      this.purpleCloudBack2.baseX = this.logicalWidth / 2+100;
      this.purpleCloudBack2.scale.set(.75);
      this.purpleCloudBack2.zIndex = -3;
      if (this.purpleCloudBack2.x === 0)
        this.purpleCloudBack2.x = this.purpleCloudBack2.baseX;
    }
    
    if(this.purpleCloudBack3){
              this.purpleCloudBack3.y = heroSectionH * 1.9;
      this.purpleCloudBack3.baseX = this.logicalWidth / 2+100;
      this.purpleCloudBack3.scale.set(1);
      this.purpleCloudBack3.zIndex = -1;
      if (this.purpleCloudBack3.x === 0)
        this.purpleCloudBack3.x = this.purpleCloudBack3.baseX;
    }
    if(this.heroBg){
        // const heroBg = screenH * 3;
      // Stick to the absolute top-left of the world container
      this.heroBg.x = 0;
      this.heroBg.y =0;
      this.heroBg.zIndex = 10;
      // Calculate 300vh in pixels
      this.heroBg.zIndex = 0;
      /* Crucial: We divide the desired pixel height by the world's scale.
           This cancels out the parent's scaling so the hourglass 
           is exactly 'totalCanvasHeightPx' tall on the screen.
        */
      this.heroBg.height = heroSectionH;
      this.heroBg.width = this.logicalWidth;

      // Keep the width proportional so it doesn't look squished

    }
        if(this.futureBg){
        // const heroBg = screenH * 3;
      // Stick to the absolute top-left of the world container
      this.futureBg.x = 0;
      this.futureBg.y =heroSectionH*3;
      this.futureBg.zIndex = 0;
      // Calculate 300vh in pixels

      /* Crucial: We divide the desired pixel height by the world's scale.
           This cancels out the parent's scaling so the hourglass 
           is exactly 'totalCanvasHeightPx' tall on the screen.
        */
      this.futureBg.height = heroSectionH*2;
      this.futureBg.width = this.logicalWidth*2;

      // Keep the width proportional so it doesn't look squished

    }
    if(this.trainAndBridge){
            this.trainAndBridge.y = (heroSectionH*3)-450;
      this.trainAndBridge.baseX = this.logicalWidth / 2;
      this.trainAndBridge.scale.set(.8);
      this.trainAndBridge.zIndex = 4;
      if (this.trainAndBridge.x === 0)
        this.trainAndBridge.x = this.trainAndBridge.baseX;
    }
      if(this.cyberBuildfront){
            this.cyberBuildfront.y = (heroSectionH*3)-550;
      this.cyberBuildfront.baseX = this.logicalWidth*.65 ;
      this.cyberBuildfront.scale.set(.8);
      this.cyberBuildfront.zIndex = 4;
      if (this.cyberBuildfront.x === 0)
        this.cyberBuildfront.x = this.cyberBuildfront.baseX;
    }
          if(this.cyberBuildback){
            this.cyberBuildback.y = (heroSectionH*3)-550;
      this.cyberBuildback.baseX = this.logicalWidth*.6 ;
      this.cyberBuildback.scale.set(1.4);
      this.cyberBuildback.zIndex = 4;
      if (this.cyberBuildback.x === 0)
        this.cyberBuildback.x = this.cyberBuildback.baseX;
    }
  }
}
