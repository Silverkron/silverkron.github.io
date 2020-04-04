import DefaultCommand from "./DefaultCommand";

export default class WhoamiCommand extends DefaultCommand {
    constructor() {
        super('whoami');
    }

    exec() {
        return `                
I am Luca Sciacca CTO at SEO Tester Online. 
Previously, backend developer and devops engineer of PED.

Talk to me about:
    - IOT
    - Node.js
    - Typescript
    - Microservices
    - Devops strategies

These are my repos:
    - https://github.com/Silverkron/ansible-ec2-update-scaling-group
    - https://github.com/Silverkron/dotfiles

How it's made this?
    - Github page
    - Webpack
find the repo here: https://github.com/Silverkron/silverkron.github.io
        `;
    }
}
