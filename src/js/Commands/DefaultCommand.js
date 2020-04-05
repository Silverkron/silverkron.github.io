export default class DefaultCommand {
    constructor(command) {
        this.command = command;
    }

    check(commandToCheck) {
        return commandToCheck ? this.command === commandToCheck.toLowerCase() : false;
    }

    setArguments(args) {
        this.arguments = args;
    }

    exec() {
        return `${this.command} ${this.arguments}`;
    }
}
