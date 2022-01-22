import { Fragment } from 'preact'
import { Head, useForm, Link } from '@jrson83/inertia-preact'
import Layout from '@/Shared/Layout'
import TextInput from '@/Shared/TextInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    country: '',
    postal_code: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    post('/organizations')
  }

  const handleChange = e => {
    const key = e.target.getAttribute('name')
    setData(key, e.target.value)
  }

  return (
    <Fragment>
      <Head title="Create Organization" />
      <h1 class="mb-8 text-3xl font-bold">
        <Link class="text-indigo-400 hover:text-indigo-600" href="/organizations">
          Organizations
        </Link>
        <span class="text-indigo-400 font-medium"> / </span> Create
      </h1>
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
              <option value=""></option>
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
          <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
            <LoadingButton loading={processing} class="btn-indigo" type="submit">
              Create Organization
            </LoadingButton>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

Create.layout = page => <Layout children={page} />

export default Create
