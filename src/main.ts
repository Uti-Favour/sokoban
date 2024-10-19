import { create_canvas } from "./utils";
import { draw_image } from "./utils";

//! I should add the image assets
// const block = 'public/block_05.png';
// const character = 'public/player_23.png';
// const ground = 'public/ground_01.png';
// const environment = 'public/environment_01.png';

let w = 400, h = 400;

const Environment :[]  = [];


//This function draws the game
function draw_game() {
    create_canvas(w, h);

    //How did you define this again
    let Blocks: [] = []

}


//Handles user input (key movement)
function handle_movement() {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':

                break;

            case 'ArrowDown':

                break;
            case 'ArrowLeft':

                break;
            case 'ArrowRight':

                break;

            default:
                break;
        }
    })
}




//I have to calm down and think!