/**
 * sets all information for the class character as an extencion of MovableObject
 */


class Character extends MovableObject {


    height = 280;
    y = 80;
    speed = 10;

    imagesWalking = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'

    ];


    imgagesJumping = [

        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
    ];

    imgagesDead = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];


    imagesHurt = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'

    ];

    world;
    walking_Sound = new Audio('audio/walking.mp3');
    jump_Sound = new Audio('audio/jump.mp3');


    /**
     * sets all relevant information
     */

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imgagesJumping);
        this.loadImages(this.imgagesDead);
        this.loadImages(this.imagesHurt);
        this.applyGravity();
        this.animate();


    }

    /**
     * collection of all methods that have animations in it
     */

    animate() {

        setInterval(() => {
            this.walking_Sound.pause();
            if (this.world.keyboard.right && this.x < this.world.level.levelEnd_X) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_Sound.play();

            }

            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;

                this.walking_Sound.play();
            }


            if (this.world.keyboard.space && !this.isAboveGround()) {
                this.jump();
                this.jump_Sound.play();
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.imgagesDead);
            } else if (this.isHurt()) {
                this.playAnimation(this.imagesHurt);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.imgagesJumping);
            } else {
                if (this.world.keyboard.right || this.world.keyboard.left) {

                    // Walk Animation
                    this.playAnimation(this.imagesWalking);
                }
            }
        }, 50);



    }



    isOverHead(enemy) {

        let result = this.y + this.height - enemy;
        console.log('result ', result);
        return this.y + this.height - enemy.y <= 20
    }



}