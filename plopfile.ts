import { NodePlopAPI } from 'plop';


export default function (plop: NodePlopAPI) {
  plop.setHelper('toSnakeCamel', (text: string) => (
    text
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()
  ));

  plop.setGenerator('component', {
    description: 'Generate a new React component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Component type:',
        choices: [
          'element',
          'ui',
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name:'
      }
    ],
    actions({ type }) {
      switch (type) {
        case 'element':
          return [
            {
              type: 'add',
              path: 'src/components/element/{{name}}.tsx',
              templateFile: 'plop/templates/Element.tsx.hbs'
            },
            {
              type: 'add',
              path: 'stories/element/{{name}}.stories.tsx',
              templateFile: 'plop/templates/Element.stories.tsx.hbs'
            },
            {
              type: 'add',
              path: 'stories/element/{{name}}.test.tsx',
              templateFile: 'plop/templates/Element.test.tsx.hbs'
            },
          ];
        case 'ui':
          return [
            {
              type: 'add',
              path: 'src/components/ui/{{name}}.tsx',
              templateFile: 'plop/templates/UI.tsx.hbs'
            },
            {
              type: 'add',
              path: 'stories/ui/{{name}}.stories.tsx',
              templateFile: 'plop/templates/UI.stories.tsx.hbs'
            },
            {
              type: 'add',
              path: 'stories/ui/{{name}}.test.tsx',
              templateFile: 'plop/templates/UI.test.tsx.hbs'
            },
          ];
        default:
          return [];
      }
    }
  });

};
