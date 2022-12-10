import { createInertiaApp, PreactComponent } from '@jrson83/inertia-preact'
import { render } from 'preact'
/* import { setupProgress } from '@inertiajs/core' */
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

/* setupProgress() */

import '../css/app.css'

createInertiaApp({
  progress: false,
  resolve: (name) =>
    resolvePageComponent(
      `../views/pages/${name}.tsx`,
      import.meta.glob<PreactComponent>('../views/pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
