import Terminal from './js/Terminal';
import {HelpCommand, WhoamiCommand, CatCommand, LsCommand} from './js/Commands';

const terminalDomContainer = document.querySelector('body');
const terminal = new Terminal(terminalDomContainer, [
    HelpCommand,
    WhoamiCommand,
    CatCommand,
    LsCommand,
]);
terminal.command('whoami', 100);
