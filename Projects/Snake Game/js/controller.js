let arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
let keyStatus = {}
let restartBtn=document.querySelector('.restartbtn')
let pausebtn=document.querySelector('#pause')
let snakeDirection
let snakeSpeed
let firstMove=true
let upBtn=document.querySelector('#upbtn')
let leftBtn=document.querySelector('#leftbtn')
let rightBtn=document.querySelector('#rightbtn')
let downBtn=document.querySelector('#downbtn')
let touchControls=document.querySelector('#touchCtrls')
let controlPad=document.querySelector('#controlPad')
let controlPadStatus=false

window.addEventListener('keydown', (e) => {
    keyPressed(e.key)
})
window.addEventListener('keyup', (e) => {
    keyStatus[e.key] = false
})
pausebtn.addEventListener('click',pauseGame)
restartBtn.addEventListener('click',restartGame)

upBtn.addEventListener('click',()=>{
    keyPressed(arrowKeys[0])
    keyStatus[arrowKeys[0]] = false
})
downBtn.addEventListener('click',()=>{
    keyPressed(arrowKeys[1])
    keyStatus[arrowKeys[1]] = false
})
leftBtn.addEventListener('click',()=>{
    keyPressed(arrowKeys[2])
    keyStatus[arrowKeys[2]] = false
})
rightBtn.addEventListener('click',()=>{
    keyPressed(arrowKeys[3])
    keyStatus[arrowKeys[3]] = false
})

touchControls.addEventListener('click',handleTouchCtrls)

function keyPressed(key) {
    if(key ==' '){
        pauseGame()
    }
    if (!keyStatus[key] && !disableControls) {

        keyStatus[key] = true


        if (key == arrowKeys[0]&&(snakeDirection==arrowKeys[2]||snakeDirection==arrowKeys[3]||firstMove)) {
            snakeDirection=arrowKeys[0]
            stopMove()
            Game.snake[0].speedY -= snakeSpeed
        }
        if (key == arrowKeys[1]&&(snakeDirection==arrowKeys[2]||snakeDirection==arrowKeys[3]||firstMove)) {
            snakeDirection=arrowKeys[1]
            stopMove()
            Game.snake[0].speedY += snakeSpeed
        }
        if (key == arrowKeys[2]&&(snakeDirection==arrowKeys[0]||snakeDirection==arrowKeys[1]||firstMove)) {
            snakeDirection=arrowKeys[2]
            stopMove()
            Game.snake[0].speedX -= snakeSpeed
        }
        if (key == arrowKeys[3]&&(snakeDirection==arrowKeys[0]||snakeDirection==arrowKeys[1]||firstMove)) {
            snakeDirection=arrowKeys[3]
            stopMove()
            Game.snake[0].speedX += snakeSpeed
        }
        if (firstMove){
            firstMove=false
        }
    }
}

function stopMove() {
    Game.snake[0].speedX = 0
    Game.snake[0].speedY = 0
}

function pauseGame(){
    if(!isPaused){
    disableControls=true
    tempSpeedX=Game.snake[0].speedX
    tempSpeedY=Game.snake[0].speedY
    stopMove()
    pausebtn.innerText='Resume'
    isPaused=true}
    else if(isPaused){
    disableControls=false
    Game.snake[0].speedX=tempSpeedX
    Game.snake[0].speedY=tempSpeedY
    isPaused=false
    pausebtn.innerText='Pause'
    }
}

function handleTouchCtrls(){
    if(controlPadStatus==true){
        controlPad.style.display='none'
        controlPadStatus=false
    }
    else if(controlPadStatus==false){
        controlPad.style.display='flex'
        controlPadStatus=true
    }
    
}