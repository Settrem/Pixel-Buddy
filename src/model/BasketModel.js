export const basketModel = {
    Basket: {
        width: 50,
        height: 10,
        x: app.view.width / 2,
        y: app.view.height / 2,
        dx: 0,
        movementSpeed: 100,

        movement(e) {
            let pos = e.data.global;
            basket.x = pos.x;
        }
    }
}

