import { Head, usePage, useForm, Link } from '@jrson83/inertia-preact'
import { Inertia } from '@inertiajs/inertia'
import Layout from '@/Shared/Layout'
import Icon from '@/Shared/Icon'
import TextInput from '@/Shared/TextInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'
import TrashedMessage from '@/Shared/TrashedMessage'

const Edit = () => {
  const { organization } = usePage().props
  const { data, setData, errors, put, processing } = useForm({
    name: organization.name || '',
    email: organization.email || '',
    phone: organization.phone || '',
    address: organization.address || '',
    city: organization.city || '',
    region: organization.region || '',
    country: organization.country || '',
    postal_code: organization.postal_code || ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    put(`/organizations/${organization.id}`)
  }

  const handleDestroy = () => {
    if (confirm('Are you sure you want to delete this organization?')) {
      Inertia.delete(`/organizations/${organization.id}`)
    }
  }

  const handleRestore = () => {
    if (confirm('Are you sure you want to restore this organization?')) {
      Inertia.put(`/organizations/${organization.id}/restore`)
    }
  }

  const handleChange = e => {
    const key = e.target.getAttribute('name')
    setData(key, e.target.value)
  }

  return (
    <div>
      <Head title={`${data.name}`} />
      <h1 class="mb-8 text-3xl font-bold">
        <Link class="text-indigo-400 hover:text-indigo-600" href="/organizations">
          Organizations
        </Link>
        <span class="text-indigo-400 font-medium"> / </span>
        {data.name}
      </h1>
      {organization.deleted_at && (
        <TrashedMessage class="mb-6" onRestore={handleRestore}>
          This organization has been deleted.
        </TrashedMessage>
      )}
      <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div class="flex flex-wrap -mb-8 -mr-6 p-8">
            <TextInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Name"
              name="name"
              error={errors.name}
              value={data.name}
              onChange={handleChange}
            />
            <TextInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Email"
              name="email"
              error={errors.email}
              value={data.email}
              onChange={handleChange}
            />
            <TextInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Phone"
              name="phone"
              error={errors.phone}
              value={data.phone}
              onChange={handleChange}
            />
            <TextInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Address"
              name="address"
              error={errors.address}
              value={data.address}
              onChange={handleChange}
            />
            <TextInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="City"
              name="city"
              error={errors.city}
              value={data.city}
              onChange={handleChange}
            />
            <TextInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Province/State"
              name="region"
              error={errors.region}
              value={data.region}
              onChange={handleChange}
            />
            <SelectInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Country"
              name="country"
              error={errors.country}
              value={data.country}
              onChange={handleChange}
            >
              <option value="" />
              <option value="CA">Canada</option>
              <option value="US">United States</option>
            </SelectInput>
            <TextInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Postal code"
              name="postal_code"
              error={errors.postal_code}
              value={data.postal_code}
              onChange={handleChange}
            />
          </div>
          <div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
            {!organization.deleted_at && (
              <button class="text-red-600 hover:underline" tabindex="-1" type="button" onClick={handleDestroy}>
                Delete Organization
              </button>
            )}
            <LoadingButton loading={processing} class="btn-indigo ml-auto" type="submit">
              Update Organization
            </LoadingButton>
          </div>
        </form>
      </div>
      <h2 class="mt-12 text-2xl font-bold">Contacts</h2>
      <div class="mt-6 bg-white rounded shadow overflow-x-auto">
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
            {organization.contacts.map(({ id, name, phone, city, deleted_at }) => (
              <tr key={id} class="hover:bg-gray-100 focus-within:bg-gray-100">
                <td class="border-t">
                  <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href={`/contacts/${id}/edit`}>
                    {name}
                    {deleted_at && <Icon name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />}
                  </Link>
                </td>
                <td class="border-t">
                  <Link class="flex items-center px-6 py-4" href={`/contacts/${id}/edit`} tabindex="-1">
                    {city}
                  </Link>
                </td>
                <td class="border-t">
                  <Link class="flex items-center px-6 py-4" href={`/contacts/${id}/edit`} tabindex="-1">
                    {phone}
                  </Link>
                </td>
                <td class="w-px border-t">
                  <Link class="flex items-center px-4" href={`/contacts/${id}/edit`} tabindex="-1">
                    <Icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
                  </Link>
                </td>
              </tr>
            ))}
            {organization.contacts.length === 0 && (
              <tr>
                <td class="px-6 py-4 border-t" colspan="4">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

Edit.layout = page => <Layout children={page} />

export default Edit
