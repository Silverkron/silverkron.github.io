import Terminal from './js/Terminal';
import {HelpCommand, WhoamiCommand, CatCommand} from './js/Commands';

const terminalDomContainer = document.querySelector('body');
const terminal = new Terminal(terminalDomContainer, [
    HelpCommand,
    WhoamiCommand,
    CatCommand,
]);
terminal.command('whoami', 100);
