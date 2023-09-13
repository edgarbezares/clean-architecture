
export class BowlingGame {
  private pins: number[];

  constructor() { 
    this.pins=[]
}

  roll(pins: number): void {
    this.pins.push(pins);
  }

  score(): number {
    let score = 0;
    let firstRoll = 0;
    const FRAMES=10;

    for (let frame = 0; frame < FRAMES; frame++) {
      if (this.isStrike(firstRoll)) {
        score += this.scoreForStrike(firstRoll);
        firstRoll++;
      } else if (this.isSpare(firstRoll)) {
        score += this.scoreForSpare(firstRoll);
        firstRoll += 2;
      } else {
        score += this.scoreForFrame(firstRoll);
        firstRoll += 2;
      }
    }

    return score;
  }

  private isStrike(firstRoll: number): boolean {
    return this.pins[firstRoll] === 10;
  }

  private isSpare(firstRoll: number): boolean {
    return this.pins[firstRoll] + this.pins[firstRoll + 1] === 10;
  }

  private scoreForStrike(firstRoll: number): number {
    return 10 + this.pins[firstRoll + 1] + this.pins[firstRoll + 2];
  }

  private scoreForSpare(firstRoll: number): number {
    return 10 + this.pins[firstRoll + 2];
  }

  private scoreForFrame(firstRoll: number): number {
    return this.pins[firstRoll] + this.pins[firstRoll + 1];
  }
  }