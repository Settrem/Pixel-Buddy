import Phaser from "phaser";

// Constants
const sizes = { width: 800, height: 600 };
const speedDown = 300;

class GameScene extends Phaser.Scene {
  constructor() {
    super("scene-game");
  }

  // Receive data passed from React when the scene starts
  init(data) {
    this.handleScoreChange = data.onScoreChange;
    this.handleGameOver = data.onGameOver;
    this.points = 0;
  }

  preload() {
    // Only visual assets now
    this.load.image("game-bg", "/assets/bg.png");
    this.load.image("basket", "/assets/basket.png");
    this.load.image("apple", "/assets/apple.png");
    
    // Fallbacks just in case assets are missing (draws colored rectangles)
    this.load.on('loaderror', (fileObj) => {
        if (fileObj.type === 'image') {
            this.textures.addBase64(fileObj.key, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='); // white pixel
        }
    });
  }

  create() {
    // 1. Setup Background
    this.add.image(0, 0, "game-bg").setOrigin(0, 0).setDisplaySize(sizes.width, sizes.height);
    this.cameras.main.setBackgroundColor('#87CEEB'); 

    // 2. Setup Player (Basket)
    this.player = this.physics.add.image(0, sizes.height - 100, "basket").setOrigin(0, 0);
    this.player.setImmovable(true);
    this.player.body.allowGravity = false;
    this.player.setCollideWorldBounds(true);
    this.player.setSize(100, 20).setOffset(0, 10); 

    // 3. Setup Target (Apple)
    this.target = this.physics.add.image(this.getRandomX(), 0, "apple").setOrigin(0, 0);
    this.target.setMaxVelocity(0, speedDown);
    this.target.setBounce(0);
    this.target.setGravityY(speedDown); 

    // 4. Physics Interactions
    this.physics.add.overlap(this.target, this.player, this.targetHit, null, this);
  }

  update() {
    // Game Over Condition
    if (this.target.y >= sizes.height - 20) {
      this.gameOver();
    }

    // Player Movement (Mouse Follow)
    const mouseX = this.input.activePointer.x;
    const targetX = mouseX - (this.player.width / 2); 
    
    // Keep within screen bounds
    const clampedX = Phaser.Math.Clamp(
      targetX,
      0,
      sizes.width - this.player.width
    );

    // Smooth movement
    this.player.x = Phaser.Math.Linear(this.player.x, clampedX, 0.2);
  }

  getRandomX() {
    return Math.floor(Math.random() * (sizes.width - 50));
  }

  targetHit() {
    // Reset Apple Position
    this.target.setY(0);
    this.target.setX(this.getRandomX());
    
    // Update Score
    this.points++;

    // Notify React
    if (this.handleScoreChange) {
        this.handleScoreChange(this.points);
    }
  }

  gameOver() {
    this.scene.pause();
    // Notify React
    if (this.handleGameOver) {
        this.handleGameOver(this.points);
    }
  }
}

export const launchGame = (containerId, callbacks) => {
  const config = {
    type: Phaser.AUTO,
    parent: containerId, 
    width: sizes.width,
    height: sizes.height,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 }, 
        debug: false,
      },
    },
    scene: GameScene,
  };

  const game = new Phaser.Game(config);
  game.scene.start("scene-game", callbacks);
  return game;
};