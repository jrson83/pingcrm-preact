import { Head, usePage, useForm, Link } from '@jrson83/inertia-preact'
import { Inertia } from '@inertiajs/inertia'
import Layout from '@/Shared/Layout'
import TextInput from '@/Shared/TextInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'
import TrashedMessage from '@/Shared/TrashedMessage'

const Edit = () => {
  const { contact, organizations } = usePage().props
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
    postal_code: contact.postal_code || ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    put(`/contacts/${contact.id}`)
  }

  const handleDestroy = () => {
    if (confirm('Are you sure you want to delete this contact?')) {
      Inertia.delete(`/contacts/${contact.id}`)
    }
  }

  const handleRestore = () => {
    if (confirm('Are you sure you want to restore this contact?')) {
      Inertia.put(`/contacts/${contact.id}/restore`)
    }
  }

  const handleChange = e => {
    const key = e.target.getAttribute('name')
    setData(key, e.target.value)
  }

  return (
    <div>
      <Head title={`${data.first_name} ${data.last_name}`} />
      <h1 class="mb-8 text-3xl font-bold">
        <Link class="text-indigo-400 hover:text-indigo-600" href="/contacts">
          Contacts
        </Link>
        <span class="text-indigo-400 font-medium"> / </span>
        {data.first_name} {data.last_name}
      </h1>
      {contact.deleted_at && (
        <TrashedMessage class="mb-6" onRestore={handleRestore}>
          This contact has been deleted.
        </TrashedMessage>
      )}
      <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div class="flex flex-wrap -mb-8 -mr-6 p-8">
            <TextInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="First name"
              name="first_name"
              error={errors.first_name}
              value={data.first_name}
              onChange={handleChange}
            />
            <TextInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Last name"
              name="last_name"
              error={errors.last_name}
              value={data.last_name}
              onChange={handleChange}
            />
            <SelectInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Organization"
              name="organization_id"
              error={errors.organization_id}
              value={data.organization_id}
              onChange={handleChange}
            >
              <option value="null" />
              {organizations.map(({ id, name }) => (
                <option key={id} value={id} selected={data.organization_id === id}>
                  {name}
                </option>
              ))}
            </SelectInput>
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
              <option value="null" />
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
            {!contact.deleted_at && (
              <button class="text-red-600 hover:underline" tabindex="-1" type="button" onDelete={handleDestroy}>
                Delete Contact
              </button>
            )}
            <LoadingButton loading={processing} class="btn-indigo ml-auto" type="submit">
              Update Contact
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  )
}

Edit.layout = page => <Layout children={page} />

export default Edit
