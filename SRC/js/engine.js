const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.getElementById("time-left"),
        score: document.getElementById("score"),
    },
    values: {
        timerID: null,
        gameVelocity: 1000,
        hitPosition: 0,
        results: 0,
    },
};

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