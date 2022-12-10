import type { Page } from '@/views/types/types'

import { Fragment } from 'preact'
import { Head, usePage, useForm, Link, router } from '@jrson83/inertia-preact'
import { Layout } from '@/views/layouts/layout'
import { FileInput } from '@/views/components/fileinput'
import { TextInput } from '@/views/components/textinput'
import { SelectInput } from '@/views/components/selectinput'
import { LoadingButton } from '@/views/components/loadingbutton'
import { TrashedMessage } from '@/views/components/trashedmessage'

const Edit = () => {
  const { user } = usePage<InteriaPage>().props

  const { data, setData, errors, post, processing } = useForm({
    _method: 'PUT',
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    email: user.email || '',
    password: user.password || '',
    owner: user.owner ? '1' : '0' || '0',
    photo: '',
  })

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    post(`/users/${user.id}`)
  }

  const handleDestroy = () => {
    if (confirm('Are you sure you want to delete this user?')) {
      router.delete(`/users/${user.id}`)
    }
  }

  const handleRestore = () => {
    if (confirm('Are you sure you want to restore this user?')) {
      router.put(`/users/${user.id}/restore`)
    }
  }

  return (
    <Fragment>
      <Head title={`${data.first_name} ${data.last_name}`} />
      <div className="flex justify-start mb-8 max-w-3xl">
        <h1 className="text-3xl font-bold">
          <Link className="text-indigo-400 hover:text-indigo-600" href="/users">
            Users
          </Link>
          <span className="text-indigo-400 font-medium"> / </span>
          {data.first_name} {data.last_name}
        </h1>
        {user.photo && (
          <img className="block ml-4 w-8 h-8 rounded-full" src={user.photo} />
        )}
      </div>
      {user.deleted_at && (
        <TrashedMessage onRestore={handleRestore}>
          This user has been deleted.
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
              errors={errors.password}
              value={data.password}
              autocomplete="new-password"
              onChange={(e: Event) =>
                setData('password', (e.target as HTMLInputElement).value)
              }
            />
            <SelectInput
              className="pb-8 pr-6 w-full lg:w-1/2"
              label="Owner"
              name="owner"
              errors={errors.owner}
              onChange={(e: Event) =>
                setData('owner', (e.target as HTMLInputElement).value)
              }
            >
              <option value="1" {...(data.owner === '1' && { selected: true })}>
                Yes
              </option>
              <option value="0" {...(data.owner === '0' && { selected: true })}>
                No
              </option>
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
          <div className="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
            {!user.deleted_at && (
              <button
                className="text-red-600 hover:underline"
                tabIndex={-1}
                type="button"
                onClick={handleDestroy}
              >
                Delete User
              </button>
            )}
            <LoadingButton
              loading={processing}
              className="btn-indigo ml-auto"
              type="submit"
            >
              Update User
            </LoadingButton>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

Edit.layout = (page: Page) => <Layout children={page} />

export default Edit
