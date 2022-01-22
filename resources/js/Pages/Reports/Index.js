import { Fragment } from 'preact'
import { Head } from '@jrson83/inertia-preact'
import Layout from '@/Shared/Layout'

const Index = () => {
  return (
    <Fragment>
      <Head title="Reports" />
      <h1 class="mb-8 text-3xl font-bold">Reports</h1>
    </Fragment>
  )
}

Index.layout = page => <Layout children={page} />

export default Index
