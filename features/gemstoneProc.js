let displayProcMessage = true;
let pristineProcs = [];
let totalProcs = 0;

register("chat", (event) => {
    let message = ChatLib.getChatMessage(event);

    if (!displayProcMessage) {
        cancel(event);
        console.log("cancelled gemstone proc message");
    }

    if (message.includes("PRISTINE!") && message.includes("You found")) {
        let match = message.match(/You found [^x]+x(\d+)/);
        if (match && match[1]) {
            let quantity = parseInt(match[1]);
            pristineProcs.push(quantity);
            totalProcs += quantity;
            let averageProcs = totalProcs / pristineProcs.length;
            ChatLib.chat(`&6[MissingFeatures] &7Pristine proc message detected! Average: &r&a${averageProcs.toFixed(2)}&r&7.`);
        }
    }
}).setCriteria("&r&d&lPRISTINE! &r&fYou found ${*}");

export function toggleGemstoneProc() {
    displayProcMessage = !displayProcMessage;
    ChatLib.chat(`&6[MissingFeatures] &7Pristine procs are now &r&e${displayProcMessage ? "enabled" : "disabled"}.`);
}
