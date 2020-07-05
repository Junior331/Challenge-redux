module.exports = {
  description: "Create a module",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your module name?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/modules/{{pascalCase name}}/{{pascalCase name}}.js",
      templateFile: "plop-templates/module/Module.js.hbs",
    },
    {
      type: "add",
      path:
        "src/components/modules/{{pascalCase name}}/{{pascalCase name}}Styled.js",
      templateFile: "plop-templates/module/ModuleStyled.js.hbs",
    },
    {
      type: "add",
      path: "src/components/modules/{{pascalCase name}}/index.js",
      templateFile: "plop-templates/module/indexOfModule.js.hbs",
    },

    {
      type: "add",
      path: "src/components/modules/index.js",
      templateFile: "plop-templates/module/injectable-index.js.hbs",
      skipIfExists: true,
    },
    {
      type: "append",
      path: "src/components/modules/index.js",
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
    },
    {
      type: "append",
      path: "src/components/modules/index.js",
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`,
    },
  ],
};
