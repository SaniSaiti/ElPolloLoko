class ThrowBottle extends MovableObject {



    constructor(x, y) {
        super().loadImage('img/6.botella/1.Marcador.png');
        this.x = x;
        this.y = y;
        this.throw();
    }

    throw () {

        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 20);
    }

}