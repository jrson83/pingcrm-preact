import { createInertiaApp } from '@jrson83/inertia-preact'
import createServer from '@jrson83/inertia-preact/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import renderToString from 'preact-render-to-string'

const appName = import.meta.env.VITE_APP_NAME

createServer((page) =>
  createInertiaApp({
    page,
    title: (title) => `${title} - ${appName}`,
    render: renderToString,
    resolve: (name) =>
      resolvePageComponent(
        `../views/pages/${name}.tsx`,
        import.meta.glob('../views/pages/**/*.tsx'),
      ),
    setup: ({ App, props }) => <App {...props} />,
  }),
)
