import toggleComboCounter from './commands/toggleComboCounter';

const commands = {
    help: require('./commands/help').default,
    toggleInventory: require('./commands/toggleInventory').default,
    setInventoryCorner: require('./commands/setInventoryCorner').default,
    toggleArmor: require('./commands/toggleArmor').default,
    toggleGoldenGoblinMessage: require('./commands/toggleGoldenGoblinMessage').default,
    togglePristineMessage: require('./commands/togglePristineMessage').default,
    toggleAvgPristine: require('./commands/toggleAveragePristine').default,
    toggleGliding: require('./commands/toggleGliding').default,
    toggleBalMessage: require('./commands/toggleBalMessage').default,
    toggleComboCounter: require('./commands/toggleComboCounter').default,
    h: require('./commands/help').default,
    ti: require('./commands/toggleInventory').default,
    sic: require('./commands/setInventoryCorner').default,
    ta: require('./commands/toggleArmor').default,
    tggmsg: require('./commands/toggleGoldenGoblinMessage').default,
    tpm: require('./commands/togglePristineMessage').default,
    tap: require('./commands/toggleAveragePristine').default,
    tg: require('./commands/toggleGliding').default,
    tbm: require('./commands/toggleBalMessage').default,
    tcc: toggleComboCounter
};

export function executeCommand(command, args) {
    if (commands[command]) {
        commands[command](args);
    } else {
        ChatLib.chat("&6[MissingFeatures] &7Unknown command. Use &r&e/mf help &7for a list of commands.");
    }
}
