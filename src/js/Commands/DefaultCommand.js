export default class DefaultCommand {
    constructor(command) {
        this.command = command;
    }

    check(commandToCheck) {
        return this.command === commandToCheck;
    }

    setArguments(args) {
        this.arguments = args;
    }

    exec() {
        return `${this.command} ${this.arguments}`;
    }
}
