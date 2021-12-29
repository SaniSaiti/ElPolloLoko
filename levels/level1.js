let level1;

function getLevel1() {
    return new Level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),


            new Endboss(),
        ],


        [
            new Cloud()
        ],


        [

            new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

            new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

            new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),


            new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
            new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
            new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

            new Backgroundobject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
            new Backgroundobject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
            new Backgroundobject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
            new Backgroundobject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3)



        ],

        [
            new MovableObject('Bottle'),
            new MovableObject('Bottle'),
            new MovableObject('Bottle'),
            new MovableObject('Bottle'),
            new MovableObject('Bottle')



        ],

        [
            new MovableObject('Coin'),
            new MovableObject('Coin'),
            new MovableObject('Coin'),
            new MovableObject('Coin')



        ]



    )

}

/*
function initLevelChickens(count) {
    for (let i = 0; i <= count; i++) {

    }
}
*/