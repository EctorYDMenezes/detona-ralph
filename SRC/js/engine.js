const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.getElementById("time-left"),
        score: document.getElementById("score"),
    },
    values: {
        timerID: null,
        countDownTimeId: setInterval(countDown, 1000),
        gameVelocity: 1000,
        hitPosition: 0,
        results: 0,
        currentTime: 10,
    },
};

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    if(state.values.currentTime <= 0){
        alert("Tempo esgotado, você acertou o Ralph " + state.values.results)
    }
}

function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("enemy")
    state.values.hitPosition = randomSquare.id;
}

function moveEnemy(){
    state.values.timerID = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitBox(){
    state.view.squares.forEach((square)=> {
        square.addEventListener("mousedown", ()=>{
            if(square.id === state.values.hitPosition){
                state.values.results++;
                state.view.score.textContent = state.values.results;
                state.values.hitPosition = null;
            }
        })
    });
}

function initialize(){
    // alert("opa");
    moveEnemy();
    addListenerHitBox();
}

initialize();