function initGame() {
    setVolume();
    checkForSaves();
    updateUi();
}


function incrementCrab() {
    gameState.resources.crabs++;
    updateUi();
    checkForEvents();
    saveGame();
}

function openOptions() {
    var options = document.getElementById("options")
    options.style.display = "block";
}


function changeVolume(volumeToSet) {
    getElement("sound").volume = (volumeToSet / 10);
}

function eventOne() {
    var eventOne = document.getElementById("eventOne")
    eventOne.style.display = "block";
}

function updateUi() {
    getElement("crabCount").innerHTML = gameState.resources.crabs;

}

function getElement(id) {
    return document.getElementById(id);
}