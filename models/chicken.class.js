class Chicken extends MovableObject {

    y = 370;
    height = 70;



    imagesWalking = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'

    ];



    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.imagesWalking);

        this.x = 400 + Math.random() * 500; // Zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();

    }


    animate() {

        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.imagesWalking.length; // let i = 0 % 6
            let path = this.imagesWalking[i]
            this.img = this.imageCache[path];
            this.currentImage++
        }, 100);

    }


}