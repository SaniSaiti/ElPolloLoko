/**
 * class clouds as a extention of MovableObjects. Clouds are part of the backgound and are moving automaticly to the left
 */

class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;


    /**
     * 
     * @param {string} imagePath Path of the images to the clouds
     * @param {number} x start point of the clouds in x direction
     */

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.animat();


    }

    animat() {
        this.moveLeft();
    }



}