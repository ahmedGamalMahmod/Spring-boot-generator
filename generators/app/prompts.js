module.exports = {
  prompting
};

function prompting() {
  const done = this.async();
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

  this.prompt(prompts).then(answers => {
    Object.assign(this.configOptions, answers);
    done();
  });
}