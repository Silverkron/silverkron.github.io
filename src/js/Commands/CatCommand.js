import DefaultCommand from "./DefaultCommand";

export default class CatCommand extends DefaultCommand {
    constructor() {
        super('cat');
    }

    exec() {
        return `                
      |\\      _,,,---,,_
ZZZzz /,\`.-'\`'    -.  ;-;;,_
     |,4-  ) )-,_. ,\\ (  \`'-'
    '---''(_/--'  \`-'\\_)
    `;
    }
}
