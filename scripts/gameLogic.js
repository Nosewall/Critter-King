function initGame() {
    setVolume();
    checkForSaves();
    updateUi();
    checkIntro();
}


function incrementCrab() {
    gameState.resources.crabs++;
    updateUi();
    checkForEvents();
    saveGame();
}

function incrementOrphan() {

}

function openOptions() {
    var options = document.getElementById("options")
    options.style.display = "block";
}

function showClearOptions() {
    getElement("clearOptionsLabel").style.display = "block";
    getElement("resetButton").style.display = "block";
    getElement("dontResetButton").style.display = "block";
}

function closeClearOptions() {
    getElement("clearOptionsLabel").style.display = "none";
    getElement("resetButton").style.display = "none";
    getElement("dontResetButton").style.display = "none";
}

function showOrphanButton() {
    getElement("OrphanButton").style.display = "block;"
}


function changeVolume(volumeToSet) {
    getElement("sound").volume = (volumeToSet / 10);
}

function updateUi() {
    getElement("crabCount").innerHTML = gameState.resources.crabs;

}

function getElement(id) {
    return document.getElementById(id);
}

function checkIntro() {
    if (gameState.events.intro == false) {
        playIntro();
    }
}