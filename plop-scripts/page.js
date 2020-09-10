module.exports = {
  description: "Create a page",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your page name?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.js",
      templateFile: "plop-templates/page/Page.js.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/{{pascalCase name}}Styled.js",
      templateFile: "plop-templates/page/PageStyled.js.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{pascalCase name}}/index.js",
      templateFile: "plop-templates/page/indexOfPage.js.hbs",
    },

    {
      type: "append",
      path: "src/pages/index.js",
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`,
    },
    {
      type: "append",
      path: "src/pages/index.js",
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`,
    },

    {
      type: "add",
      path: "src/pages/routes.js",
      templateFile: "plop-templates/routes.js.hbs",
      skipIfExists: true,
    },
    {
      type: "append",
      path: "src/pages/routes.js",
      pattern: `/* PLOP_ROUTE_IMPORT */`,
      template: `\t{{pascalCase name}},`,
    },
    {
      type: "append",
      path: "src/pages/routes.js",
      pattern: `{/* PLOP_INJECT_ROUTE */}`,
      template: `\t\t\t\t<Route exact path="/{{dashCase name}}" component={ {{pascalCase name}} } />`,
    },
  ],
};
