import { Fragment } from 'preact'
import { Head } from '@jrson83/inertia-preact'

export default function ErrorPage({ status }) {
  const title = {
    503: '503: Service Unavailable',
    500: '500: Server Error',
    404: '404: Page Not Found',
    403: '403: Forbidden'
  }[status]

  const description = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.'
  }[status]

  return (
    <Fragment>
      <Head>
        <title>{title} - Ping CRM</title>
      </Head>

      <section class="body-font text-gray-600">
        <div class="flex flex-col items-center justify-center h-screen">
          <h1 class="title-font mb-4 text-gray-900 text-3xl font-medium sm:text-4xl">{title}</h1>
          <p class="mb-8 leading-relaxed">{description}</p>
          <a href="/" class="btn-indigo">
            Return Home
          </a>
        </div>
      </section>
    </Fragment>
  )
}
