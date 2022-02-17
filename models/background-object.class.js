/**
 * class for the background objects as a part of the class movableObject.
 */

class Backgroundobject extends MovableObject {


    /**
     * sets the right image with the right size
     * @param {string} imagePath path to the image at the level1.js
     * @param {number} x position at the canvas in x-direction with the number from lavel1.js
     */

    width = 720;
    height = 480;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;


    }

}