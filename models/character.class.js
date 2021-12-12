class Character extends MovableObject {


    height = 280;
    y = 160;

    imagesWalking = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'

    ];
    word;



    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.imagesWalking);

        this.animate();


    }

    animate() {

        setInterval(() => {

            if (this.world.keyboard.right) {
                let i = this.currentImage % this.imagesWalking.length; // let i = 0 % 6
                let path = this.imagesWalking[i]
                this.img = this.imageCache[path];
                this.currentImage++
            }
        }, 100);

    }


    jump() {



    }
}