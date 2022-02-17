/**
 * shows a startus bar for collectet bottles on the canvas
 */

class Status extends DrawableObject {

    image;


    // setPercentage(50)
    setPercentage(percentage) {
        this.percentage = percentage; // => 0......5
        let path = this.image[this.resoloveImageIndex()]
        this.img = this.imageCache[path];
    }

    /**
     * translates a percentage to a number
     * @returns number
     */
    resoloveImageIndex() {
            if (this.percentage == 100) {
                return 5;

            } else if (this.percentage > 80) {
                return 4;
            } else if (this.percentage > 60) {
                return 3;
            } else if (this.percentage > 40) {
                return 2;
            } else if (this.percentage > 20) {
                return 1;
            } else {
                return 0;
            }

        }
        /**
         * give the Statusfilter of WorldObject. (ui.js)
         * @param {*} name 
         */
    constructor(name) {
        super();
        let bar = StatusBars.filter(b => b.name == name)[0];
        console.log('barwerte', bar)
        this.image = bar.images;
        this.loadImage(bar.img);
        this.loadImages(bar.images);
        this.x = bar.x;
        this.y = bar.y;
        this.width = bar.width;
        this.height = bar.height;
        this.setPercentage(bar.percentage);

    }
}