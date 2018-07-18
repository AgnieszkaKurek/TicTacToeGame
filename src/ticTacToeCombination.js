export class TicTacToeCombination {
    constructor(position1, position2, position3) {
        this.position1 = position1;
        this.position2 = position2;
        this.position3 = position3;
    }

    isWinningPosition(position) {
        return position === this.position1 || position === this.position2 || position === this.position3;
    }
}