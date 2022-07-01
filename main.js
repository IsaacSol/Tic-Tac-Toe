// class
class Player {
    constructor(name, color) {
        this.name = name
        this.color = color
        this.score = 0
        this.store = ""
    }
}
class Game {
    constructor(rounds = 5, hasTimer = false, timer = 5000) {
        this.players = [new Player("player1", "blue"), new Player("player2", "red")]
        this.rounds = rounds
        this.hasTimer = hasTimer
        this.timer = timer
        this.squares = {
            square1: "",
            square2: "",
            square3: "",
            square4: "",
            square5: "",
            square6: "",
            square7: "",
            square8: "",
            square9: ""
        }
        this.playerPlaying = "player1"
        playerPlayingDisplay.innerHTML = "player1"
        this.players[0].store = "X"
        this.players[1].store = "O"
    }
    checkIfWon() {
        if (
            (this.squares.square1 == "player1" && this.squares.square5 == "player1" && this.squares.square9 == "player1") ||
            (this.squares.square7 == "player1" && this.squares.square5 == "player1" && this.squares.square3 == "player1") ||
            (this.squares.square1 == "player1" && this.squares.square2 == "player1" && this.squares.square3 == "player1") ||
            (this.squares.square3 == "player1" && this.squares.square5 == "player1" && this.squares.square6 == "player1") ||
            (this.squares.square7 == "player1" && this.squares.square8 == "player1" && this.squares.square9 == "player1") ||
            (this.squares.square1 == "player1" && this.squares.square4 == "player1" && this.squares.square7 == "player1") ||
            (this.squares.square2 == "player1" && this.squares.square5 == "player1" && this.squares.square8 == "player1") ||
            (this.squares.square3 == "player1" && this.squares.square6 == "player1" && this.squares.square9 == "player1")
        ) {
            this.addToScore()
        } else if (
            (this.squares.square1 == "player2" && this.squares.square5 == "player2" && this.squares.square9 == "player2") ||
            (this.squares.square7 == "player2" && this.squares.square5 == "player2" && this.squares.square3 == "player2") ||
            (this.squares.square1 == "player2" && this.squares.square2 == "player2" && this.squares.square3 == "player2") ||
            (this.squares.square3 == "player2" && this.squares.square5 == "player2" && this.squares.square6 == "player2") ||
            (this.squares.square7 == "player2" && this.squares.square8 == "player2" && this.squares.square9 == "player2") ||
            (this.squares.square1 == "player2" && this.squares.square4 == "player2" && this.squares.square7 == "player2") ||
            (this.squares.square2 == "player2" && this.squares.square5 == "player2" && this.squares.square8 == "player2") ||
            (this.squares.square3 == "player2" && this.squares.square6 == "player2" && this.squares.square9 == "player2")
        ) {
            this.addToScore()
        }
    }
    addToScore() {
        if (this.playerPlaying == "player1") {
            this.resetSquares()
            this.players[0].score++
            player1Display.innerHTML = "Player1:" + this.players[0].score
        } else {
            this.resetSquares()
            this.players[1].score++
            player2Display.innerHTML = "Player2:" + this.players[1].score
        }
        console.log(this.players)
        if (this.players[0].store == "X") {
            this.players[0].store = "O"
            this.players[1].store = "X"
        } else {
            this.players[0].store = "X"
            this.players[1].store = "O"
        }
        console.log(this.players)
    }
    resetSquares() {
        Object.keys(this.squares).forEach((square) => {
            this.squares[square] = ""
            spot1.innerHTML = ""
            spot2.innerHTML = ""
            spot3.innerHTML = ""
            spot4.innerHTML = ""
            spot5.innerHTML = ""
            spot6.innerHTML = ""
            spot7.innerHTML = ""
            spot8.innerHTML = ""
            spot9.innerHTML = ""
        })
    }
    play(btnName, btnClicked) {
        if (this.squares[btnName] == "") {
            if (this.playerPlaying == "player1") {
                btnClicked.innerHTML = this.players[0].store
                btnClicked.style.color = this.players[0].color
                this.squares[btnName] = "player1"
                this.checkIfWon()
                playerPlayingDisplay.innerHTML = "player2"
                this.playerPlaying = "player2"
            } else {
                btnClicked.innerHTML = this.players[1].store
                btnClicked.style.color = this.players[1].color
                this.squares[btnName] = "player2"
                this.checkIfWon()
                playerPlayingDisplay.innerHTML = "player1"
                this.playerPlaying = "player1"
            }
        }

    }
    surrender() {
        if (this.playerPlaying == "player1") {
            this.resetSquares
            this.addToScore()
        } else {
            this.resetSquares
            this.addToScore()
        }
    }
}
//variable
const spot1 = document.querySelector('[data-number1]')
const spot2 = document.querySelector('[data-number2]')
const spot3 = document.querySelector('[data-number3]')
const spot4 = document.querySelector('[data-number4]')
const spot5 = document.querySelector('[data-number5]')
const spot6 = document.querySelector('[data-number6]')
const spot7 = document.querySelector('[data-number7]')
const spot8 = document.querySelector('[data-number8]')
const spot9 = document.querySelector('[data-number9]')
const surrenderBtn = document.querySelector('[data-surrender]')
const player1Display = document.querySelector('[data-player1]')
const player2Display = document.querySelector('[data-player2]')
const playerPlayingDisplay = document.querySelector('[data-player-playing')
//functions

//main
const game = new Game()
spot1.addEventListener('click', () => {
    game.play("square1", spot1)
})
spot2.addEventListener('click', () => {
    game.play("square2", spot2)
})
spot3.addEventListener('click', () => {
    game.play("square3", spot3)
})
spot4.addEventListener('click', () => {
    game.play("square4", spot4)
})
spot5.addEventListener('click', () => {
    game.play("square5", spot5)
})
spot6.addEventListener('click', () => {
    game.play("square6", spot6)
})
spot7.addEventListener('click', () => {
    game.play("square7", spot7)
})
spot8.addEventListener('click', () => {
    game.play("square8", spot8)
})
spot9.addEventListener('click', () => {
    game.play("square9", spot9)
})
surrenderBtn.addEventListener('click', () => {
    game.surrender()
})