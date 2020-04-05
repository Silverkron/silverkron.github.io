import DefaultCommand from "./DefaultCommand";

export default class LsCommand extends DefaultCommand {
    constructor() {
        super('ls');
    }

    exec() {
        return `                
.eslintrc.json      .gitignore              CNAME               README.md           img                 index.html          js                  password.txt        realpassword.txt        robots.txt          sitemap.xml
    `;
    }
}
