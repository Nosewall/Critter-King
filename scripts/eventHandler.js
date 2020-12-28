var eventIsOpen = false;

function openOptions() {
    openElement("options");
    eventIsOpen;
    refreshOrphanInterval();
}

function closeOptions() {
    closeElement("options");
    eventIsOpen = false;
    refreshOrphanInterval();
}

function playIntro() {
    eventIsOpen = true;
    openElement("intro1");
    setEventFlag("intro");
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
    eventIsOpen = false;
}

function eventOne() {
    eventIsOpen = true;
    openElement("eventOne");
}
function eventOne_2() {
    closeElement("eventOne");
    openElement("eventOne_2");
}

function eventOne_3() {
    closeElement("eventOne_2");
    showOrphanButton();
    gameState.events.event1Played = true;
    eventIsOpen = false;
}

function checkForEvents() {
    if (getCrabs() >= 25 && gameState.events.event1Played == false) {
        eventOne();
    }
}

