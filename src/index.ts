import { getChangedFiles } from 'git-ci-utils'

export const getLintableFiles = async (extensions = ['.js']): Promise<string[]> => {
  const changedFiles = await getChangedFiles(true)
  return changedFiles.filter(path => !!extensions.find(ext => path.endsWith(ext)))
}
