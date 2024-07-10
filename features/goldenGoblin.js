let displayGoldenGoblinMessage = true;

register("chat", (event) => {
    if(!displayGoldenGoblinMessage) {
        cancel(event);
        // drawTracers();
    }
}).setCriteria("&r&6A Golden Goblin has spawned!&r");

// function drawTracers() {

//     //find golden goblin entity
//     let goblin = World.getAllEntities().filter(e => e.getName().includes("Golden Goblin"));
//     if(goblin.length == 0) return;
//     goblin = goblin[0];

//     //get goblin's position
//     let pos = goblin.getPosition();

//     //draw ESP box around goblin
//     drawEspBox(pos.getX(), pos.getY(), pos.getZ(), 1, 1, 1, 1, 0, 0, true);

//     //get player's position
//     let playerPos = Player.getPosition();

//     //draw line from player to goblin
//     Renderer.drawLine(playerPos, pos, Renderer.color(255, 255, 0, 255));

// }

export function toggleGoldenGoblinMessage() {
    displayGoldenGoblinMessage = !displayGoldenGoblinMessage;
    ChatLib.chat(`&6[MissingFeatures] &7Golden Goblin message display is now &r&e${displayGoldenGoblinMessage ? "enabled" : "disabled"}.`);
}
