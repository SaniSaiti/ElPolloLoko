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
    throwBottle = [];
    shot = 0;
    collisionInterval;

    //endbos = new Endboss();
    endbos = level1.enemies[level1.enemies.lenth - 1];

    hit_Sound = new Audio('audio/hit.mp3');




    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();


    }

    setWorld() {
        this.character.world = this;
    }

    checkCollision() {
        this.collisionInterval = setInterval(() => {



            this.checkThrowBottle();

            this.checkCollisionWithCoins();

            this.checkCollisionWithBottel();

            this.checkCollisionWithChicken();

            this.checkCollisionBottleWithChicken();



        }, 40);
    }

    checkThrowBottle() {
        if (this.keyboard.d /*&& this.shot > 0*/ ) {
            let bot = new ThrowBottle(this.character.x + 50, this.character.y + 140, !this.character.otherDirection);
            this.throwBottle.push(bot);
            this.shot -= 20;
            this.bottlebar.setPercentage(this.shot);
            console.log('shot nach schuss', this.shot);
        }
    }

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


    checkCollisionWithChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.lifebar.setPercentage(this.character.energy);
            }
            if (this.character.isDead()) {
                document.getElementById('gameover').classList.remove('d-none');
                document.getElementById('canvas').classList.add('d-none');
                clearInterval(this.collisionInterval);
            }
        });
    };


    checkCollisionBottleWithChicken() {
        this.level.enemies.forEach((enemy) => {
            this.throwBottle.forEach((bot) => {
                if (bot.isColliding(enemy) && !enemy.isDead() && !enemy.isHurt()) {
                    enemy.hit();
                    if (enemy.isDead()) {
                        setTimeout(() => {
                            this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1)
                        }, 2000);
                    }
                }

            });
        });




    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundsObject);

        this.ctx.translate(-this.camera_x, 0);
        //  Space for fixed objects
        this.addToMap(this.lifebar);
        this.addToMap(this.bottlebar);
        this.addToMap(this.coinbar);
        this.ctx.translate(this.camera_x, 0); // Forwarts


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


    addObjectToMap(objects) {

        objects.forEach(o => {
            this.addToMap(o)
        });

    }

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

    flipImage(mo) {

        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipBackImage(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


}