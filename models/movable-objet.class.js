class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image(); // this.img == gleich wie document.getElementbyId('image') <img id='image' src>
        this.img.src = path;


    }


    /**
     * 
     * @param {Array} arr - ['img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',....] 
     */

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });

    }

    playAnimation(images) {
        let i = this.currentImage % this.imagesWalking.length; // let i = 0 % 6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    moveRight() {


        console.log('Move-Rigth');
    }

    moveLeft() {

        setInterval(() => {

            this.x -= this.speed;


        }, 1000 / 60);

    }

}