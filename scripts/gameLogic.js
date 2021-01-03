let orphanInterval = null;
let orphanageInterval = null;

function initGame() {
    checkForSaves();
    setVolume();
    calculateOrphanCost();
    calculateOrphanageCost();
    refreshOrphanInterval();
    updateUi();
    checkUiOptions();
    checkIntro();
}

function orphanCollectACrab() {
    gameState.resources.crabs++;
    updateUi();
    checkForEvents();
}

function orphanageCollection() {
    gameState.resources.crabs = gameState.resources.crabs + 35;
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
    let newCost = (getOrphans() * 1.5 * 10);
    getElement("orphanCost").innerHTML = newCost;
}

function calculateOrphanageCost() {
    let orphanageCount = parseInt(getElement("orphanageCost").innerHTML);
    let newCost = (getOrphanages() * 1.5 * 224)
    getElement("orphanageCost").innerHTML = newCost;
}

function incrementOrphan() {
    if (getCrabs() >= parseInt(getElement("orphanCost").innerHTML)) {
        setCrabs(getCrabs() - parseInt(getElement("orphanCost").innerHTML));
        gameState.resources.orphans++;
        calculateOrphanCost();
        refreshOrphanInterval();
        updateUi();
    }
    saveGame();
}

function incrementOrphanage() {
    if (getCrabs() >= parseInt(getElement("orphanageCost").innerHTML)) {
        setCrabs(getCrabs() - parseInt(getElement("orphanageCost").innerHTML));
        gameState.resources.orphanages++;
        calculateOrphanageCost();
        refreshOrphanInterval();
        updateUi();
    }
    saveGame();
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

function showOrphanageButton() {
    openElement("orphanageButton");

}

function closeOrphanageButton() {
    closeElement("orphanageButton");
}

function changeVolume(volumeToSet) {
    getElement("sound").volume = (volumeToSet / 100);
    getElement("volumeIndicator").innerHTML = volumeToSet;
    gameState.system.volume = (volumeToSet / 100);
}

function updateUi() {
    getElement("crabCount").innerHTML = gameState.resources.crabs;
    getElement("orphanCount").innerHTML = gameState.resources.orphans;
    getElement("orphanageCount").innerHTML = gameState.resources.orphanages;
}

function checkUiOptions() {
    if (gameState.events.event1Played) {
        showOrphanButton();
    }
    if (gameState.events.event4Played) {
        showOrphanageButton();
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
    if (orphanageInterval) {
        stopOrphanageCollection();
    }
    if (getOrphans() > 0) {
        orphanInterval = setInterval(orphanCollectACrab, 1000 / getOrphans());
    }
    if (getOrphanages() > 0) {
        orphanageInterval = setInterval(orphanageCollection, 1000 / getOrphanages());
    }
    if (eventIsOpen) {
        stopOrphanCollection();
        stopOrphanageCollection();
    }

}



function stopOrphanCollection() {
    clearInterval(orphanInterval);
    orphanInterval = null;
}

function stopOrphanageCollection() {
    clearInterval(orphanageInterval);
    orphanageInterval = null;
}