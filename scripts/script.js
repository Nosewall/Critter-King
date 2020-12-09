var eventOnePlayed = false;

function incrementCrab()
    {
        var newValue = document.getElementById('crabCount').innerHTML;
        newValue++;
        document.getElementById('crabCount').innerHTML = newValue;
        checkForCrabEvents()
    }

function checkForCrabEvents()
    {
        var currentCrabs = document.getElementById('crabCount').innerHTML;
        if(currentCrabs >= 10 && eventOnePlayed == false)
        {
            eventOnePlayed = true;
            eventOne();
        }

    }

function generateSave()
{
    var crabsCollected = document.getElementById('crabCount').innerHTML;
    localStorage.setItem("crabsCollected", crabsCollected);
    localStorage.setItem("eventOne", eventOnePlayed);
}

function checkForSaves()
{
    eventOnePlayed = localStorage.getItem("eventOne");
    document.getElementById('crabCount').innerHTML = localStorage.getItem("crabsCollected");
}

function clearData()
{
    localStorage.clear();
}

function closeEvent(elementId)
{
        var eventToClose = document.getElementById(elementId);
        eventToClose.style.display = "none";
}

function eventOne()
    {
        var eventOne = document.getElementById("eventOne")
        eventOne.style.display = "block";
    }

