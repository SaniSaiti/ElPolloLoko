class Level {
    enemies;
    clouds;
    bottles;
    coins;
    backgroundsObject;
    levelEnd_X = 2250;


    constructor(enemies, clouds, backgroundsObject, bottles, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundsObject = backgroundsObject;
        this.bottles = bottles;
        this.coins = coins;
    }
}