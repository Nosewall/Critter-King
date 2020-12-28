gameStateReset = {
    "resources": {
        "crabs": 0,
        "orphans": 0,
    },

    "system": { "volume": 1, },



    "events": {
        "introPlayed": false,
        "event1Played": false,
        "event2Played": false,
        "event3Played": false,
        "event4Played": false,
        "event5Played": false,
        "event6Played": false,
        "event7Played": false,
        "event8Played": false,
        "event9Played": false,
        "event10Played": false,
        "event11Played": false,
        "event12Played": false,
        "event13Played": false,
        "event14Played": false,
        "event15Played": false,
        "event16Played": false,
        "event17Played": false,
        "event18Played": false,
        "event19Played": false,
        "event20Played": false,
        "event21Played": false,
        "event22Played": false,
        "event23Played": false,
        "event24Played": false,
        "event25Played": false,
        "event26Played": false,
        "event27Played": false,
        "event28Played": false,
        "event29Played": false,
        "event30Played": false,
        "event31Played": false,
        "event32Played": false,
        "event33Played": false,
        "event34Played": false,
        "event35Played": false,
        "event36Played": false,
        "event37Played": false,
        "event38Played": false,
        "event39Played": false,
        "event40Played": false,
        "event41Played": false,
        "event42Played": false,
        "event43Played": false,
        "event44Played": false,
        "event45Played": false,
        "event46Played": false,
        "event47Played": false,
        "event48Played": false,
        "event49Played": false,
        "event50Played": false,
        "event51Played": false,
    },



}

checkForSaves();

var getDefaultGameState = () => JSON.parse(JSON.stringify(gameStateReset));

function resetGameState() {
    gameState = getDefaultGameState();
}

