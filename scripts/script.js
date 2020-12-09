var eventOnePlayed = false;

function incrementCrab() {
    var newValue = document.getElementById('crabCount').innerHTML;
    newValue++;
    document.getElementById('crabCount').innerHTML = newValue;
    checkForCrabEvents();
    generateSave();
}

function checkForCrabEvents() {
    var currentCrabs = document.getElementById('crabCount').innerHTML;
    if (currentCrabs >= 10 && eventOnePlayed == false) {
        eventOnePlayed = true;
        eventOne();
    }

}

function generateSave() {
    var crabsCollected = document.getElementById('crabCount').innerHTML;
    localStorage.setItem("crabsCollected", crabsCollected);
    localStorage.setItem("eventOne", eventOnePlayed);
}

function checkForSaves() {
    if(localStorage.getItem("eventOne") !== 'undefined' && localStorage.getItem("eventOne") !== null){
        eventOnePlayed = localStorage.getItem("eventOne");
        document.getElementById('crabCount').innerHTML = localStorage.getItem("crabsCollected");
    }
}

function clearData() {
    localStorage.clear();
    eventOnePlayed = false;
    document.getElementById('crabCount').innerHTML = '0';
}

function closeEvent(elementId) {
    var eventToClose = document.getElementById(elementId);
    eventToClose.style.display = "none";
}

function openOptions(){
    var options = document.getElementById("options")
    options.style.display = "block";
}

function eventOne() {
    var eventOne = document.getElementById("eventOne")
    eventOne.style.display = "block";
}

