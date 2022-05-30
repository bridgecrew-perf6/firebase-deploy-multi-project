#!/usr/bin/env node
 
const { execCommand } = require('dots-env')
const yargs = require('yargs')

const { argv } = yargs.usage('Usage: $0 <command> [options]').options({
  alias: {
    default: '',
    describe: 'Project alias',
    nargs: 1
  },
  only: {
    default: '',
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
      { param: '--alias', hasValue: true },
      { param: '--only', hasValue: true },
      { param: '--token', hasValue: true }
    ]

    if (argv.alias) {
      await execCommand('firebase use --clear', {}, cliParams)
      await execCommand(`firebase use ${ argv.alias }`, {}, cliParams)
    }

    await execCommand('firebase deploy')
  } catch (err) {
    console.error('Error on firebase deploy', err)
    throw (err)
  }
}

deploy()
