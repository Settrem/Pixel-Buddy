export class Apple {
    constructor(imagePath, x = 0, y = 0) {
        this.width = 5;
        this.height = 5;
        this.imagePath = imagePath;
        
        this.x = x;
        this.y = y; 
        
        this.dx = 0;
        this.movementSpeed = 100;
    }

    movement(e) {
        let pos = e.data.global;
        this.x = pos.x;
    }
}

export const appleModel = { Apple };