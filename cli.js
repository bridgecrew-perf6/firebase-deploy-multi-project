#!/usr/bin/env node
 
const { execCommand } = require('dots-env')
const yargs = require('yargs')

const { argv } = yargs.usage('Usage: $0 <command> [options]').options({
  project: {
    alias: 'p',
    default: 'project',
    demandOption: false,
    describe: 'Project alias',
    nargs: 1
  },
  only: {
    default: '',
    demandOption: false,
    describe: 'Firebase service',
    nargs: 1
  },
  token: {
    default: '',
    describe: 'Firebase deploy token',
    nargs: 1
  }
})

const deploy = async () => {
  try {
    const cliParams = [
      { param: '--project', hasValue: true },
      { param: '--only', hasValue: true },
      { param: '--token', hasValue: true }
    ]

    await execCommand('firebase use --clear', {}, cliParams)
    await execCommand(`firebase use ${ argv.project }`, {}, cliParams)
    await execCommand('firebase deploy', {}, cliParams)
  } catch (err) {
    console.error('Error on firebase deploy', err)
    throw (err)
  }
}

deploy()