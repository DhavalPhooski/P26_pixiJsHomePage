import * as PIXI from 'pixi.js';

class ResourceManager {
    constructor() {
        this.assets = {}; // Store loaded textures here
        
        // Define your asset list here
        // alias: how you want to call it in code
        // src: where the file is located
        this.manifest = [
            { alias: 'spritesheet', src: '/spritesheet.avif' },
            { alias: 'bigThing', src: '/bigThingSheet.avif' },
            { alias: 'bg', src: '/bg.avif' },
            // Add other images here in the future
            // { alias: 'clouds', src: '/clouds.png' } 
        ];
    }

    // 1. Load all assets defined in the manifest
    async loadAll() {
        // You can add a bundle to Pixi
        PIXI.Assets.addBundle('game-assets', this.manifest);

        // Load the bundle
        // content is an object containing all your textures
        const content = await PIXI.Assets.loadBundle('game-assets', (progress) => {
            console.log(`Loading... ${progress * 100}%`);
            // You can update a DOM loading bar here
        });

        this.assets = content;
        return content;
    }

    // 2. Helper to get a specific texture
    getTexture(alias) {
        return this.assets[alias];
    }

    // 3. Helper to Crop (Slice) a texture from the spritesheet
    // This makes your object classes much cleaner!
getSubTexture(alias, x, y, w, h) {
        const original = this.getTexture(alias);
        
        if (!original) {
            console.error(`Texture '${alias}' not found!`);
            return PIXI.Texture.EMPTY;
        }

        // --- THE FIX FOR PIXI V8 ---
        // We must create a new Texture using the 'source' of the original
        // and explicitly pass the 'frame' rectangle.
        return new PIXI.Texture({
            source: original.source,
            frame: new PIXI.Rectangle(x, y, w, h)
        });
    }
}

// Export a single instance
export const Resources = new ResourceManager();