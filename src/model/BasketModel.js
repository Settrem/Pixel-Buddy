export class Basket {
    constructor(imagePath, x, y) {
        this.width = 50;
        this.height = 50;
        this.imagePath = imagePath;

        this.x = x || 0;
        this.y = y || 0;

        this.dx = 0;
        this.movementSpeed = 100;
    }
    movement(e) {
        let pos = e.data.global;
        this.x = pos.x;
    }
}

export const basketModel = { Basket };