import { Head } from '@jrson83/inertia-preact'
import Layout from '@/Shared/Layout'

const Index = () => {
  return (
    <div>
      <Head title="Reports" />
      <h1 class="mb-8 text-3xl font-bold">Reports</h1>
    </div>
  )
}

Index.layout = page => <Layout children={page} />

export default Index
