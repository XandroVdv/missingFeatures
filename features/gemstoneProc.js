let displayProcMessage = true;
let displayAvgPristine = false;
let pristineProcs = [];
let totalProcs = 0;
let display = new Display();
let pristineTimeout = null;
const TIMEOUT_DURATION = 5 * 1000; // 5 minutes in milliseconds

register("chat", (event) => {
    let message = ChatLib.getChatMessage(event);

    if (!displayProcMessage) {
        cancel(event);
    }

    if (displayAvgPristine) {
        if (message.includes("PRISTINE!") && message.includes("You found")) {
            let match = message.match(/You found [^x]+x(\d+)/);
            if (match && match[1]) {
                let quantity = parseInt(match[1]);
                pristineProcs.push(quantity);
                totalProcs += quantity;
                let averageProcs = totalProcs / pristineProcs.length;

                display.setLine(0, `Avg. Pristine: &r&a${averageProcs.toFixed(2)}&r&7`);
                display.setRenderLoc(Renderer.screen.getWidth() - 140, Renderer.screen.getHeight() - 20); // Set position to bottom right
                display.setShouldRender(true);

                // Reset the timeout each time a pristine proc message is detected
                resetPristineTimeout();
            }
        }
    }
}).setCriteria("&r&d&lPRISTINE! &r&fYou found ${*}");

export function toggleGemstoneProc() {
    displayProcMessage = !displayProcMessage;
    ChatLib.chat(`&6[MissingFeatures] &7Pristine procs are now &r&e${displayProcMessage ? "enabled" : "disabled"}.`);
}

export function toggleAvgPristine() {
    displayAvgPristine = !displayAvgPristine;
    ChatLib.chat(`&6[MissingFeatures] &7Average pristine display is now &r&e${displayAvgPristine ? "enabled" : "disabled"}.`);
    if (!displayAvgPristine) {
        display.setShouldRender(false);
        resetPristineProcs();
    }
}

// Function to reset the pristine proc data and hide the display
function resetPristineProcs() {
    pristineProcs = [];
    totalProcs = 0;
    display.setShouldRender(false);
}

// Function to reset the timeout
function resetPristineTimeout() {
    if (pristineTimeout) {
        clearTimeout(pristineTimeout);
    }
    pristineTimeout = setTimeout(() => {
        resetPristineProcs();
        displayAvgPristine = false;
        ChatLib.chat("&6[MissingFeatures] &7No pristine procs detected for 5 minutes. Average pristine display is now &r&edisabled&r&7.");
    }, TIMEOUT_DURATION);
}
