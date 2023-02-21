#!/usr/bin/env node

import { getLintableFiles } from '../src/index'
import { ESLint } from 'eslint'

const {
  LINTABLE_EXTENSIONS = '.js,.ts,.jsx,.tsx',
} = process.env;

(async () => {
  const lintableExtensions = LINTABLE_EXTENSIONS.split(',')
  const lintableFiles = await getLintableFiles(lintableExtensions)

  const eslint = new ESLint()
  const results = await eslint.lintFiles(lintableFiles)

  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  const errorCount = results.reduce((sum, { errorCount }) => { return sum + errorCount }, 0)

  if (errorCount) {
    const formatter = await eslint.loadFormatter()
    const resultText = formatter.format(results)
    console.log(resultText)

    process.exit(1)
  }
})().catch(err => {
  console.error(err)
  process.exit(1)
})
