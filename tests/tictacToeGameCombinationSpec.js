import {TicTacToeCombination} from './../src/ticTacToeCombination';

describe('TicTacToeCombination', () => {
    it('Given position matching one of positions in combination, when checking if it is a winning combination, then should state that it is a winning combination', () => {
        const combination = new TicTacToeCombination(0, 1, 2);
        const isWinning = combination.isWinningPosition(0);
        expect(isWinning).toEqual(true);
    });

    it('Given position not matching any of positions in combination, when checking if it is a winning combination, then should state that it is not a winning combination', () => {
        const combination = new TicTacToeCombination(0, 1, 2);
        const isWinning = combination.isWinningPosition(3);
        expect(isWinning).toEqual(false);
    });
});