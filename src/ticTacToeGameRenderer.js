import $ from 'jquery';
import { TicTacToeGameStatus } from './ticTacToeGameStatus';
import { TicTacToeGamePlayers } from './ticTacToeGamePlayers';

export class TicTacToeGameRenderer {
    constructor(game, score, boxRenderer) {
        this._game = game;
        this._score = score;
        this._boxRenderer = boxRenderer;
        this._playerXLabel = "playerX";
        this._playerOLabel = "playerO";
    }

    init() {
        this._iterateBoxes((box) => {
            $(box).click(() => this._handleMove(box));
            $(box).mouseenter(() => this._handleMouseEnter(box));
        });
        $("#reset-game").click(() => this._resetRenderer());
        this._updateNextPlayerInfo();
        this._displayScore();
    }

    _nextPlayerIsX() {
        return this._game.nextPlayer === TicTacToeGamePlayers.X;
    }

    _updateNextPlayerInfo() {
        if (this._nextPlayerIsX()) {
            $("#" + this._playerOLabel).hide();
            $("#" + this._playerXLabel).show();
        } else {
            $("#" + this._playerXLabel).hide();
            $("#" + this._playerOLabel).show();
        }
    }

    _iterateBoxes(handler) {
        [...$(".box")].forEach(handler);
    }

    _resetRenderer() {
        this._game.reset();
        $("#playerInfo").show();
        $("#scorePlayerX, #scorePlayerO, #numberOfDraws").removeClass("scoreHighlight");
        this._updateNextPlayerInfo();
        $(".status").hide();
        this._iterateBoxes((box) => {
            this._boxRenderer.reset(box);
            this._setBoxState(box, "");
        });
    }

    _handleMove(box) {
        if (this._game.status() !== TicTacToeGameStatus.STATUS_UNFINISHED) return;
        const currentPlayer = this._game.nextPlayer;
        if (this._game.move(this._getBoxPosition(box))) {
            if (currentPlayer === TicTacToeGamePlayers.X) {
                this._boxRenderer.drawX(box);
            } else {
                this._boxRenderer.drawO(box);
            }
            this._disableBox(box);
            this._updateNextPlayerInfo();
            this._handleStatus();
        }
    }

    _handleStatus() {
        const status = this._game.status();
        let gameEndId = status === TicTacToeGameStatus.STATUS_X_WINS ? "winnerX" :
            status === TicTacToeGameStatus.STATUS_O_WINS ? "winnerO" :
                status === TicTacToeGameStatus.STATUS_DRAW ? "draw" : undefined;
        if (gameEndId) {
            this._score.update(status);
            const affectedScoreItemId = status === TicTacToeGameStatus.STATUS_X_WINS ? "scorePlayerX" :
                status === TicTacToeGameStatus.STATUS_O_WINS ? "scorePlayerO" : "numberOfDraws";
            $("#" + affectedScoreItemId).addClass("scoreHighlight");
            $("#" + gameEndId).show();
            $("#reset-game").show();
            $("#playerInfo").hide();
            this._displayScore();
            this._iterateBoxes(box => this._disableBox(box));
            this._showWinningCombination();
        }
    }

    _disableBox(box) {
        this._setBoxState(box, "movingDisabled");
    }

    _displayScore() {
        $("#scorePlayerX").html(this._score.scorePlayerX);
        $("#scorePlayerO").html(this._score.scorePlayerO);
        $("#numberOfDraws").html(this._score.numberOfDraws);
    }


    _handleMouseEnter(box) {
        if (this._game.status() !== TicTacToeGameStatus.STATUS_UNFINISHED) return;
        if (this._game.isPositionEmpty(this._getBoxPosition(box))) {
            this._setBoxState(box, this._nextPlayerIsX() ? this._playerXLabel : this._playerOLabel);
        } else {
            this._disableBox(box);
        }
    }

    _showWinningCombination() {
        const winningCombination = this._game.getWinningCombination();
        if (winningCombination) {
            this._iterateBoxes(box => {
                if (winningCombination.isWinningPosition(this._getBoxPosition(box))) {
                    this._setBoxState(box, "highlightAsWinningBox");
                }
            });
        }
    }

    _setBoxState(box, state) {
        $(box).attr("data-box-state", state);
    }

    _getBoxPosition(box) {
        return parseInt($(box).attr("data-position"));
    }
}