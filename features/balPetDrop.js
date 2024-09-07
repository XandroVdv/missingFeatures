const screenHeight = Renderer.screen.getHeight();
const screenWidth = Renderer.screen.getWidth();

let balPetDropDisplay = true;

if (balPetDropDisplay) {   
    register("chat", (event) => {
        let message = ChatLib.getChatMessage(event);
        
        if(message == "&r&6&lRARE DROP! &r&eA Bal Pet dropped!&r") {        
            let toDisplay = "§r§eEasy bal pet!§r";
            // Calculate x and y coordinates to center the text
            let textWidth = Renderer.getStringWidth(toDisplay);
            let x = (screenWidth / 2) - (textWidth / 2); 
            let y = screenHeight / 2 - 10;  
            
            cancel(event);
            // Draw the string on the screen
            Renderer.drawString(toDisplay, x, y);
        }
    });
}

export function toggleBalMessage() {
    balPetDropDisplay = !balPetDropDisplay;
    ChatLib.chat(`&6[MissingFeatures] &7Bigger Bal pet drop messages are now &r&e${balPetDropDisplay ? "enabled" : "disabled"}.`);
}