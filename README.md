# Mariothemed-ui

A simple, easy to use and fun ui library 🍄

## Documentation
Please check [our website](https://bienmag.github.io/mariothemed-ui/) for the latest version of Mariothemed-UI.

## Installation
To use Mariothemed-UI components you only need to install @bienmag/mariothemed-ui package and its peer dependencies: 

```
yarn add @bienmag/mariothemed-ui
or
npm i @bienmag/mariothemed-ui
```

## Usage
To start using the components, simply import the needed components!

```
import {Button} from "@bienmag/mariothemed-ui"

function Example() {
   return <Button>It's-a me, Mario!</Button>
}
```
More guides are available [here](https://bienmag.github.io/mariothemed-ui/)

## Cloning the repo
1. To get this project files locally on your machine, you can clone this repository by running the following command on your terminal or command line:

```sh
git clone https://github.com/bienmag/mariothemed-ui.git
```

2. Install all the dependency packages found in the `package.json` files across the monorepo apps by running `yarn install` from the project root directory.
   
3. To start the development servers of all the applications in your monorepo in parrallel, simply run `yarn dev`. To start an individual app the monorepo, run:
   `yarn workspace <name> dev` (_name_: is found/set in the package.json for each individual app folder)

   ### Apps & Packages

- `apps/docs`: a sample documentation [Next.js]() app
- `apps/web`: a sample web [Next.js]() app
- `packages/ui`: a stub React component library shared by both `web` and `docs` applications
- `packages/config`: shared `tailwindcss`, `eslint` configurations (includes `eslint-config-next`, `eslint-config-prettier`, `eslint-plugin-prettier` etc..)
- `packages/tsconfig`: `tsconfig.json`s which can be used by extending them throughout the monorepo
