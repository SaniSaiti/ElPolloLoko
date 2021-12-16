class Status extends DrawableObject {

    image;


    // setPercentage(50)
    setPercentage(percentage) {
        this.percentage = percentage; // => 0......5
        let path = this.image[this.resoloveImageIndex()]
        this.img = this.imageCache[path];
    }


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



}