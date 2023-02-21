# eslint-pullrequest

Run ESLint only on files affected by a PR

[ ![npm version](https://img.shields.io/npm/v/eslint-pullrequest.svg?style=flat) ](https://npmjs.org/package/eslint-pullrequest "View this project on npm") [ ![Issues](https://img.shields.io/github/issues/Sleavely/eslint-pullrequest.svg) ](https://github.com/Sleavely/eslint-pullrequest/issues)

## Usage

In your Bitbucket Pipeline or Github Action, instead of `npx eslint .`:
```
npx eslint-pullrequest
```

### Arguments

Any flags passed to _eslint-pullrequest_ will be passed to ESLint. See [ESLint CLI reference](https://eslint.org/docs/latest/use/command-line-interface) for inspiration.

For example:

```
npx eslint-pullrequest --format compact
```

### Environment variables

#### `LINTABLE_EXTENSIONS`

_eslint-pullrequest_ will use your existing ESLint configuration, but because of how ESLint file matching works it will only attempt to lint files involved in the pull request that have the extensions defined in the `LINTABLE_EXTENSIONS` environment variable. The default value is `.js,.ts,.jsx,.tsx`.

#### `MAX_EXEC_BUFFER_MB`

The size of the buffer that holds ESLints terminal output. Normally you shouldn't have to change this value unless you have hundreds or thousands of linting errors. The default is `10`.

## License

This project uses the MIT license. See [LICENSE.md](./LICENSE.md)
