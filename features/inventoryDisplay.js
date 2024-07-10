let inventoryToDraw = null;
let displayInventory = false; 
let inventoryCorner = 1;

function drawInventory() {
    if (displayInventory && inventoryToDraw !== null) {
        let xOffset, yOffset;
        switch (inventoryCorner) {
            case 1:
                xOffset = 10;
                yOffset = 10;
                break;
            case 2:
                xOffset = Renderer.screen.getWidth() - 190;
                yOffset = 10;
                break;
            case 3:
                xOffset = 10;
                yOffset = Renderer.screen.getHeight() - 70;
                break;
            case 4:
                xOffset = Renderer.screen.getWidth() - 190;
                yOffset = Renderer.screen.getHeight() - 70;
                break;
            default:
                xOffset = 10;
                yOffset = 10;
                break;
        }

        Renderer.drawRect(Renderer.color(0, 0, 0, 150), xOffset - 10, yOffset - 10, 200, 80); 

        for (let i = 9; i < 36; i++) { 
            let item = inventoryToDraw[i];

            let x = xOffset + ((i - 9) % 9) * 20; 
            let y = yOffset + Math.floor((i - 9) / 9) * 20;

            Renderer.drawRect(Renderer.color(50, 50, 50, 150), x, y, 18, 18);

            if (item !== null) {
                item.draw(x, y, 0.8);
                if (item.getStackSize() > 1) {
                    Renderer.drawString(item.getStackSize(), x + 8, y + 10);
                }
            }
        }
    }
}

function updateInventory() {
    if (displayInventory) {
        inventoryToDraw = Player.getInventory().getItems();
    }
}

export function setInventoryCorner(corner) {
    if ([1, 2, 3, 4].includes(corner)) {
        inventoryCorner = corner;
        ChatLib.chat(`&6[MissingFeatures] &7Inventory corner set to &r&e${corner}.`);
    } else {
        ChatLib.chat(`&6[MissingFeatures] &7Invalid corner. Please use a number between &r&e1 and 4.`);
    }
}

register("step", updateInventory);
register("renderOverlay", drawInventory);

export function toggleInventoryDisplay() {
    displayInventory = !displayInventory;
    ChatLib.chat(`&6[MissingFeatures] &7Inventory display is now &r&e${displayInventory ? "enabled" : "disabled"}.`);
}
