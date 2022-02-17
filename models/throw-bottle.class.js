/**
 * defines all objects with the ability to throw
 */

class ThrowBottle extends MovableObject {

    width = 50;
    height = 80;


    imagesbottels = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',


    ];

    /**
     * sets objects on canvas
     * @param {number} x coordinat in x-direction
     * @param {number} y coordinat in y-direction
     * @param {number} y  otherDirection
     */
    constructor(x, y, otherDirection) {
        super().loadImage('img/6.botella/1.Marcador.png');
        this.loadImages(this.imagesbottels);
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.throw();

    }

    /**
     * method discribes a function
     */
    throw () {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            if (this.otherDirection) {
                this.x += 10;
            } else {
                this.x -= 10;
            }

        }, 20);
    }


}