import type { Page } from '@/views/types/types'

import { Fragment } from 'preact'
import { Head, usePage, useForm, Link, router } from '@jrson83/inertia-preact'
import { Layout } from '@/views/layouts/layout'
import { Icon } from '@/views/components/icon'
import { TextInput } from '@/views/components/textinput'
import { SelectInput } from '@/views/components/selectinput'
import { LoadingButton } from '@/views/components/loadingbutton'
import { TrashedMessage } from '@/views/components/trashedmessage'

const Edit = () => {
  const { organization } = usePage<InteriaPage>().props

  const { data, setData, errors, put, processing } = useForm({
    name: organization.name || '',
    email: organization.email || '',
    phone: organization.phone || '',
    address: organization.address || '',
    city: organization.city || '',
    region: organization.region || '',
    country: organization.country || '',
    postal_code: organization.postal_code || '',
  })

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    put(`/organizations/${organization.id}`)
  }

  const handleDestroy = () => {
    if (confirm('Are you sure you want to delete this organization?')) {
      router.delete(`/organizations/${organization.id}`)
    }
  }

  const handleRestore = () => {
    if (confirm('Are you sure you want to restore this organization?')) {
      router.put(`/organizations/${organization.id}/restore`)
    }
  }

  return (
    <Fragment>
      <Head title={`${data.name}`} />
      <h1 className="mb-8 text-3xl font-bold">
        <Link
          className="text-indigo-400 hover:text-indigo-600"
          href="/organizations"
        >
          Organizations
        </Link>
        <span className="text-indigo-400 font-medium"> / </span>
        {data.name}
      </h1>
      {organization.deleted_at && (
        <TrashedMessage className="mb-6" onRestore={handleRestore}>
          This organization has been deleted.
        </TrashedMessage>
      )}
      <div className="max-w-3xl bg-white rounded-md shadow overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mb-8 -mr-6 p-8">
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Name"
              name="name"
              type="text"
              errors={errors.name}
              value={data.name}
              onChange={(e: Event) =>
                setData('name', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Email"
              name="email"
              type="email"
              errors={errors.email}
              value={data.email}
              onChange={(e: Event) =>
                setData('email', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Phone"
              name="phone"
              type="text"
              errors={errors.phone}
              value={data.phone}
              onChange={(e: Event) =>
                setData('phone', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Address"
              name="address"
              type="text"
              errors={errors.address}
              value={data.address}
              onChange={(e: Event) =>
                setData('address', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="City"
              name="city"
              type="text"
              errors={errors.city}
              value={data.city}
              onChange={(e: Event) =>
                setData('city', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Province/State"
              name="region"
              type="text"
              errors={errors.region}
              value={data.region}
              onChange={(e: Event) =>
                setData('region', (e.target as HTMLInputElement).value)
              }
            />
            <SelectInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Country"
              name="country"
              errors={errors.country}
              value={data.country}
              onChange={(e: Event) =>
                setData('country', (e.target as HTMLInputElement).value)
              }
            >
              <option value="" />
              <option value="CA">Canada</option>
              <option value="US">United States</option>
            </SelectInput>
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Postal code"
              name="postal_code"
              type="text"
              errors={errors.postal_code}
              value={data.postal_code}
              onChange={(e: Event) =>
                setData('postal_code', (e.target as HTMLInputElement).value)
              }
            />
          </div>
          <div className="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
            {!organization.deleted_at && (
              <button
                className="text-red-600 hover:underline"
                tabIndex={-1}
                type="button"
                onClick={handleDestroy}
              >
                Delete Organization
              </button>
            )}
            <LoadingButton
              loading={processing}
              className="btn-indigo ml-auto"
              type="submit"
            >
              Update Organization
            </LoadingButton>
          </div>
        </form>
      </div>
      <h2 className="mt-12 text-2xl font-bold">Contacts</h2>
      <div className="mt-6 bg-white rounded shadow overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="text-left font-bold">
              <th className="pb-4 pt-6 px-6">Name</th>
              <th className="pb-4 pt-6 px-6">City</th>
              <th className="pb-4 pt-6 px-6" colSpan={2}>
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(organization.contacts) &&
              organization.contacts.map(
                ({ id, name, phone, city, deleted_at }) => (
                  <tr
                    key={id}
                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                  >
                    <td className="border-t">
                      <Link
                        className="flex items-center px-6 py-4 focus:text-indigo-500"
                        href={`/contacts/${id}/edit`}
                      >
                        {name}
                        {deleted_at && (
                          <Icon
                            name="trash"
                            className="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"
                          />
                        )}
                      </Link>
                    </td>
                    <td className="border-t">
                      <Link
                        className="flex items-center px-6 py-4"
                        href={`/contacts/${id}/edit`}
                        tabIndex={-1}
                      >
                        {city}
                      </Link>
                    </td>
                    <td className="border-t">
                      <Link
                        className="flex items-center px-6 py-4"
                        href={`/contacts/${id}/edit`}
                        tabIndex={-1}
                      >
                        {phone}
                      </Link>
                    </td>
                    <td className="w-px border-t">
                      <Link
                        className="flex items-center px-4"
                        href={`/contacts/${id}/edit`}
                        tabIndex={-1}
                      >
                        <Icon
                          name="cheveron-right"
                          className="block w-6 h-6 fill-gray-400"
                        />
                      </Link>
                    </td>
                  </tr>
                ),
              )}
            {Array.isArray(organization.contacts) &&
              organization.contacts.length === 0 && (
                <tr>
                  <td className="px-6 py-4 border-t" colSpan={4}>
                    No contacts found.
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

Edit.layout = (page: Page) => <Layout children={page} />

export default Edit
