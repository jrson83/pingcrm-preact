import { Fragment } from 'preact'
import { Head, Link } from '@jrson83/inertia-preact'
import Layout from '@/Shared/Layout'

const Dashboard = () => {
  return (
    <Fragment>
      <Head title="Dashboard" />
      <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>
      <p class="mb-8 leading-normal">
        Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how{' '}
        <a class="text-indigo-500 hover:text-orange-600 underline" href="https://inertiajs.com">
          Inertia.js{' '}
        </a>{' '}
        works with{' '}
        <a href="https://preactjs.com/" target="_blank" rel="noopener">
          Preact
        </a>
        .
      </p>
      <div class="flex mb-8">
        <Link className="btn-indigo mr-1" href="/500">
          500 error
        </Link>
        <Link className="btn-indigo" href="/404">
          404 error
        </Link>
      </div>
      <p class="leading-normal">
        👆 These links are intended to be broken to illustrate how error handling works with Inertia.js.
      </p>
    </Fragment>
  )
}

Dashboard.layout = page => <Layout children={page} />

export default Dashboard
