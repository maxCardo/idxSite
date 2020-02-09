/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const exec = require("child_process").exec

/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error)
      }
      resolve(stdout ? stdout : stderr)
    })
  })
}

exports.onPreInit = () => {
  return new Promise(async resolve => {
    await execShellCommand("rm -rf ./src/components")
    await execShellCommand("rm ./src/App.css")
    await execShellCommand("cp -a ../client/src/components ./src/")
    await execShellCommand("cp ../client/src/App.css ./src/App.css")
    resolve()
  })
}
