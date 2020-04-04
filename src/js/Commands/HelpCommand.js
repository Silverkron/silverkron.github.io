import DefaultCommand from "./DefaultCommand";

export default class HelpCommand extends DefaultCommand {
    constructor() {
        super('help');
    }

    exec() {
        return `
 _    _ _                       
| |  | (_)                      
| |__| |_   _   _ ___  ___ _ __ 
|  __  | | | | | / __|/ _ \\ '__|
| |  | | | | |_| \\__ \\  __/ |   
|_|  |_|_|  \\__,_|___/\\___|_|   
                                             
Welcome to my website. Try to use:
- help
- whoami
- cat
        `;
    }
}
