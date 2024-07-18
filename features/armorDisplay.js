let armorToDraw = [null, null, null, null];
let displayArmor = false;

function drawArmor() {
    if (displayArmor && armorToDraw != null) {
        const screenHeight = Renderer.screen.getHeight();
        const armorHeight = 4 * 20;

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
                inventory.getStackInSlot(39),
                inventory.getStackInSlot(38), 
                inventory.getStackInSlot(37),
                inventory.getStackInSlot(36)  
            ];
        } catch (e) {
            console.log(`Error fetching armor: ${e}`);
        }
    }
}

register("step", updateArmor).setDelay(1);
register("renderOverlay", drawArmor);

export function toggleArmorDisplay() {
    displayArmor = !displayArmor;
    ChatLib.chat(`&6[MissingFeatures] &7Armor display is now &r&e${displayArmor ? "enabled" : "disabled"}.`);
}
