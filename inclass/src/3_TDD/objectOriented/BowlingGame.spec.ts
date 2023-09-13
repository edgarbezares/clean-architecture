import { BowlingGame } from "./BowlingGame";

describe('Test Bowling Game Functionality', () => {

  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame()
  });

  it('can throw a ball', () => {
    game.roll(0);
    expect(game).toBeDefined();
  })

  it('should calculate score with all Ceros', () => {
    rollMany(game, 20, 0);
    expect(game.score()).toBe(0);
  })

  it('should calculate score with all Ones', () => {
    rollMany(game, 20, 1);
    expect(game.score()).toBe(20);
  })

  it('can roll a Spare', () => {
    rollSpare(game);
    game.roll(3);
    rollMany(game, 17, 0);
    expect(game.score()).toBe(16);
  })

  it('can roll a Strike', () => {
    rollStrike(game);
    game.roll(2);
    game.roll(2);
    rollMany(game, 16, 0);
    expect(game.score()).toBe(18);
  })

  it('rolls a Perfect Game', () => {
    rollMany(game, 12, 10);
    expect(game.score()).toBe(300);
  });
  
});

function rollStrike(game: BowlingGame): void {
  game.roll(10);
}

function rollSpare(game: BowlingGame): void {
  game.roll(5);
  game.roll(5);
}

function rollMany(game: BowlingGame, rolls: number, pins: number): void {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}