import React from 'react'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import BugsnagPerformance from '@bugsnag/browser-performance'

// Initialize Bugsnag
Bugsnag.start({
  apiKey: '46971166bf59d5d9488584d64184c6ca',
  plugins: [new BugsnagPluginReact()]
})

// Initialize Bugsnag Performance
BugsnagPerformance.start({ apiKey: '46971166bf59d5d9488584d64184c6ca' })

// Create Error Boundary
const ErrorBoundary = Bugsnag.getPlugin('react')
  .createErrorBoundary(React)

export default ErrorBoundary
