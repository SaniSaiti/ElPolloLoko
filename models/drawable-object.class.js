/**
 * class for all objects on the canvas that are drawn.
 */


class DrawableObject {
    img;
    imageCache = [];
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;




    /**
     * this method defines the images for the different objects
     * @param {sting} path path to the images for the different drawn objects on the canvas
     */

    loadImage(path) {
        this.img = new Image(); // this.img == gleich wie document.getElementbyId('image') <img id='image' src>
        this.img.src = path;

    }


    /**
     * draws objects on the canvas with a specific image, x-coordinate, y-coordinate, width and height
     * @param {*} ctx I have no Idea what that is
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * draws frame around specific objects. This is just for development and not in the real game
     * @param {*} ctx I have no idea what that is
     */

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken /*|| this instanceof Bottle || this instanceof Coin || this instanceof ThrowBottle*/ ) {


            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
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


}