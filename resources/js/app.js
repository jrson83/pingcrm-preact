import { render } from 'preact'
import { createInertiaApp } from '@jrson83/inertia-preact'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

createInertiaApp({
  resolve: name => import(`./Pages/${name}`),
  title: title => `${title} - Ping CRM`,
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  }
})
