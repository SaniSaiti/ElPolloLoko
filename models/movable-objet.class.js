/**
 * defines all objects with the ability to move around the canvas
 */

class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    botal = 0;
    coin = 0;
    lastHit = 0;
    bosenergy = 100;

    /**
     * sets the ability of gravity to objects
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    /**
     * tells if an object if above ground or not like jumping
     * @returns true or y < 150
     */
    isAboveGround() {
        if (this instanceof ThrowBottle) {
            return true;
        } else {
            return this.y < 180;
        }

    }

    /**
     * tells if a movableObject is colliding with an other object
     * @param {??} mo 
     * @returns true or false
     */

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x && this.y < mo.y + mo.height;
    }

    /**
     * tells if an charcter was colliding with an other Coins
     */
    hitCoin() {
        this.coin += 20;
        if (this.coin > 100) {
            this.coin = 100;
        }
    }



    /**
     * tells if an object was colliding with an other object
     */
    hit() {
            this.energy -= 5;
            if (this.energy < 0) {
                this.energy = 0;

            } else {
                this.lastHit = new Date().getTime();
            }

        }
        /**
         * if the energy of an object is equel or below 0 then the character is dead and the energy is set to 0
         * @returns energy==0
         */
    isDead() {
        return this.energy == 0;

    }

    /**
     * sets a time between the last hit and the current time
     * @returns timepasses < 1
     */
    isHurt() {
        let timepasse = new Date().getTime() - this.lastHit; // Differenc in ms
        timepasse = timepasse / 1000; // Differenc in sek
        return timepasse < 0.2;
    }

    /**
     * Animation images Path
     */

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    /**
     * ability to move to the right side
     */
    moveRight() {

        this.x += this.speed;


    }

    /**
     * ability to move to the left side
     */

    moveLeft() {
            this.x -= this.speed;


        }
        /**
         * ability to jump with a specific speed in y-direction
         * @returns speedY = 30
         */

    jump() {
        this.speedY = 30;
    }

    /**
     * give the filter of WorldObject. (ui.js)
     * @param {*} name 
     */
    constructor(name) {
        super();
        if (name != undefined) {
            let moveOb = WorldObject().filter(em => em.name == name)[0]
            console.log('moveOb', moveOb)
            super.loadImage(moveOb.img);
            this.loadImages(moveOb.images);
            this.x = moveOb.x;
            this.y = moveOb.y;
            this.height = moveOb.height;
        }
        //200 + Math.random() * 2200; // Zahl zwischen 200 und 700
        //this.speed = 0.15 + Math.random() * 0.5;
    }
}