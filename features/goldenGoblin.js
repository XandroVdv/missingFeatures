let displayGoldenGoblinMessage = true;

const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

// Function to draw tracers to Golden Goblins
function drawTracers() {
    // Find golden goblin entities
    const entities = World.getAllEntitiesOfType(EntityArmorStand.class).filter(a => a?.getName() == '[&7Lv50&f] &cGolden Goblin &a3&f/&a3&c❤ ' && !a.isInvisible());

    // If no goblins are found, return
    if (entities.length === 0) console.log("No goblins found");

    // Iterate over each goblin to draw tracers
    entities.forEach(goblin => {
        console.log("Found goblin to draw to on " + goblin.getRenderX() + " " + goblin.getRenderY() + " " + goblin.getRenderZ());
        // Get goblin's position
        let pos = goblin.getPosition();

        // Get player's position
        let playerPos = Player.getPosition();

        // Draw a line from player to goblin
        Renderer.drawLine(playerPos.x, playerPos.y, playerPos.z, pos.x, pos.y, pos.z, Renderer.color(255, 255, 0, 255));
    });
}

// Register the function to detect the Golden Goblin spawn message
register("chat", (event) => {
    if(!displayGoldenGoblinMessage) {
        cancel(event);
    }
    console.log("trying to draw tracers");
    drawTracers();
}).setCriteria("&r&6A Golden Goblin has spawned!&r");

// Function to toggle the Golden Goblin message display
export function toggleGoldenGoblinMessage() {
    displayGoldenGoblinMessage = !displayGoldenGoblinMessage;
    ChatLib.chat(`&6[MissingFeatures] &7Golden Goblin message display is now &r&e${displayGoldenGoblinMessage ? "enabled" : "disabled"}.`);
}
