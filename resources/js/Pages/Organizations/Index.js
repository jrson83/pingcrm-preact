import { Fragment } from 'preact'
import { Head, usePage, Link } from '@jrson83/inertia-preact'
import Layout from '@/Shared/Layout'
import Icon from '@/Shared/Icon'
import Pagination from '@/Shared/Pagination'
import SearchFilter from '@/Shared/SearchFilter'

const Index = () => {
  const { organizations } = usePage().props
  const { data } = organizations

  return (
    <Fragment>
      <Head title="Organizations" />
      <h1 class="mb-8 text-3xl font-bold">Organizations</h1>
      <div class="flex items-center justify-between mb-6">
        <SearchFilter class="mr-4 w-full max-w-md" />
        <Link class="btn-indigo" href="/organizations/create">
          <span>Create</span>
          <span class="hidden md:inline">&nbsp;Organization</span>
        </Link>
      </div>
      <div class="bg-white rounded-md shadow overflow-x-auto">
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr class="text-left font-bold">
              <th class="pb-4 pt-6 px-6">Name</th>
              <th class="pb-4 pt-6 px-6">City</th>
              <th class="pb-4 pt-6 px-6" colspan="2">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, phone, city, deleted_at }) => (
              <tr key={id} class="hover:bg-gray-100 focus-within:bg-gray-100">
                <td class="border-t">
                  <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href={`/organizations/${id}/edit`}>
                    {name}
                    {deleted_at && <Icon name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />}
                  </Link>
                </td>
                <td class="border-t">
                  <Link class="flex items-center px-6 py-4" href={`/organizations/${id}/edit`} tabindex="-1">
                    {city}
                  </Link>
                </td>
                <td class="border-t">
                  <Link class="flex items-center px-6 py-4" href={`/organizations/${id}/edit`} tabindex="-1">
                    {phone}
                  </Link>
                </td>
                <td class="w-px border-t">
                  <Link class="flex items-center px-4" href={`/organizations/${id}/edit`} tabindex="-1">
                    <Icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
                  </Link>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td class="px-6 py-4 border-t" colspan="4">
                  No organizations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination class="mt-6" links={organizations.links} />
    </Fragment>
  )
}

Index.layout = page => <Layout children={page} />

export default Index
