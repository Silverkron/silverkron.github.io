import DefaultCommand from "./DefaultCommand";

export default class CatCommand extends DefaultCommand {
    constructor() {
        super('cat');
    }

    exec() {
        if (this.argumentsHave('password.txt')) {
            return `
captain4mericasucks
            `;
        }

        if (this.argumentsHave('realpassword.txt')) {
            return `
ironmanrulez
            `;
        }

        return `                
      |\\      _,,,---,,_
ZZZzz /,\`.-'\`'    -.  ;-;;,_
     |,4-  ) )-,_. ,\\ (  \`'-'
    '---''(_/--'  \`-'\\_)
    `;
    }

    argumentsHave(argument) {
        return this.arguments.includes(argument);
    }
}
