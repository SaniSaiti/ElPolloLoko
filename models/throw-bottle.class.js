class ThrowBottle extends MovableObject {

    width = 50;
    height = 80;


    imagesbottels = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',


    ];

    constructor(x, y) {
        super().loadImage('img/6.botella/1.Marcador.png');
        this.loadImages(this.imagesbottels);
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