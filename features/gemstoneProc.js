// &r&d&lPRISTINE! &r&fYou found &r&a❤ Flawed Ruby Gemstone &r&8x1&r&f!&r
let displayProcMessage = true;

register("chat", (event) => {
    if(!displayProcMessage) {
        cancel(event);
        console.log("cancelled gemstone proc message");
    }
}).setCriteria("&r&d&lPRISTINE! &r&fYou found ${*}");

export function toggleGemstoneProc() {
    displayProcMessage = !displayProcMessage;
    ChatLib.chat(`&6[MissingFeatures] &7Pristine procs are now &r&e${displayProcMessage ? "enabled" : "disabled"}.`);
}
