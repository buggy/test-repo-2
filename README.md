# Mono Repo Template

A basic mono repo template using

- [Turbo](https://turbo.build/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Commands

### build

Build the app / packages

```sh
npm run build
```

### clean

Clean the output from the app / packages

```sh
npm run clean
```

### dev

Run the app / package with --watch so that it automatically builds on changes to files

```sh
npm run dev
```

### lint

Run the app / package lint commands

```sh
npm run build
```

### pretty

Run Prettier over project

```sh
npm run pretty
```

### test

Run the app / package tests

```sh
npm run test
```

## Packages

### Adding a new package

To add a new package to the monorepo.

1. Copy `packages/example` to a new folder - example: `cp -R packages/example packages/new-package`.
2. Update the `package.json` for the new package. You will need to change the `name` at a minimum but will probably want to update other fields too.
3. From the project root run `npm i`. This will add the new package to the `package-lock.json` in the project root.

You should now check that everything works by running the following commands

1. `npm ci`
2. `npm run pretty`
3. `npm run lint`
4. `npm run test`
5. `npm run build`

During commands 2-5 you should see Turbo running commands for the new package.

### Removing an old package

To remove a package from the monorepo.

1. Remove the folder from in the `packages` folder - example: `rm -rf packages/old-package`
2. From the project root run `npm i`. This will remove the old package from the `package-lock.json` in the project root.

You should now check that everything works by running the following commands

1. `npm ci`
2. `npm run pretty`
3. `npm run lint`
4. `npm run test`
5. `npm run build`

During commands 2-5 you should not see Turbo running commands for the old package.
