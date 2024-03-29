var eventIsOpen = false;

function openOptions() {
    openElement("options");
    eventIsOpen = true;
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
    refreshOrphanInterval();
    openElement("eventOne");
}
function eventOne_2() {
    closeElement("eventOne");
    openElement("eventOne_2");
}

function eventOne_3() {
    closeElement("eventOne_2");
    showOrphanButton();
    setEventFlag("event1Played");
    eventIsOpen = false;
    refreshOrphanInterval();
}

function eventTwo() {
    eventIsOpen = true;
    refreshOrphanInterval();
    openElement("eventTwo");
}

function eventTwo_2() {
    closeElement("eventTwo");
    openElement("eventTwo_2");
}

function eventTwo_3() {
    closeElement("eventTwo_2");
    openElement("eventTwo_3");
}

function eventTwo_4() {
    closeElement("eventTwo_3");
    eventIsOpen = false;
    setEventFlag("event2Played");
    refreshOrphanInterval();
}

function eventThree() {
    eventIsOpen = true;
    refreshOrphanInterval();
    openElement("eventThree");
}

function eventThree_2() {
    closeElement("eventThree");
    openElement("eventThree_2");
}

function eventThree_3() {
    closeElement("eventThree_2");
    openElement("eventThree_3");
}

function eventThree_4() {
    closeElement("eventThree_3");
    gameState.events.event3Played = true;
    eventIsOpen = false;
    refreshOrphanInterval();
}

function eventFour() {
    eventIsOpen = true;
    refreshOrphanInterval();
    openElement("eventFour");
}

function eventFour_2() {
    closeElement("eventFour");
    openElement("eventFour_2");
}

function eventFour_3() {
    closeElement("eventFour_2");
    openElement("eventFour_3");
}

function eventFour_4() {
    closeElement("eventFour_3");
    openElement("eventFour_4");
}

function eventFour_5() {
    closeElement("eventFour_4");
    gameState.events.event4Played = true;
    eventIsOpen = false;
    refreshOrphanInterval();
    showOrphanageButton();

}


function checkForEvents() {
    if (getCrabs() >= 25 && gameState.events.event1Played == false) {
        eventOne();
    }

    if (getCrabs() >= 200 && gameState.events.event2Played == false) {
        eventTwo();
    }

    if (getCrabs() >= 350 && gameState.events.event3Played == false) {
        eventThree();
    }

    if (getOrphans() >= 10 && gameState.events.event4Played == false) {
        eventFour();
    }
}

