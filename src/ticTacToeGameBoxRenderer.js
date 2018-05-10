class TicTacToeGameBoxRenderer {// eslint-disable-line no-unused-vars
    constructor() {
        this._canvasInitialSize = 150;
        this._lineWidth = 10;
    }

    drawX(box) {
        const ctx = this._initDrawing(box);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this._canvasInitialSize, this._canvasInitialSize);
        ctx.moveTo(0, this._canvasInitialSize);
        ctx.lineTo(this._canvasInitialSize, 0);
        ctx.strokeStyle = '#388e3c';
        ctx.stroke();
    }

    drawO(box) {
        const ctx = this._initDrawing(box);
        ctx.arc(this._canvasInitialSize / 2, this._canvasInitialSize / 2,
            this._canvasInitialSize / 2 - 2 * this._lineWidth, 0, 2 * Math.PI, false);
        ctx.strokeStyle = '#ff3399';
        ctx.stroke();
    }

    reset(box) {
        const canvas = this._getCanvasFromBox(box);
        canvas.width = canvas.height = this._canvasInitialSize;
    }

    _initDrawing(box) {
        const canvas = this._getCanvasFromBox(box);
        const ctx = canvas.getContext("2d");
        ctx.lineWidth = this._lineWidth;
        return ctx;
    }

    _getCanvasFromBox(box) {
        return box.children[0];
    }
}