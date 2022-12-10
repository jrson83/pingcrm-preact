import type { Page } from '@/views/types/types'

import { Fragment } from 'preact'
import { Head, useForm, Link } from '@jrson83/inertia-preact'
import { Layout } from '@/views/layouts/layout'
import { TextInput } from '@/views/components/textinput'
import { SelectInput } from '@/views/components/selectinput'
import { LoadingButton } from '@/views/components/loadingbutton'

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    country: '',
    postal_code: '',
  })

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    post('/organizations')
  }

  return (
    <Fragment>
      <Head title="Create Organization" />
      <h1 className="mb-8 text-3xl font-bold">
        <Link
          className="text-indigo-400 hover:text-indigo-600"
          href="/organizations"
        >
          Organizations
        </Link>
        <span className="text-indigo-400 font-medium"> / </span> Create
      </h1>
      <div className="max-w-3xl bg-white rounded-md shadow overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mb-8 -mr-6 p-8">
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Name"
              name="name"
              errors={errors.name}
              value={data.name}
              type="text"
              onChange={(e: Event) =>
                setData('name', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Email"
              name="email"
              errors={errors.email}
              value={data.email}
              type="email"
              onChange={(e: Event) =>
                setData('email', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Phone"
              name="phone"
              errors={errors.phone}
              value={data.phone}
              type="text"
              onChange={(e: Event) =>
                setData('phone', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Address"
              name="address"
              errors={errors.address}
              value={data.address}
              type="text"
              onChange={(e: Event) =>
                setData('address', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="City"
              name="city"
              errors={errors.city}
              value={data.city}
              type="text"
              onChange={(e: Event) =>
                setData('city', (e.target as HTMLInputElement).value)
              }
            />
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Province/State"
              name="region"
              errors={errors.region}
              value={data.region}
              type="text"
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
              <option value=""></option>
              <option value="CA">Canada</option>
              <option value="US">United States</option>
            </SelectInput>
            <TextInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Postal code"
              name="postal_code"
              errors={errors.postal_code}
              value={data.postal_code}
              type="text"
              onChange={(e: Event) =>
                setData('postal_code', (e.target as HTMLInputElement).value)
              }
            />
          </div>
          <div className="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
            <LoadingButton
              loading={processing}
              className="btn-indigo"
              type="submit"
            >
              Create Organization
            </LoadingButton>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

Create.layout = (page: Page) => <Layout children={page} />

export default Create
