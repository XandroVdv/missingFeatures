import { setInventoryCorner, toggleInventoryDisplay } from './features/inventoryDisplay';
import { toggleArmorDisplay } from './features/armorDisplay';

register("command", () => {
    ChatLib.chat("&6[---------------------------------------------------]");
    ChatLib.chat("&6[Zaqus] &7Available commands:");
    ChatLib.chat("&4Inventory commands:");
    ChatLib.chat("&r&e/zToggleinventory &7- Toggle the inventory display.");
    ChatLib.chat("&r&e/zSetInventoryCorner &7- Set the corner of the inventory display.");
    ChatLib.chat("&4Armor commands:");
    ChatLib.chat("&r&e/zTogglearmor &7- Toggle the armor display.");
    ChatLib.chat("&4Help command:");
    ChatLib.chat("&r&e/zHelp &7- Display this help message.");
    ChatLib.chat("&6[---------------------------------------------------]");
}).setName("zHelp").setAliases("zH");


//inventory
register("command", () => {
    toggleInventoryDisplay();
}).setName("zToggleinventory").setAliases("zTi");

register("command", (pos) => {
    let p = parseInt(pos);

    setInventoryCorner(p);
}).setName("zSetInventoryCorner").setTabCompletions(["1", "2", "3", "4"]).setAliases(["zSetInventoryCorner", "zSic"]);
//armor
register("command", () => {
    toggleArmorDisplay();
}).setName("zTogglearmor").setAliases("zTa");


