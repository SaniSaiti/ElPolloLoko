/**
 * defines the level
 */

class Level {
    enemies;
    clouds;
    bottles;
    coins;
    backgroundsObject;
    levelEnd_X = 2250;

    /**
     * 
     * @param {array} enemies tells what the enemies are
     * @param {array} clouds tells what the clouds are
     * @param {array} backgroundObjects tells what the backgroundObjects are
     * @param {array} bottles tells what the bottles are
     * @param {array} coin tells what the coins are
     */
    constructor(enemies, clouds, backgroundsObject, bottles, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundsObject = backgroundsObject;
        this.bottles = bottles;
        this.coins = coins;



    }
}