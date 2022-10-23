"use strict";
const Generator = require("yeoman-generator");
const prompts = require('./prompts');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.configOptions = this.options.configOptions || {};
  }

  initializing() {
    this.log("Generating SpringBoot Application");
  }

  prompting() {
    const prompts = [
      {
        type: "string",
        name: "appName",
        message: "What is the application name?",
        default: "myservice"
      },
      {
        type: "list",
        name: "appType",
        message: "Do you want to use WebMVC or WebFlux?",
        choices: [
          {
            value: "webmvc",
            name: "WebMVC"
          },
          {
            value: "webflux",
            name: "WebFlux"
          }
        ],
        default: "webmvc"
      }
    ];

    return this.prompt(prompts).then(answers => {
      Object.assign(this.configOptions, answers);
    });
  }
    get prompting() {
        return prompts.prompting;
    }

  writing() {
    this.fs.copyTpl(
      this.templatePath("pom.xml.tpl"),
      this.destinationPath(this.configOptions.appName + "/pom.xml"),
      this.configOptions
    );

    this.fs.copy(
      this.templatePath("src"),
      this.destinationPath(this.configOptions.appName + "/src")
    );
  }

  end() {
    this.log(
      `Application ${this.configOptions.appName} generated successfully`
    );
  }
  
};