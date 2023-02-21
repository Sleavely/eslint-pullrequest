import { exec } from 'child_process'

const {
  MAX_EXEC_BUFFER_MB = '10',
} = process.env

const maxBuffer = 1024 * 1024 * parseFloat(MAX_EXEC_BUFFER_MB)

export default async (command: string): Promise<string> => await new Promise((resolve, reject) => {
  exec(`cd "${process.cwd()}" && ${command}`, { shell: 'bash', maxBuffer }, (err, stdout, stderr) => {
    if (err) {
      // when `command` itself fails its error will be printed to stderr
      if (stderr) {
        return reject(new Error(stderr))
      }
      // some apps (eslint) uses stdout even for errors
      // lets assume that exitcode 1 means there is a meaningful error from the command itself
      if (!err.killed && err.code === 1) {
        return reject(new Error(stdout))
      }
      // when child_process.exec fails the source error will be in `err`
      return reject(err)
    }

    return resolve(stdout)
  })
})
