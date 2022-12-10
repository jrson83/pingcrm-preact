import type { Page } from '@/views/types/types'

import { Fragment } from 'preact'
import { Head, useForm, Link } from '@jrson83/inertia-preact'
import { Layout } from '@/views/layouts/layout'
import { FileInput } from '@/views/components/fileinput'
import { TextInput } from '@/views/components/textinput'
import { SelectInput } from '@/views/components/selectinput'
import { LoadingButton } from '@/views/components/loadingbutton'

export type FileEventTarget = EventTarget & { files: FileList }

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    owner: '0',
    photo: '',
  })

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    post('/users')
  }

  return (
    <Fragment>
      <Head title="Create User" />
      <h1 className="mb-8 text-3xl font-bold">
        <Link className="text-indigo-400 hover:text-indigo-600" href="/users">
          Users
        </Link>
        <span className="text-indigo-400 font-medium"> / </span> Create
      </h1>
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
              label="Password"
              name="password"
              type="password"
              autocomplete="new-password"
              errors={errors.password}
              value={data.password}
              onChange={(e: Event) =>
                setData('password', (e.target as HTMLInputElement).value)
              }
            />
            <SelectInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Owner"
              name="owner"
              errors={errors.owner}
              value={data.owner}
              onChange={(e: Event) =>
                setData('owner', (e.target as HTMLInputElement).value)
              }
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </SelectInput>
            <FileInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Photo"
              name="photo"
              errors={errors.photo}
              value={data.photo}
              accept="image/*"
              onInput={(photo) => setData('photo', photo)}
            />
          </div>
          <div className="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
            <LoadingButton
              loading={processing}
              className="btn-indigo"
              type="submit"
            >
              Create User
            </LoadingButton>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

Create.layout = (page: Page) => <Layout children={page} />

export default Create
