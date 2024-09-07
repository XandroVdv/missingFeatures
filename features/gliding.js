let enabled = true;
let isBreaking = false;

// Function to check if the block being mined is a gemstone
function isMiningGemstone() {
    let lookingAt = Player.lookingAt();

    // Check if the player is looking at a block
    if (lookingAt === undefined || lookingAt === null) {
        return false;
    }

    // Check if the block type is defined
    if (lookingAt.type === undefined || lookingAt.type.name === undefined) {
        return false;
    }

    // Get the block type
    let block = lookingAt.type.name;

    // Check if the block type string contains "glass" and the player is breaking the block
    if (block.toLowerCase().includes("glass") && isBreaking) {
        return true;
    }

    return false;
}

// Main function to handle the mining check
function checkMining() {
    if (!enabled) return;

    // Check if the player is mining a gemstone
    if (isMiningGemstone()) {
        ChatLib.chat("&6[MissingFeatures] &7You are mining a gemstone!");
    }
}

// Register an event to check mining periodically
register("tick", () => {
    checkMining();
});

// Event to set `isBreaking` to true when the player starts breaking a block
register("playerInteract", (event) => {
    if (event.action == "LEFT_CLICK_BLOCK") {
        isBreaking = true;
    } else if (event.action == "LEFT_CLICK_AIR") {
        isBreaking = false;
    }
});

// Function to toggle the feature
export function toggleGliding() {
    enabled = !enabled;
    ChatLib.chat(`&6[MissingFeatures] &7Gemstone pinggliding helper is now &r&e${enabled ? "enabled" : "disabled"}.`);
}
