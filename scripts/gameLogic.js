let orphanInterval = null;

function initGame() {
    checkForSaves();
    setVolume();
    calculateOrphanCost();
    refreshOrphanInterval();
    updateUi();
    checkIntro();
}

function orphanCollectACrab() {
    gameState.resources.crabs++;
    updateUi();
    checkForEvents();
}

function incrementCrab() {
    gameState.resources.crabs++;
    updateUi();
    checkForEvents();
    saveGame();
}

function calculateOrphanCost() {
    let orphanCount = parseInt(getElement("orphanCost").innerHTML);
    let newCost = (getOrphans() * 30);
    getElement("orphanCost").innerHTML = newCost;
}

function incrementOrphan() {
    if (getCrabs() >= parseInt(getElement("orphanCost").innerHTML)) {
        setCrabs(getCrabs() - parseInt(getElement("orphanCost").innerHTML));
        gameState.resources.orphans++;
        calculateOrphanCost();
        refreshOrphanInterval();
        updateUi();
    }
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
    openElement("orphanButton");
}

function closeOrphanButton() {
    closeElement("orphanButton");
}


function changeVolume(volumeToSet) {
    getElement("sound").volume = (volumeToSet / 100);
    getElement("volumeIndicator").innerHTML = volumeToSet;
    gameState.system.volume = (volumeToSet / 100);
}

function updateUi() {
    getElement("crabCount").innerHTML = gameState.resources.crabs;
    getElement("orphanCount").innerHTML = gameState.resources.orphans;
    if (gameState.events.event1Played) {
        showOrphanButton();
    }

}

function getElement(id) {
    return document.getElementById(id);
}

function closeElement(id) {
    document.getElementById(id).style.display = "none";
    saveGame();
}

function openElement(id) {
    document.getElementById(id).style.display = "block";
}

function checkIntro() {
    if (gameState.events.intro == false) {
        playIntro();
    }
}

function refreshOrphanInterval() {
    if (orphanInterval) {
        stopOrphanCollection();
    }
    if (getOrphans() > 0) {
        orphanInterval = setInterval(orphanCollectACrab, 1000 / getOrphans());
    }
    if (eventIsOpen) {
        stopOrphanCollection();
    }
}



function stopOrphanCollection() {
    clearInterval(orphanInterval);
    orphanInterval = null;
}