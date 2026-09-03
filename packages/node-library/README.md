# node-library

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][npm-url]

This is a template for nodejs library.

Feel free to delete it if you don't need it.

If you want to use it,
update the `package.json` and this `README.md` file:

- [ ] Update the `name` field in `package.json`
- [ ] Remove the `private` field in `package.json`
- [ ] Update the `description` field in `package.json`
- [ ] Update the `homepage`, `bugs`, and `repository` field in `package.json`
- [ ] Update the `keywords` field in `package.json`
- [ ] Update the `author` field in `package.json`

## About this template

It is a dual-package (CJS/ESM) library.

It uses the following:

- [TypeScript](https://www.typescriptlang.org/)
- [tsdown](https://tsdown.dev/) for the CJS/ESM build
- [vitest](https://vitest.dev/) for tests and coverage
- [biome](https://biomejs.dev/) for lint and format
  - [@repobuddy/biome](https://github.com/repobuddy/repobuddy/blob/main/packages/biome/README.md)
- [depcheck](https://github.com/depcheck/depcheck#readme)

## Install

```sh
# npm
npm install node-library

# yarn
yarn add node-library

# pnpm
pnpm install node-library

#rush
rush add -p node-library
```

[downloads-image]: https://img.shields.io/npm/dm/unional/node-library.svg?style=flat
[npm-image]: https://img.shields.io/npm/v/unional/node-library.svg?style=flat
[npm-url]: https://npmjs.org/package/unional/node-library
