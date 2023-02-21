#!/usr/bin/env node

import { getLintableFiles } from '../src/index'
import execute from '../src/utils/execute'

const {
  LINTABLE_EXTENSIONS = '.js,.ts,.jsx,.tsx',
} = process.env;

(async () => {
  const lintableExtensions = LINTABLE_EXTENSIONS.split(',')
  const lintableFiles = await getLintableFiles(lintableExtensions)

  const eslintArguments = [
    // proxy any command-line arguments we received
    ...process.argv.slice(2),
    ...lintableFiles,
  ]
    .filter(Boolean)
    .join(' ')

  await execute(`npx eslint ${eslintArguments}`)
    .catch(err => {
      // ExecException will have a code
      if (err.code) {
        console.error(err)
        process.exit(err.code)
      }
      // assume any other output is from eslint
      console.log(err.message)
      process.exit(1)
    })
})().catch(err => {
  console.error(err)
  process.exit(1)
})
