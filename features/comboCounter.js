// &r&a&l+5 Kill Combo &r&8&r&b+3✯ Magic Find&r

// &r&a&l+10 Kill Combo &r&8+&r&610 &r&7coins per kill&r

// &r&9&l+15 Kill Combo &r&8&r&b+3✯ Magic Find&r

// &r&5&l+20 Kill Combo &r&8&r&3+15☯ Combat Wisdom&r

// &r&5&l+25 Kill Combo &r&8&r&b+3✯ Magic Find&r

// &r&6&l+30 Kill Combo &r&8+&r&610 &r&7coins per kill&r

// &r&cYour Kill Combo has expired! You reached a 27 Kill Combo!&r

let displayCurrentCombo = true;
let currentCombo = "No combo";  // Initialize the combo as "no combo"

// Regular expression to match the combo message
const comboRegex = /§r§[a-f0-9]§l\+(\d+) Kill Combo/;
const comboExpirationRegex = /§r§cYour Kill Combo has expired! You reached a (\d+) Kill Combo!§r/;

// Function to display the current combo on the screen
function displayCombo() {
    // Get screen dimensions
    const screenWidth = Renderer.screen.getWidth();
    const screenHeight = Renderer.screen.getHeight();
    
    // Define message and font size
    const message = `Current Combo: ${currentCombo}`;
    const textWidth = Renderer.getStringWidth(message);
    
    // Center the message on the screen
    const x = (screenWidth / 3) - (textWidth / 2);
    const y = screenHeight / 3 - 20;
    
    // Draw the current combo on the screen
    Renderer.drawString(message, x, y);
}

register("chat", (event) => {
    let message = ChatLib.getChatMessage(event);
    
    // Check for combo messages using regex
    try {
        let match = message.match(comboRegex);
        console.log(match);  // Log the match result for debugging
        if (match) {
            // Update the current combo with the extracted combo number
            currentCombo = match[1];  // Extract the combo number from the message
            console.log("Combo updated: " + currentCombo);
            return;
        }

        // Check for combo expiration messages
        match = message.match(comboExpirationRegex);
        if (match) {
            // Reset the combo to "no combo LOL"
            currentCombo = "no combo LOL";
            console.log("Combo expired, reset to no combo.");
        }
    } catch (e) {
        console.error(e);
    }

}).setChatCriteria("&r&cYour Kill Combo has expired! You reached a ${*} Kill Combo!&r|&r&a&l+5 Kill Combo &r&8&r&b+3✯ Magic Find&r");


// Render the combo on the screen
if (displayCurrentCombo) {
    register("renderOverlay", () => {
        displayCombo();
    });
}

export function toggleComboCounter() {
    displayCurrentCombo = !displayCurrentCombo;
    ChatLib.chat(`&6[MissingFeatures] &7Pristine procs are now &r&e${displayCurrentCombo ? "enabled" : "disabled"}.`);
}