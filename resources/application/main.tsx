import { createInertiaApp, PreactComponent } from '@jrson83/inertia-preact'
import { render } from 'preact'
/* import { setupProgress } from '@inertiajs/core' */
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

/* setupProgress() */

import '../css/app.css'

const appName = import.meta.env.VITE_APP_NAME

createInertiaApp({
  progress: false,
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `../views/pages/${name}.tsx`,
      import.meta.glob<PreactComponent>('../views/pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
