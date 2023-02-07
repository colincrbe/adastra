// src/commands/create/index.ts
import { Command } from "@oclif/core";
var Create = class extends Command {
  async run() {
    this.log("hello adastra create ! (./src/commands/create/index.ts)");
  }
};
Create.description = "Say Create";
Create.examples = [
  `$ adastra create
    create new project (./src/commands/create/index.ts)
`
];
Create.flags = {};
Create.args = {};
export {
  Create as default
};