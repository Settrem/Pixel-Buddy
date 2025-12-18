import Phaser from "phaser";
import basket from './assets/gfxfolder/basket.png';
import apple from './assets/gfxfolder/apple.png';

const speedDown = 1000;

class GameScene extends Phaser.Scene {
  constructor() {
    super("scene-game");
  }

  init(data) {
    this.handleScoreChangeCB = data.onScoreChangeCB;
    this.handleGameOverCB = data.onGameOverCB;
    this.points = 0;
    this.applesDropped = 0;
  }

  preload() {
    this.load.image("basket", basket);
    this.load.image("apple", apple);
  }

  create() {
    const { width, height } = this.scale;
    this.maxApples = 10;

    // Player
    this.player = this.physics.add.image(0, height - 100, "basket").setOrigin(0, 0);
    this.player.body.allowGravity = false;

    // Target
    this.target = this.physics.add.image(this.getRandomX(), -100, "apple").setOrigin(0, 0);
    this.target.setMaxVelocity(10, speedDown);
    this.target.setGravityY(speedDown);

    // Making the setScale reactive to screen width
    this.reactiveScale(width);

    this.physics.add.overlap(this.target, this.player, this.targetHit, null, this);
    this.scale.on('resize', this.resize, this);
  }
reactiveScale(width) {
    const dynamicScale = Math.max(2, (width / 400) * 1);
    
    this.player.setScale(dynamicScale);
    this.target.setScale(dynamicScale);

    this.player.setSize(this.player.width, this.player.height * 0.5); 
  }

  update() {
    const { width, height } = this.scale;

    // Check for Miss
    if (this.target.y >= height + 100) {
      this.handleAppleOutcome(false);
    }

    // Player Movement
    const mouseX = this.input.activePointer.x;
    const targetX = mouseX - (this.player.displayWidth / 2);

    const clampedX = Phaser.Math.Clamp(
      targetX,
      0,
      width - this.player.displayWidth
    );

    this.player.x = Phaser.Math.Linear(this.player.x, clampedX, 0.2);
  }

  handleAppleOutcome(caught) {
    if (caught) {
      this.points++;
      if (this.handleScoreChangeCB) {
        this.handleScoreChangeCB(this.points);
      }
    }

    this.applesDropped++;

    if (this.applesDropped >= this.maxApples) {
      this.target.destroy();
      this.gameOver();
    } else {
      this.target.setY(-100);
      this.target.setX(this.getRandomX());
      this.target.setVelocity(0, 0);
    }
  }

  targetHit() {
    this.handleAppleOutcome(true);
  }

  getRandomX() {
    return Math.floor(Math.random() * (this.scale.width - 75));
  }

  resize(gameSize) {
    this.physics.world.setBounds(0, 0, width, height);
    this.player.y = height - 100;
  }

  gameOver() {
    this.scene.pause();
    if (this.handleGameOverCB) {
      this.handleGameOverCB(this.points, this.maxApples);
    }
  }
}

export const launchGame = (containerId, callbacks) => {
  const config = {
    type: Phaser.AUTO,
    parent: containerId,
    pixelArt: true,
    scale: {
      mode: Phaser.Scale.RESIZE,
      width: '100%',
      height: '100%',
    },
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