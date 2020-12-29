function checkForSaves() {
    if (localStorage.getItem("localKey") !== null) {
        gameState = JSON.parse(localStorage.getItem("localKey"));
    }
    else {
        resetGameState();
    }
}

function saveGame() {
    localStorage.setItem("localKey", JSON.stringify(gameState));
}

function resetGame() {
    clearLocalStorage();
    resetGameState()
    updateUi();
    refreshOrphanInterval();
    calculateOrphanCost();
    closeClearOptions();
    closeOrphanButton();
    closeElement("options");
    playIntro();
}

function clearLocalStorage() {
    localStorage.clear();

}


function setVolume() {
    let volume = gameState.system.volume;

    getElement("sound").volume = volume;
    getElement("volumeIndicator").innerHTML = (volume * 100)
    getElement("volumeSlider").value = (volume * 100);
}

function setEventFlag(eventId) {
    gameState.events[eventId] = true;
}

function setCrabs(crabCount) {
    gameState.resources.crabs = crabCount;
}

var getCrabs = () => gameState.resources.crabs;

var getOrphans = () => gameState.resources.orphans;

var getOrphanages = () => gameState.resources.orphanages;