/**
 * class chicken as extention of MovableObject. Chicken are part of the enemies in level1.js
 */


class Chicken extends MovableObject {

    y = 370;
    height = 70;
    energy = 5;




    imagesWalking = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',

    ];

    imgagesDead = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png',

    ];

    /**
     * method for setting all information for an automised enemie
     */

    constructor() {
            super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
            this.loadImages(this.imagesWalking);
            this.loadImages(this.imgagesDead);

            this.x = 400 + Math.random() * 1700; // Zahl zwischen 200 und 700
            this.speed = 0.15 + Math.random() * 0.5;

            this.animate();
            this.energy = this.energy;

        }
        /**
         * method for animating chicken moving to the left side of the screen with a specific speed
         */

    animate() {


        setInterval(() => {

            this.moveLeft();



        }, 1000 / 60);



        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.imgagesDead);
            } else {
                this.playAnimation(this.imagesWalking);
            }




        }, 100);

    }


}