function checkForSaves() {
    if (localStorage.getItem("localKey") !== null) {
        gameState = JSON.parse(localStorage.getItem("localKey"));
    }
    else {
        playIntro();
    }
}

function saveGame() {
    localStorage.setItem("localKey", JSON.stringify(gameState));
}

function resetGame() {
    clearLocalStorage();
    resetGameState()
    updateUi();
    closeClearOptions();
    closeEvent("options");
    playIntro();
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

function setEventFlag(eventId) {
    gameState.events[eventId] = true;
}

var getDefaultGameState = () => JSON.parse(JSON.stringify(gameStateReset));

var getCrabs = () => gameState.resources.crabs;


ft