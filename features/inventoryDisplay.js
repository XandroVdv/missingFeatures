let inventoryToDraw = null;
let displayInventory = false;  // This will track whether the inventory display is on or off
let inventoryCorner = 1;  // Default corner position (1 = top left, 2 = top right, 3 = bottom left, 4 = bottom right)

function drawInventory() {
    if (displayInventory && inventoryToDraw !== null) {  // Check if displayInventory is true
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

// Function to update the inventory
function updateInventory() {
    if (displayInventory) {
        inventoryToDraw = Player.getInventory().getItems();
    }
}

// Function to set the inventory corner
export function setInventoryCorner(corner) {
    if ([1, 2, 3, 4].includes(corner)) {
        inventoryCorner = corner;
        ChatLib.chat(`&6[Zaqus] &7Inventory corner set to &r&e${corner}.`);
    } else {
        ChatLib.chat(`&6[Zaqus] &7Invalid corner. Please use a number between &r&e1 and 4.`);
    }
}

// Register the update and render functions
register("step", updateInventory);
register("renderOverlay", drawInventory);

// Export the toggle function
export function toggleInventoryDisplay() {
    displayInventory = !displayInventory;
    ChatLib.chat(`&6[Zaqus] &7Inventory display is now &r&e${displayInventory ? "enabled" : "disabled"}.`);
}
