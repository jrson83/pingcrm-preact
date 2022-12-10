import type { Page } from '@/views/types/types'

import { Fragment } from 'preact'
import { Head, usePage, useForm, Link, router } from '@jrson83/inertia-preact'
import { Layout } from '@/views/layouts/layout'
import { TextInput } from '@/views/components/textinput'
import { SelectInput } from '@/views/components/selectinput'
import { LoadingButton } from '@/views/components/loadingbutton'
import { TrashedMessage } from '@/views/components/trashedmessage'

const Edit = () => {
  const { contact, organizations } = usePage<InteriaPage>().props

  const { data, setData, errors, put, processing } = useForm({
    first_name: contact.first_name || '',
    last_name: contact.last_name || '',
    organization_id: contact.organization_id || '',
    email: contact.email || '',
    phone: contact.phone || '',
    address: contact.address || '',
    city: contact.city || '',
    region: contact.region || '',
    country: contact.country || '',
    postal_code: contact.postal_code || '',
  })

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    put(`/contacts/${contact.id}`)
  }

  const handleDestroy = () => {
    if (confirm('Are you sure you want to delete this contact?')) {
      router.delete(`/contacts/${contact.id}`)
    }
  }

  const handleRestore = () => {
    if (confirm('Are you sure you want to restore this contact?')) {
      router.put(`/contacts/${contact.id}/restore`)
    }
  }

  return (
    <Fragment>
      <Head title={`${data.first_name} ${data.last_name}`} />
      <h1 className="mb-8 text-3xl font-bold">
        <Link
          className="text-indigo-400 hover:text-indigo-600"
          href="/contacts"
        >
          Contacts
        </Link>
        <span className="text-indigo-400 font-medium"> / </span>
        {data.first_name} {data.last_name}
      </h1>
      {contact.deleted_at && (
        <TrashedMessage className="mb-6" onRestore={handleRestore}>
          This contact has been deleted.
        </TrashedMessage>
      )}
      <div className="max-w-3xl bg-white rounded-md shadow overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mb-8 -mr-6 p-8">
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="First name"
              name="first_name"
              type="text"
              errors={errors.first_name}
              value={data.first_name}
              onChange={(e: Event) =>
                setData('first_name', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Last name"
              name="last_name"
              type="text"
              errors={errors.last_name}
              value={data.last_name}
              onChange={(e: Event) =>
                setData('last_name', (e.target as HTMLInputElement).value)
              }
            />
            <SelectInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Organization"
              name="organization_id"
              errors={errors.organization_id}
              value={data.organization_id}
              onChange={(e: Event) =>
                setData('organization_id', (e.target as HTMLInputElement).value)
              }
            >
              <option value="null" />
              {Array.isArray(organizations) &&
                organizations.map(({ id, name }) => (
                  <option
                    key={id}
                    value={id}
                    selected={data.organization_id === id}
                  >
                    {name}
                  </option>
                ))}
            </SelectInput>
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
              <option value="null" />
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
            {!contact.deleted_at && (
              <button
                className="text-red-600 hover:underline"
                tabIndex={-1}
                type="button"
                onClick={handleDestroy}
              >
                Delete Contact
              </button>
            )}
            <LoadingButton
              loading={processing}
              className="btn-indigo ml-auto"
              type="submit"
            >
              Update Contact
            </LoadingButton>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

Edit.layout = (page: Page) => <Layout children={page} />

export default Edit
