function checkForSaves() {
    if (localStorage.getItem("localKey") !== null) {
        gameState = JSON.parse(localStorage.getItem("localKey"));
    }
}

function saveGame() {
    localStorage.setItem("localKey", JSON.stringify(gameState));
}

function resetGame() {
    clearLocalStorage();
    resetGameState()
    updateUi();
}

function clearLocalStorage() {
    localStorage.clear();

}

function setVolume() {
    volume = gameState.system.volume;

    getElement("sound").volume = volume;
}

function resetGameState() {
    gameState = getDefaultGameState();
}

var getDefaultGameState = () => JSON.parse(JSON.stringify(gameStateReset));