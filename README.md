# eslint-pullrequest

Run ESLint only on files affected by a PR

[ ![npm version](https://img.shields.io/npm/v/eslint-pullrequest.svg?style=flat) ](https://npmjs.org/package/eslint-pullrequest "View this project on npm") [ ![Issues](https://img.shields.io/github/issues/Sleavely/eslint-pullrequest.svg) ](https://github.com/Sleavely/eslint-pullrequest/issues)

## Usage

In your Bitbucket Pipeline or Github Action, instead of `npx eslint .`:
```
npx eslint-pullrequest
```

It will use your existing ESLint configuration, but will attempt to lint all files in the pull request that have the extensions defined in the `LINTABLE_EXTENSIONS` environment variable. The default value is `.js,.ts,.jsx,.tsx`.

## License

This project uses the MIT license. See [LICENSE.md](./LICENSE.md)
