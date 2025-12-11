import '../../styles/App.css';

export function ApplesGameView(props) {

    function gameLoop() {
        // While true loop
        playerMovement(e);
        appleSpawn();
    }
    function clearSprites() {
        props.clearSprites();
    }
    // render sprites
    function renderSprites() {
        props.renderSprites();
    }
    // start 3 second countdown
    function countDown() {
        props.countDown();
    }
    // Enable movement for the player
    function playerMovement(e) {
        props.playerMovement(e);
    }
    // spawn apples
    function appleSpawn() {
        props.appleSpawn();
    }

    return (
    clearSprites(),
    renderSprites(),
    countDown(),
    gameLoop()
    )
}


/**
 * BASKET
 * WIDTH
 * HEIGHT
 * FOLLOWS MOUSE
 * 
 * SPAWN POSITION
 * MIDDLE OF SCREEN
 * 
 * APPLE
 * WIDTH
 * HEIGHT
 * FALLS IN RANDOM POSITON
 * GRAVITY >> DOWNARD TRAJECTORY
 * 
 * SCORE
 * X AMOUNT OF APPLES FALL
 * AMOUNT CAUGHT IS AMOUNT OF POINTS RECIEVED
 * AMOUNT POINTS TRANSLATE TO HUNGER FILLED
 * 
 * BOUNDARIES
 * BASKET CAN ONLY BE MOVED IN X-POSITION
 * APPLES FALL FROM ENTIRE SCREEN - SOME LEEWAY FROM UPPER BOUNDARY
 * 
 * GAMEOVERVIEW
 * TOTAL AMOUNT OF SCORE DISPLAYED
 * BACK TO BUDDY BUTTON
 * 
 */