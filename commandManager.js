const commands = {
    help: require('./commands/help').default,
    toggleInventory: require('./commands/toggleInventory').default,
    setInventoryCorner: require('./commands/setInventoryCorner').default,
    toggleArmor: require('./commands/toggleArmor').default,
    h: require('./commands/help').default,
    ti: require('./commands/toggleInventory').default,
    sic: require('./commands/setInventoryCorner').default,
    ta: require('./commands/toggleArmor').default,
};

export function executeCommand(command, args) {
    if (commands[command]) {
        commands[command](args);
    } else {
        ChatLib.chat("&6[MissingFeatures] &7Unknown command. Use &r&e/ms help &7for a list of commands.");
    }
}
