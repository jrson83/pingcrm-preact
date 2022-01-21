import renderToString from 'preact-render-to-string'
import { createInertiaApp } from '@jrson83/inertia-preact'
import createServer from '@inertiajs/server'

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: name => require(`./Pages/${name}`),
    title: title => `${title} - Ping CRM`,
    setup: ({ App, props }) => <App {...props} />
  })
)
