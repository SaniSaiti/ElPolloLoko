class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    botal = 0;
    coin = 0;
    lastHit = 0;




    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowBottle) {
            return true;
        } else {
            return this.y < 180;
        }

    }




    // is Colliding widh Chicken
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }


    // Widh Coin hit
    hitCoin() {
        this.coin += 20;
        if (this.coin > 100) {
            this.coin = 100;
        }
    }

    /*
        // Widh Bottle hit
        hitBottle() {
            this.chickenEnergi -= 20;
            if (this.chickenEnergi < 0) {
                this.chickenEnergi = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    */

    // With Chicken hit
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;

        } else {
            this.lastHit = new Date().getTime();
        }

    }

    isDead() {
        return this.energy == 0;

    }


    isHurt() {
        let timepasse = new Date().getTime() - this.lastHit; // Differenc in ms
        timepasse = timepasse / 1000; // Differenc in sek
        return timepasse < 0.2;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    moveRight() {

        this.x += this.speed;


    }

    moveLeft() {
        this.x -= this.speed;


    }


    jump() {
        this.speedY = 30;
    }

    constructor(name) {
        super();
        if (name != undefined) {
            let moveOb = WorldObject().filter(em => em.name == name)[0]
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