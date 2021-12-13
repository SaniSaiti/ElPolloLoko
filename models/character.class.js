class Character extends MovableObject {


    height = 280;
    y = 160;
    speed = 10;

    imagesWalking = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'

    ];
    world;
    walking_Sound = new Audio('audio/walking.mp3');



    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.imagesWalking);

        this.animate();


    }

    animate() {


        setInterval(() => {
            this.walking_Sound.pause();
            if (this.world.keyboard.right && this.x < this.world.level.levelEnd_X) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_Sound.play();
            }

            if (this.world.keyboard.left && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_Sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {

                // Walk Animation
                this.playAnimation(this.imagesWalking);

            }
        }, 50);
    }


    jump() {



    }
}