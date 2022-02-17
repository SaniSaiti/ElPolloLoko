/**
 * this is the world of the game. Here are all classes coming together
 */

class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    lifebar = new Status("LifeBar");
    bottlebar = new Status("BottlesBar");
    coinbar = new Status("CoinsBar");
    lifebarBos = new Status("LifeBarBoss");
    throwBottle = [];
    shot = 0;
    collisionInterval;

    //endbos = new Endboss();
    endbos = level1.enemies[level1.enemies.length - 1];

    hit_Sound = new Audio('audio/hit.mp3');

    /**
     * 
     * @param {canvas} canvas
     * @param {Keyboard} keyboard
     */
    constructor(canvas, keyboard) {
            this.ctx = canvas.getContext('2d');
            this.canvas = canvas;
            this.keyboard = keyboard;
            this.draw();
            this.setWorld();
            this.checkCollision();

        }
        /**
         * method to draw all objects on the canvas
         */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Check AllCollision hits 
     *      */
    checkCollision() {
        this.collisionInterval = setInterval(() => {

            this.checkThrowBottle();

            this.checkCollisionWithCoins();

            this.checkCollisionWithBottel();

            this.checkCollisionWithChicken();

            this.checkCollisionBottleWithChicken();


        }, 40);
    }

    /**
     * Check Charakter is colliding with throwbottle
     */

    checkThrowBottle() {
        if (this.keyboard.d /*&& this.shot > 0*/ ) {
            let bot = new ThrowBottle(this.character.x + 50, this.character.y + 140, !this.character.otherDirection);
            this.throwBottle.push(bot);
            this.shot -= 20;
            this.bottlebar.setPercentage(this.shot);
            console.log('shot nach schuss', this.shot);
        }
    }

    /**
     * Check Charakter is colliding with Coins 
     */
    checkCollisionWithCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.hitCoin();
                this.coinbar.setPercentage(this.character.coin);
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.hit_Sound.play();
            }
        })
    };

    /**
     * Check Character is colliding  with bottle
     */
    checkCollisionWithBottel() {
        this.level.bottles.forEach((botell) => {
            if (this.character.isColliding(botell)) {
                this.shot += 20;
                this.bottlebar.setPercentage(this.shot);
                this.level.bottles.splice(this.level.bottles.indexOf(botell), 1);
                this.hit_Sound.play();
            }
        })
    };

    /**
     * Check Character is colliding  with Chicken
     */

    checkCollisionWithChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !enemy.isHurt() &&
                !this.character.isDead() && !this.character.isHurt()
            ) {

                if (this.character.isOverHead(enemy)) {

                    enemy.energy = 0;
                    setTimeout(() => {
                        this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1)

                    }, 260);
                } else {
                    this.character.hit();
                    this.lifebar.setPercentage(this.character.energy);
                }

            }
            if (this.character.isDead()) {
                document.getElementById('gameover').classList.remove('d-none');
                document.getElementById('canvas').classList.add('d-none');
                clearInterval(this.collisionInterval);
            }
        });
    };


    /**
     * Check Bottle is colliding  with Chicken
     */

    checkCollisionBottleWithChicken() {
        this.level.enemies.forEach((enemy) => {
            this.throwBottle.forEach((bot) => {
                if (bot.isColliding(enemy) && !enemy.isDead() && !enemy.isHurt()) {
                    enemy.hit();
                    this.lifebarBos.setPercentage(this.endbos.energy);
                    this.endbos.x = this.endbos.x - Math.random() * 500;
                    setTimeout(() => {
                        this.endbos.x = 2400;
                    }, 500);
                    if (enemy.isDead()) {
                        setTimeout(() => {
                            this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1)
                        }, 260);
                    }
                    if (this.endbos.isDead()) {
                        document.getElementById('win').classList.remove('d-none');
                        document.getElementById('canvas').classList.add('d-none');
                        clearInterval(this.collisionInterval);
                    }
                }
            });
        });
    }


    /**
     * method for drawing all objects on the canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.level.backgroundsObject);

        this.ctx.translate(-this.camera_x, 0);
        //  Space for fixed objects


        this.addToMap(this.lifebar);
        this.addToMap(this.bottlebar);
        this.addToMap(this.coinbar);


        // Forwarts
        this.ctx.translate(this.camera_x, 0);



        this.addToMap(this.lifebarBos);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.throwBottle);


        this.ctx.translate(-this.camera_x, 0);

        // Draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();

        });
    };

    /**
     * adds object to canvas
     * @param {Array} objects
     */

    addObjectToMap(objects) {

            objects.forEach(o => {
                this.addToMap(o)
            });

        }
        /**
         * adds object to world
         * @param {MovableObject} mo
         */
    addToMap(mo) {

        if (mo.otherDirection) {
            this.flipImage(mo);

        }
        mo.draw(this.ctx);

        mo.drawFrame(this.ctx);




        if (mo.otherDirection) {
            this.flipBackImage(mo);

        }
    }

    /**
     * if object is walking in an other direction the images flips around
     * @param {MovableObject} mo
     */
    flipImage(mo) {

        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * if object is walking in an other direction the images flips around
     * @param {MovableObject} mo
     */
    flipBackImage(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


}