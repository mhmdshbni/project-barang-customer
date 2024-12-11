const config = {
    type: Phaser.AUTO,
    width: 1250,
    height: 590,
    scene: {
        preload: preload,
        create: create,
    }
};

const game = new Phaser.Game(config);
let completedLevels = []; 

function preload() {
    this.load.image('background', 'assets/bg.png');
    this.load.image('playButton', 'assets/button/play-button.png');
    this.load.image('creditButton', 'assets/button/credits.png');
    this.load.image('titlegame', 'assets/judulgame.png');
    this.load.image('levelButton1', 'assets/button/level1.png');
    this.load.image('levelButton2', 'assets/button/level2.png');
    this.load.image('levelButton3', 'assets/button/level3.png');
    this.load.image('levelButton4', 'assets/button/level4.png');
    this.load.image('levelButton5', 'assets/button/level5.png');
    this.load.image('levelButton6', 'assets/button/level6.png');
    this.load.image('levelButton7', 'assets/button/level7.png');
    this.load.image('levelButton8', 'assets/button/level8.png');
    this.load.image('levelButton9', 'assets/button/level9.png');
    this.load.image('levelButton10', 'assets/button/level10.png');
    this.load.image('finishBackground', 'assets/finish-bg.png');
    this.load.image('level1Background', 'assets/bg1.png');
    this.load.image('level2Background', 'assets/bg1.png');
    this.load.image('level3Background', 'assets/bg1.png');
    this.load.image('level4Background', 'assets/bg1.png');
    this.load.image('level5Background', 'assets/bg1.png');
    this.load.image('level6Background', 'assets/bg1.png');
    this.load.image('level7Background', 'assets/bg1.png');
    this.load.image('level8Background', 'assets/bg1.png');
    this.load.image('level9Background', 'assets/bg1.png');
    this.load.image('level10Background', 'assets/bg1.png');
    this.load.image('hewan1', 'assets/hewan/kuda.png');
    this.load.image('hewan2', 'assets/hewan/singa.png');
    this.load.image('hewan3', 'assets/hewan/ayam.png');
    this.load.image('hewan4', 'assets/hewan/gajah.png');
    this.load.image('hewan5', 'assets/hewan/monkey.png');
    this.load.image('hewan6', 'assets/hewan/ikan.png');
    this.load.image('hewan7', 'assets/hewan/kucing.png');
    this.load.image('hewan8', 'assets/hewan/kambing.png');
    this.load.image('hewan9', 'assets/hewan/ikan-hiu.png');
    this.load.image('hewan10', 'assets/hewan/harimau.png');
    this.load.image('restartButton', 'assets/button/restart.png');
    this.load.image('mainmenutButton', 'assets/button/mainmenu.png');
    this.load.image('playagainButton', 'assets/button/playagain.png');
    this.load.image('benarButton', 'assets/button/benar.png');
    this.load.image('salahButton', 'assets/button/salah.png');
    this.load.image('centangButton', 'assets/button/centang.png');
    this.load.image('ceklisButton', 'assets/button/ceklis.png');
    this.load.image('silangButton', 'assets/button/silang.png');
    this.load.image('soundOnButton', 'assets/button/SoundOn.png');
    this.load.image('soundOffButton', 'assets/button/SoundOff.png');
    this.load.audio('menuMusic', 'assets/sound/sound.bg1.mp3');
    this.load.audio('playSound', 'assets/sound/klick.mp3');
    this.load.audio('correctSound', 'assets/sound/benar.mp3');
    this.load.audio('wrongSound', 'assets/sound/salah.mp3');
    this.load.audio('fellSound', 'assets/sound/cobalagi.mp3');
    this.load.audio('finishSound', 'assets/sound/finish.mp3');
    this.load.image('pilihLevel', 'assets/pilihlevel.png');
    this.load.image('backButton', 'assets/button/back.png');
    this.load.image('mainlagiButton', 'assets/button/mainlagi.png');
    this.load.image('gameOverBackground', 'assets/bg1.png');
}

function create() {
    const { width, height } = this.sys.game.config;

    const bgImage = this.add.image(width / 2, height / 2, 'background');
    const scaleX = width / bgImage.width;
    const scaleY = height / bgImage.height;
    const scale = Math.max(scaleX, scaleY);
    bgImage.setScale(scale);

    const titlegame = this.add.image(width / 2, height / 3, 'titlegame').setScale(0.2);
    titlegame.setAlpha(0);

    const playButton = this.add.sprite(width / 2, height / 1.5, 'playButton').setScale(0.8);
    playButton.setInteractive();

    const creditButton = this.add.sprite(width / 2, height / 1.2, 'creditButton').setScale(0.8);
    creditButton.setInteractive();
    
    const soundOnButton = this.add.sprite(width / 8, height / 1.2, 'soundOnButton').setScale(0.8).setInteractive();
    const soundOffButton = this.add.sprite(width / 8, height / 1.2, 'soundOffButton').setScale(0.8).setInteractive();

    soundOffButton.setAlpha(0);

    const menuMusic = this.sound.add('menuMusic', { loop: true, volume: 0.5 });
    let soundMuted = false;

    menuMusic.play();

    this.tweens.add({
        targets: titlegame,
        alpha: 1,
        ease: 'Sine.easeInOut',
        duration: 1000,
        delay: 300,
    });

    this.tweens.add({
        targets: playButton,
        scaleX: 0.9,
        scaleY: 0.9,
        ease: 'Sine.easeInOut',
        duration: 800,
        yoyo: true,
        repeat: -1
    });

    this.tweens.add({
        targets: creditButton,
        scaleX: 0.9,
        scaleY: 0.9,
        ease: 'Sine.easeInOut',
        duration: 800,
        yoyo: true,
        repeat: -1
    });

    playButton.on('pointerdown', () => {
        this.sound.play('playSound', { volume: 0.10 });
        this.scene.start('LevelSelectionScene');
    });

    creditButton.on('pointerdown', () => {
        this.sound.play('playSound', { volume: 0.10 });
        this.scene.start('CreditsScene');
    });

    soundOnButton.on('pointerdown', () => {
        if (!soundMuted) {
            menuMusic.setMute(true);
            soundMuted = true;
            soundOnButton.setAlpha(0);
            soundOffButton.setAlpha(1);
        }
    });

    soundOffButton.on('pointerdown', () => {
        if (soundMuted) {
            menuMusic.setMute(false);
            soundMuted = false; 
            soundOffButton.setAlpha(0);
            soundOnButton.setAlpha(1);
        }
    });
}

// Scene untuk Credits
class CreditsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditsScene' });
    }

    create() {
        const { width, height } = this.sys.game.config;

        const bgImage = this.add.image(width / 2, height / 2, 'background');
        const scaleX = width / bgImage.width;
        const scaleY = height / bgImage.height;
        const scale = Math.max(scaleX, scaleY);
        bgImage.setScale(scale);

        this.sound.stopAll();
        
        // Menambahkan teks kredit
        this.add.text(width / 2, height / 4, 'CREDITS', {
            fontSize: '48px',
            fontFamily: 'Arial',
            color: '#FFD700',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 2.5, 'Developer :', {
            fontSize: '32px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 2, 'MUHAMAD SAHBANI', {
            fontSize: '28px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 1.7, 'Assets :', {
            fontSize: '32px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 1.5, 'background ===> https://raventale.itch.io/parallax-background', {
            fontSize: '20px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 1.4, 'tombol button ===> https://prinbles.itch.io/under', {
            fontSize: '20px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 1.3, 'sound music & sound effect ===> https://www.youtube.com/', {
            fontSize: '20px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 1.2, 'gambar hewan ===> https://google.com dan https://id.pinterest.com/', {
            fontSize: '20px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
        }).setOrigin(0.5);

        const backButton = this.add.image(width / 10, height / 6, 'backButton').setScale(0.7).setInteractive();
        
        backButton.on('pointerdown', () => {
            this.sound.play('playSound', { volume: 0.10 });
            this.scene.start('default');
        });
    }
}

// Scene untuk Game Over
class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    create() {
        const { width, height } = this.sys.game.config;

        const bgImage = this.add.image(width / 2, height / 2, 'gameOverBackground');
        const scaleX = width / bgImage.width;
        const scaleY = height / bgImage.height;
        const scale = Math.max(scaleX, scaleY);
        bgImage.setScale(scale);

        this.sound.stopAll();

        this.sound.play('wrongSound', { volume: 0.5 });

        const gameOverText = this.add.text(width / 2, height / 4, 'GAME OVER', {
            fontSize: '64px',
            fontFamily: 'Arial',
            color: '#FF0000',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        const mainmenuButton = this.add.sprite(width / 2, height / 1.5, 'mainmenutButton').setScale(0.8).setInteractive();
        const playagainButton = this.add.sprite(width / 2, height / 1.2, 'playagainButton').setScale(0.8).setInteractive();

        mainmenuButton.on('pointerdown', () => {
            this.sound.play('playSound', { volume: 0.10 });
            this.scene.start('LevelSelectionScene');
        });

        playagainButton.on('pointerdown', () => {
            this.sound.play('playSound', { volume: 0.10 });
            this.scene.start('default');
        });
    }
}

// Scene Pemilihan Level
class LevelSelectionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LevelSelectionScene' });
    }

    create() {
        const { width, height } = this.sys.game.config;

        const bgImage = this.add.image(width / 2, height / 2, 'background');
        const scaleX = width / bgImage.width;
        const scaleY = height / bgImage.height;
        const scale = Math.max(scaleX, scaleY);
        bgImage.setScale(scale);

        const backButton = this.add.image(width / 10, height / 6, 'backButton').setScale(0.7).setInteractive();
        
        backButton.on('pointerdown', () => {
            this.sound.play('playSound', { volume: 0.10 });
            completedLevels = [];
            this.scene.start('default');
        });

       const pilihLevelImage = this.add.image(width / 2, height / 6, 'pilihLevel');
       pilihLevelImage.setScale(0.1);
       
        const levelButtons = [
            { key: 'levelButton1', x: -200, y: height / 2 - 50 },
            { key: 'levelButton2', x: -100, y: height / 2 - 50 },
            { key: 'levelButton3', x: 0, y: height / 2 - 50 },
            { key: 'levelButton4', x: 100, y: height / 2 - 50 },
            { key: 'levelButton5', x: 200, y: height / 2 - 50 },
            { key: 'levelButton6', x: -200, y: height / 2 + 100 },
            { key: 'levelButton7', x: -100, y: height / 2 + 100 },
            { key: 'levelButton8', x: 0, y: height / 2 + 100 },
            { key: 'levelButton9', x: 100, y: height / 2 + 100 },
            { key: 'levelButton10', x: 200, y: height / 2 + 100 },
        ];

        levelButtons.forEach((btn, index) => {
            const levelNumber = index + 1;
            const isAccessible = completedLevels.length + 1 === levelNumber;
            const isCompleted = completedLevels.includes(levelNumber);
            const buttonKey = isCompleted ? 'centangButton' : btn.key;

            const levelButton = this.add.sprite(width / 2 + btn.x, btn.y, buttonKey).setInteractive();
            levelButton.setScale(1);

            if (isAccessible) {
                levelButton.on('pointerdown', () => {
                    this.sound.play('playSound', { volume: 0.10 });
                    this.scene.start('GameScene', { level: levelNumber });
                });
            } else {
                levelButton.setAlpha(0.5);
                levelButton.disableInteractive();
            }
        });
    }
}

// Scene untuk game
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    init(data) {
        this.currentLevel = data.level;
    }

    create() {
        const { width, height } = this.sys.game.config;

        const levelData = [
            { background: 'level1Background', hewan: 'hewan1', instruksi: 'Apakah Ini Seekor Kuda?', correctAnswer: true },
            { background: 'level2Background', hewan: 'hewan2', instruksi: 'Apakah Ini Seekor Kelinci?', correctAnswer: false },
            { background: 'level3Background', hewan: 'hewan3', instruksi: 'Apakah Ini Seekor Ayam?', correctAnswer: true },
            { background: 'level4Background', hewan: 'hewan4', instruksi: 'Apakah Ini Seekor Gajah?', correctAnswer: true },
            { background: 'level5Background', hewan: 'hewan5', instruksi: 'Apakah Ini Seekor Kangguru?', correctAnswer: false },
            { background: 'level6Background', hewan: 'hewan6', instruksi: 'Apakah Ini Seekor Ikan?', correctAnswer: true },
            { background: 'level7Background', hewan: 'hewan7', instruksi: 'Apakah Ini Seekor Kucing?', correctAnswer: true },
            { background: 'level8Background', hewan: 'hewan8', instruksi: 'Apakah Ini Seekor Sapi?', correctAnswer: false },
            { background: 'level9Background', hewan: 'hewan9', instruksi: 'Apakah Ini Seekor Ikan Hiu?', correctAnswer: true },
            { background: 'level10Background', hewan: 'hewan10', instruksi: 'Apakah Ini Seekor Harimau?', correctAnswer: true }
        ];

        const currentLevelData = levelData[this.currentLevel - 1];
        const bgImage = this.add.image(width / 2, height / 2, currentLevelData.background);
        const scaleX = width / bgImage.width;
        const scaleY = height / bgImage.height;
        const scale = Math.max(scaleX, scaleY);
        bgImage.setScale(scale);

        const frameWidth = 350;
        const frameHeight = 350;
        const frameY = height / 2 - 100;

        const frame = this.add.rectangle(width / 2, frameY, frameWidth, frameHeight, 0xFFFFFF);
        frame.setStrokeStyle(5, 0x000000);

        const hewanImage = this.add.image(width / 2, frameY, currentLevelData.hewan);
        const scaleXHewan = frameWidth / hewanImage.width;
        const scaleYHewan = frameHeight / hewanImage.height;
        const scaleHewan = Math.min(scaleXHewan, scaleYHewan);

        hewanImage.setScale(scaleHewan * 0.9);
        hewanImage.setDepth(1);

        const questionY = frameY + frameHeight / 2 + 20;
        this.add.text(width / 2, questionY, currentLevelData.instruksi, {
            fontSize: '30px',
            fontFamily: 'Comic Sans MS',
            color: '#FFD700',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        let timerText = this.add.text(width - 100, 50, 'Time: 30', {
            fontSize: '32px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
        }).setOrigin(0.5);

        let timeLeft = 30;

        let timer = this.time.addEvent({
            delay: 1000,
            callback: () => {
                timeLeft--;
                timerText.setText('Time: ' + timeLeft);
                if (timeLeft <= 0) {
                    this.scene.start('GameOverScene');
                }
            },
            loop: true
        });

        const benarButton = this.add.image(width / 2 - 150, height - 100, 'benarButton').setInteractive();
        benarButton.setScale(0.15);
        benarButton.on('pointerdown', () => this.handleAnswer(currentLevelData.correctAnswer, true));

        const salahButton = this.add.image(width / 2 + 150, height - 100, 'salahButton').setInteractive();
        salahButton.setScale(0.15);
        salahButton.on('pointerdown', () => this.handleAnswer(currentLevelData.correctAnswer, false));
    }

    handleAnswer(correctAnswer, isTrueClicked) {
        const { width, height } = this.sys.game.config;
        const frameWidth = 350;
        const frameHeight = 350;
        const frameY = height / 2 - 100;

        let responseImage;
        if (correctAnswer === isTrueClicked) {
            this.sound.play('correctSound', { volume: 0.5 });
            responseImage = this.add.image(width / 2, frameY, 'ceklisButton'); 
        } else {
            this.sound.play('fellSound', { volume: 0.7 });
            responseImage = this.add.image(width / 2, frameY, 'silangButton'); 
        }

        const scaleXResponse = frameWidth / responseImage.width;
        const scaleYResponse = frameHeight / responseImage.height;
        const scaleResponse = Math.min(scaleXResponse, scaleYResponse);
        responseImage.setScale(scaleResponse * 0.9); 
        responseImage.setDepth(10);

        if (!completedLevels.includes(this.currentLevel) && correctAnswer === isTrueClicked) {
            completedLevels.push(this.currentLevel);
        }

        this.time.delayedCall(2000, () => {
            if (this.currentLevel === 10) {
                this.scene.start('FinishScene');
            } else {
                this.scene.start('LevelSelectionScene');
            }
        });
    }
}

// Scene Halaman Finish
class FinishScene extends Phaser.Scene {
    constructor() {
        super({ key: 'FinishScene' });
    }
    
    create() {
        const { width, height } = this.sys.game.config;

        this.sound.stopAll();

        this.sound.play('finishSound', { volume: 0.10 });

        const bgImage = this.add.image(width / 2, height / 2, 'finishBackground');
        const scaleX = width / bgImage.width;
        const scaleY = height / bgImage.height;
        const scale = Math.max(scaleX, scaleY);
        bgImage.setScale(scale);

        this.add.text(width / 2, height / 2 - 50, 'Selamat, Kamu Telah Menyelesaikan Semua Level!', {
            fontSize: '32px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        const backButton = this.add.image(width / 2, height / 1.5, 'mainlagiButton').setScale(0.8).setInteractive();
        this.tweens.add({
            targets: backButton,
            scaleX: 0.9,
            scaleY: 0.9,
            ease: 'Sine.easeInOut',
            duration: 800,
            yoyo: true,
            repeat: -1
        });

        backButton.on('pointerdown', () => {
            this.sound.play('playSound', { volume: 0.10 });
            completedLevels = [];
            this.scene.start('default');
        });
    }
}

game.scene.add('LevelSelectionScene', LevelSelectionScene);
game.scene.add('CreditsScene', CreditsScene);
game.scene.add('GameScene', GameScene);
game.scene.add('GameOverScene', GameOverScene);
game.scene.add('FinishScene', FinishScene);