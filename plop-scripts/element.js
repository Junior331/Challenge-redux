module.exports = {
  description: "Create a element",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your element name?",
    },
  ],
  actions: [
    {
      type: "add",
      path:
        "src/components/elements/{{pascalCase name}}/{{pascalCase name}}.js",
      templateFile: "plop-templates/element/Element.js.hbs",
    },
    {
      type: "add",
      path:
        "src/components/elements/{{pascalCase name}}/{{pascalCase name}}Styled.js",
      templateFile: "plop-templates/element/ElementStyled.js.hbs",
    },
    {
      type: "add",
      path: "src/components/elements/{{pascalCase name}}/index.js",
      templateFile: "plop-templates/element/indexOfElement.js.hbs",
    },

    {
      type: "add",
      path: "src/components/elements/index.js",
      templateFile: "plop-templates/element/injectable-index.js.hbs",
      skipIfExists: true,
    },
    {
      type: "append",
      path: "src/components/elements/index.js",
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from "./{{pascalCase name}}";`,
    },
    {
      type: "append",
      path: "src/components/elements/index.js",
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`,
    },
  ],
};
