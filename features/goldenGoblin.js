const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

let displayGoldenGoblinMessage = true;
let goblinPositions = [];

// Function to find Golden Goblins
function findGoldenGoblins() {
    // Get all armor stands
    const entities = World.getAllEntitiesOfType(EntityArmorStand.class);
    
    // Filter entities with the specific name format for Golden Goblin
    const goblins = entities.filter(e => e.getName() === '§8[§7Lv50§8] §cGolden Goblin§r §a3§f/§a3§c❤');

    // Store positions of all found goblins
    goblinPositions = goblins.map(goblin => ({
        x: goblin.getRenderX(),
        y: goblin.getRenderY(),
        z: goblin.getRenderZ()
    }));

    // Print the positions of the goblins
    console.log(goblinPositions.map(goblin => `X: ${goblin.x}, Y: ${goblin.y}, Z: ${goblin.z}`).join("\n"));

    // print player posistion
    let playerPos = Player.asPlayerMP().getPos();
    console.log(`Player X: ${playerPos.x}, Y: ${playerPos.y}, Z: ${playerPos.z}`);

    //draw a line from player to each goblin
    goblinPositions.forEach(pos => {
        Renderer.drawRect(Renderer.color(255, 255, 0, 255), pos.x, pos.y, 10, 10);
    });
}

// Register the function to detect the Golden Goblin spawn message
register("chat", (event) => {
    if (!displayGoldenGoblinMessage) {
        cancel(event);
    }
    console.log("Trying to draw tracers");

    // Introduce a delay of 1 second before finding goblins
    setTimeout(findGoldenGoblins, 5000);
}).setCriteria("&r&6A Golden Goblin has spawned!&r");

// Render event to draw the tracers
register("renderWorld", () => {
    if (goblinPositions.length === 0) return;

    // Get player's position
    let playerPos = Player.asPlayerMP().getPos();

    // Draw a line from player to each goblin
    goblinPositions.forEach(pos => {
        Renderer.drawLine(playerPos.x, playerPos.y, playerPos.z, pos.x, pos.y, pos.z, Renderer.color(255, 255, 0, 255));
    });
});

// Function to toggle the Golden Goblin message display
export function toggleGoldenGoblinMessage() {
    displayGoldenGoblinMessage = !displayGoldenGoblinMessage;
    ChatLib.chat(`&6[MissingFeatures] &7Golden Goblin message display is now &r&e${displayGoldenGoblinMessage ? "enabled" : "disabled"}.`);
}
