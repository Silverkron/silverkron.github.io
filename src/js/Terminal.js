export default class Terminal {
    constructor(containerElement, commands) {
        this.containerElement = containerElement;
        this.bashUser = 'tony@jarvis:~$';
        this.commands = commands;

        this.history = [];
        this.historyPosition = 0;

        this.initHistoryElement();
        this.initInputRowElement();
    }

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    focus() {
        this.inputElement.focus();
    }

    async command(command, delay = 0) {
        for (let i = 0; i <= command.length; i += 1) {
            await this.delay(delay);
            this.inputElement.value = command.substring(0, i);
        }

        await this.delay(delay);
        await this.execCommand();
    }

    initHistoryElement() {
        this.historyElement = document.createElement("ul");
        this.historyElement.setAttribute('for', 'terminal-input');
        this.historyElement.setAttribute('id', 'terminal-history');
        this.containerElement.appendChild(this.historyElement)
    }

    initInputRowElement() {
        const node = document.createElement("div");
        node.setAttribute('id', 'terminal-input-row');

        const userNode = this.initUserElement();
        this.initInputElement();

        node.appendChild(userNode);
        node.appendChild(this.inputElement);

        const instance = this;
        node.addEventListener('keydown', async (e) => {
            if (e.key === 'Enter') {
                await instance.execCommand();
            }

            if (e.key === 'ArrowUp') {
                instance.getUpHistory();
            }

            if (e.key === 'ArrowDown') {
                instance.getDownHistory();
            }

        });
        this.containerElement.appendChild(node)
    }

    addElementOnHistory(commandOutput) {
        this.historyElement.appendChild(Terminal.createHistoryNode(`${this.bashUser} ${commandOutput}`));
        this.inputElement.value = '';
    }

    clear() {
        this.historyElement.innerHTML = "";
        this.addElementOnHistory('clear');
    }

    getUpHistory() {
        if (this.historyPosition >= this.history.length) {
            return
        }

        this.inputElement.value = this.history[this.historyPosition];
        this.historyPosition++;
    }

    getDownHistory() {
        if (this.historyPosition <= 0) {
            return;
        }

        this.inputElement.value = this.history[this.historyPosition - 2] || '';
        this.historyPosition--;
    }

    async execCommand() {
        const command = this.inputElement.value;
        this.history.unshift(command);
        this.historyPosition = 0;

        // TODO replace split with mor logic
        const splittedCommand = command.split(" ");

        this.findCommand(splittedCommand.shift(), splittedCommand);
        await this.delay(100);
        this.focus();
    }

    findCommand(command, args) {
        if (command === 'clear') {
            this.clear();
            return;
        }

        let commandNotFound = true;
        for (const Command of this.commands) {
            const commandInstance = new Command();

            if (commandInstance.check(command)) {
                commandInstance.setArguments(args);
                this.addElementOnHistory(`${command} ${args.join(' ')}${commandInstance.exec()}`);
                commandNotFound = false;
            }
        }

        if (commandNotFound) {
            this.addElementOnHistory(`${command}
bash: command not found: ${command}`);
        }
    }

    static createHistoryNode(history) {
        const node = document.createElement("LI");
        const textnode = document.createTextNode(history);
        node.appendChild(textnode);
        return node;
    };

    initUserElement() {
        const node = document.createElement("label");
        node.setAttribute('id', 'terminal-user');
        node.setAttribute('for', 'terminal-input');

        const textnode = document.createTextNode('tony@jarvis:~$');
        node.appendChild(textnode);

        return node;
    }

    initInputElement() {
        this.inputElement = document.createElement("input");
        this.inputElement.setAttribute('type', 'text');
        this.inputElement.setAttribute('id', 'terminal-input');
    }
}
