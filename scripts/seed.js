#!/usr/bin/env node
import { spawn } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const scriptPath = path.join(__dirname, 'seed.mjs')

const nodeArgs = ['--no-deprecation', scriptPath]

const child = spawn(process.execPath, nodeArgs, { stdio: 'inherit' })

child.on('exit', (code) => process.exit(code))
child.on('error', (err) => {
  console.error('Failed to run seed script:', err)
  process.exit(1)
})
