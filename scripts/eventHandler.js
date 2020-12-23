function playIntro() {
    openElement("intro1");
}

function intro2() {
    closeElement("intro1");
    openElement("intro2");
}

function intro3() {
    closeElement("intro2");
    openElement("intro3");
}

function intro4() {
    closeElement("intro3");
    openElement("intro4");
}

function intro5() {
    closeElement("intro4");
    openElement("intro5");
}

function eventOne() {
    openElement("eventOne");
}

function eventTwo() {
    closeElement("eventOne");
    openElement("eventOne_2");
}

function checkForEvents() {
    if (getCrabs() >= 25 && gameState.events.eventOnePlayed == false) {
        eventOne();
    }
}