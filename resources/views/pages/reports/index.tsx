import type { Page } from '@/views/types/types'

import { Fragment } from 'preact'
import { Head } from '@jrson83/inertia-preact'
import { Layout } from '@/views/layouts/layout'

const Reports = () => {
  return (
    <Fragment>
      <Head title="Reports" />
      <h1 class="mb-8 text-3xl font-bold">Reports</h1>
    </Fragment>
  )
}

Reports.layout = (page: Page) => <Layout children={page} />

export default Reports
