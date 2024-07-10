let toggleGGmsg = false;

register("chat", (event) => {
    if(toggleGGmsg) {
        cancel(event);
        console.log("cancelled golden goblin spawn message");
        drawTracers();
    }
}).setCriteria("&r&6A Golden Goblin has spawned!&r");

function drawTracers() {

    //find golden goblin
    let goblin = World.getAllEntities().filter(e => e.getName().includes("Golden Goblin"));
    if(goblin.length == 0) return;
    goblin = goblin[0];

    //get goblin's position
    let pos = goblin.getPosition();

    //get player's position
    let playerPos = Player.getPosition();

    //draw line from player to goblin
    Renderer.drawLine(playerPos, pos, Renderer.color(255, 255, 0, 255));

}

export function toggleGoldenGoblinMessage() {
    toggleGGmsg = !toggleGGmsg;
    ChatLib.chat(`&6[Zaqus] &7Golden Goblin message display is now &r&e${toggleGGmsg ? "enabled" : "disabled"}.`);
}
