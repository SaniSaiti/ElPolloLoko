class Endboss extends MovableObject {


    height = 400;
    width = 250;
    y = 70;




    imagesWalking = [

        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];


    imagesHurt = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',

    ];


    imgagesDead = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',

    ];




    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imgagesDead);
        this.loadImages(this.imagesHurt);
        this.animate();
        this.x = 2400;




    }

    animate() {

        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.imgagesDead);
            } else if (this.isHurt()) {
                this.playAnimation(this.imagesHurt);
            } else {
                this.playAnimation(this.imagesWalking);
            }
        }, 50);


        // setInterval(() => {

        //     if (this.energy < 30) {
        //         this.playAnimation(this.imgagesDead);
        //     } else if (this.energy > 60) {
        //         this.playAnimation(this.imagesHurt);
        //     } else if (this.energy > 80) {
        //         this.playAnimation(this.imagesWalking);
        //     }


        // }, 100);



        // setInterval(() => {
        //     if (this.energy > 90) {
        //         this.playAnimation(this.imagesWalking);
        //         //  console.log('lalla1', this.energy)
        //     } else if (this.energy < 90) {
        //         this.playAnimation(this.imagesHurt);
        //         //  console.log('lalla2', this.energy)
        //     } else if (this.energy < 20) {
        //         this.playAnimation(this.imgagesDead);
        //         //  console.log('lalla3', this.energy)
        //     }



        // }, 100);


        // 





    }




}