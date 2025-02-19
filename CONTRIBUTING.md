## Contributing Guidelines

Thanks for considering contributing the projects, please check those guidelines before submitting a PR.

### Open an issue

Please consider opening an issue before PRs, this is not a hard requirment but optional. you might dismiss that if you think it would waste your time.

### Commits

We are using conventional commits, make sure your commits are so.

### Structure 

We are using a `monorepo` where `packages` and `apps` holds the main source code.

Each module should have it's own dependences, root dependencies are just those that manages the repo. like `synpack`, `turbo`, etc..

All code should be written in the module code. so in `toolbar` or `web`, everything should be `typescript`. for any future modules it should be either `rust`, `python` or `typescript`. don't mix modules iin the same package

Webapps, toolbar, apis and stuff goes into `apps`, almost everything else is in `packages`. if you are hesitant just do it in packages

building interfaces or any sort of features that is shared between different apps should be in `packages`

low level ui components should be written in `@packages/ui`.

### Setup

make sure to have `eslint`, `prettier` installed for your editor. we are using `pnpm`, so make sure to have that installed as well.

in order to run the extension, check dev tools of your browser and aim it to the `./dist` folder at the root directory of this repo





