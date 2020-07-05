module.exports = {
  description: "Create a feature",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your feature name?",
    },
  ],
  actions: [
    {
      type: "add",
      path:
        "src/components/features/{{pascalCase name}}/{{pascalCase name}}.js",
      templateFile: "plop-templates/feature/Feature.js.hbs",
    },
    {
      type: "add",
      path:
        "src/components/features/{{pascalCase name}}/{{pascalCase name}}Styled.js",
      templateFile: "plop-templates/feature/FeatureStyle.js.hbs",
    },
    {
      type: "add",
      path: "src/components/features/{{pascalCase name}}/index.js",
      templateFile: "plop-templates/feature/indexOfFeature.js.hbs",
    },

    {
      type: "add",
      path: "src/components/features/index.js",
      templateFile: "plop-templates/feature/injectable-index.js.hbs",
      skipIfExists: true,
    },
    {
      type: "append",
      path: "src/components/features/index.js",
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
    },
    {
      type: "append",
      path: "src/components/features/index.js",
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`,
    },
  ],
};
