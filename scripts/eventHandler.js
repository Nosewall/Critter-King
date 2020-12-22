function openEvent(elementId) {

}

function closeEvent(elementId) {
    var eventToClose = document.getElementById(elementId);
    eventToClose.style.display = "none";
}

function checkForEvents() {
    if (getCrabs() >= 25 && gameState.events.eventOnePlayed == false) {
        eventOne();
    }
}

function playIntro() {
    getElement("intro1").style.display = "block";
}

function intro2() {
    closeEvent("intro1")
    getElement("intro2").style.display = "block";
}

function intro3() {
    closeEvent("intro2")
    getElement("intro3").style.display = "block";
}

function intro4() {
    closeEvent("intro3")
    getElement("intro4").style.display = "block";
}

function intro5() {
    closeEvent("intro4")
    getElement("intro5").style.display = "block";
}

function eventOne() {
    getElement("eventOne").style.display = "block";
}

function eventTwo() {
    closeEvent("eventOne");
    getElement("eventOne_2").style.display = "block";
}