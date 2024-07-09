let armorToDraw = [null, null, null, null];
let displayArmor = true;

function drawArmor() {
    if (displayArmor && armorToDraw != null) {
        const screenHeight = Renderer.screen.getHeight();
        const armorHeight = 4 * 20; // Each armor slot is 20 pixels high

        let yOffset = (screenHeight - armorHeight) / 2;

        for (let i = 0; i < armorToDraw.length; i++) {
            let item = armorToDraw[i];

            let x = 10;
            let y = yOffset + i * 20;

            Renderer.drawRect(Renderer.color(50, 50, 50, 150), x, y, 18, 18);

            if (item !== null) {
                item.draw(x, y, 1);
                Renderer.drawString(item.getName(), x + 20, y + 4);
            }
        }
    }
}

// Function to update the armor
function updateArmor() {
    if (displayArmor) {
        try {
            let inventory = Player.getInventory();
            armorToDraw = [
                inventory.getStackInSlot(39), // Head (slot 39 in player inventory)
                inventory.getStackInSlot(38), // Chest (slot 38 in player inventory)
                inventory.getStackInSlot(37), // Legs (slot 37 in player inventory)
                inventory.getStackInSlot(36)  // Feet (slot 36 in player inventory)
            ];
        } catch (e) {
            ChatLib.chat(`Error fetching armor: ${e}`);
        }
    }
}

export function setArmorSide(side) {
    if ([1, 2].includes(side)) {
        armorSide = side;
        ChatLib.chat(`&6[Zaqus] &7Armor side set to &r&e${side}.`);
    } else {
        ChatLib.chat(`&6[Zaqus] &7Invalid side. Please use a number between &r&e1 and 2.`);
    }
}

// Register the update and render functions
register("step", updateArmor).setDelay(1);
register("renderOverlay", drawArmor);

// Export the toggle function
export function toggleArmorDisplay() {
    displayArmor = !displayArmor;
    ChatLib.chat(`&6[Zaqus] &7Armor display is now &r&e${displayArmor ? "enabled" : "disabled"}.`);
}
