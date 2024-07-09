import { executeCommand } from './commandManager';

register("command", (command, ...args) => {
    executeCommand(command, args);
}).setName("ms").setAliases("ms");
