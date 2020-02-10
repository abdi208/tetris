const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const ROW = 20;
const COL = Column = 10
const SQ = squareSize = 20;
const Vacant = 'White'

function drawSquare(x, y, color) {

    ctx.fillStyle = color
    ctx.fillRect(x * SQ,y * SQ, SQ, SQ)
    
    ctx.strokeStyle = color
    ctx.strokeRect(x * SQ ,y * SQ, SQ, SQ)
}

let board = []
for( let r = 0; r < ROW; r++) {
    board[r] = []
    for( let c = 0; c < COL; c++ ) {
        board[r][c] = Vacant
    } 
}

function drawBoard() {
    for( let r = 0; r < ROW; r++) {
        for( let c = 0; c < COL; c++ ) {
            drawSquare(c,r, board[r][c])
        } 
    }
}

drawBoard()


function Piece(tetromino, color) {

    this.tetrimino = tetromino
    this.color = color

    this.tetriminoN = 0
    this.activeTeromino = this.tetrimino[this.tetriminoN]

    this.x = 3
    this.y = 0
}
const PIECES = [
    [Z, 'red'], 
    [S, 'green'],
    [T, 'yellow'],
    [O, 'blue'],
    [L, 'purple'],
    [I, 'cyan'],
    [J, 'orange']
]

let p = new Piece(PIECES[0][0], PIECES[0][1])
Piece.prototype.draw = function() {
    for( let r = 0; r < this.activeTeromino.length; r++) {
        for( let c = 0; c < this.activeTeromino.length; c++ ) {
            if(this.activeTeromino[r][c]) {
                drawSquare(this.x + c, this.y + r, this.color)
            }
        } 
    }
}

p.draw();