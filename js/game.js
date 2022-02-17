let canvas;
let world;
let keyboard = new Keyboard();



function init() {

    canvas = document.getElementById('canvas');
    level1 = getLevel1();
    world = new World(canvas, keyboard);


    console.log('My Character', world.character);

    return 0;
}


window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.right = true;
    }

    if (event.keyCode == 37) {
        keyboard.left = true;
    }

    if (event.keyCode == 38) {
        keyboard.up = true;
    }

    if (event.keyCode == 40) {
        keyboard.down = true;
    }

    if (event.keyCode == 32) {
        keyboard.space = true;
    }
    if (event.keyCode == 68) {
        keyboard.d = true;
    }

});


window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.right = false;
    }

    if (event.keyCode == 37) {
        keyboard.left = false;
    }

    if (event.keyCode == 38) {
        keyboard.up = false;
    }

    if (event.keyCode == 40) {
        keyboard.down = false;
    }

    if (event.keyCode == 32) {
        keyboard.space = false;
    }

    if (event.keyCode == 68) {
        keyboard.d = false;
    }

});

function winGame() {
    document.getElementById('win').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    starGame();
    // document.getElementById('img').classList.add('d-none'); 



}

function starGame2() {
    document.getElementById('gameover').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    starGame();
    // document.getElementById('img').classList.add('d-none'); 



}


function starGame() {
    document.getElementById('img').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');


    init();

}

function fullscreen() {
    canvas.requestFullscreen();

}

info = false;

function playlogicClick() {

    if (info) {
        document.getElementById('playlogic').classList.add('d-none');
        info = false;

    } else {
        document.getElementById('playlogic').classList.remove('d-none');
        info = true;

    }




}