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

function calculateOrphanCost() {
    let orphanCount = parseInt(getElement("orphanCost"));
    let newCost = (orphanCount * orphanCount);
    getElement("orphanCost") = newCost;
    updateUi();
}

function incrementOrphan() {

}

function showClearOptions() {
    openElement("clearOptionsLabel");
    openElement("resetButton");
    openElement("dontResetButton");
}

function closeClearOptions() {
    closeElement("clearOptionsLabel");
    closeElement("resetButton");
    closeElement("dontResetButton");
}

function showOrphanButton() {
    openElement("OrphanButton");
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

function closeElement(id) {
    document.getElementById(id).style.display = "none";
}

function openElement(id) {
    document.getElementById(id).style.display = "block";
}

function checkIntro() {
    if (gameState.events.intro == false) {
        playIntro();
    }
}