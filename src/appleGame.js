import Phaser from "phaser";
import bg from './assets/gfxfolder/bg.png';
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
    this.points = 0;
  }

  preload() {
    this.load.image("game-bg", bg);
    this.load.image("basket", basket);
    this.load.image("apple", apple);
  }

  create() {
    const { width, height } = this.scale;
    this.maxApples = 10;
    this.applesDropped = 0;

    // Background
    this.bg = this.add.image(0, 0, "game-bg").setOrigin(0, 0);
    this.bg.setDisplaySize(width, height);

    // Player
    this.player = this.physics.add.image(0, height - 100, "basket").setOrigin(0, 0);
    this.player.setImmovable(true);
    this.player.body.allowGravity = false;
    this.player.setScale(4); 
    this.player.setSize(100 / 4, 20 / 4).setOffset(0, 10); 

    // Target
    this.target = this.physics.add.image(this.getRandomX(), 0, "apple").setOrigin(0, 0);
    this.target.setScale(4);
    this.target.setMaxVelocity(10, speedDown);
    this.target.setBounce(0);
    this.target.setGravityY(speedDown);

    this.physics.add.overlap(this.target, this.player, this.targetHit, null, this);
    this.scale.on('resize', this.resize, this);
  }

  update() {
    const { width, height } = this.scale;

    // Check for Miss
    if (this.target.y >= height + 50) {
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
      this.target.setY(0);
      this.target.setX(this.getRandomX());
      this.target.setVelocity(0, 0);
    }
  }

  targetHit() {
    this.handleAppleOutcome(true);
  }

  getRandomX() {
    return Math.floor(Math.random() * (this.scale.width - 50));
  }

  resize(gameSize) {
    const { width, height } = gameSize;
    this.physics.world.setBounds(0, 0, width, height);
    this.bg.setDisplaySize(width, height);
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