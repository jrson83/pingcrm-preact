import { Head, usePage, useForm, Link } from '@jrson83/inertia-preact'
import { Inertia } from '@inertiajs/inertia'
import Layout from '@/Shared/Layout'
import FileInput from '@/Shared/FileInput'
import TextInput from '@/Shared/TextInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'
import TrashedMessage from '@/Shared/TrashedMessage'

const Edit = () => {
  const { user } = usePage().props
  const { data, setData, errors, post, processing } = useForm({
    _method: 'PUT',
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    email: user.email || '',
    password: user.password || '',
    owner: user.owner ? '1' : '0' || '0',
    photo: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    post(`/users/${user.id}`)
  }

  const handleDestroy = () => {
    if (confirm('Are you sure you want to delete this user?')) {
      Inertia.delete(`/users/${user.id}`)
    }
  }

  const handleRestore = () => {
    if (confirm('Are you sure you want to restore this user?')) {
      Inertia.put(`/users/${user.id}/restore`)
    }
  }

  const handleChange = e => {
    const key = e.target.getAttribute('name')
    setData(key, e.target.value)
  }

  return (
    <div>
      <Head title={`${data.first_name} ${data.last_name}`} />
      <div class="flex justify-start mb-8 max-w-3xl">
        <h1 class="text-3xl font-bold">
          <Link class="text-indigo-400 hover:text-indigo-600" href="/users">
            Users
          </Link>
          <span class="text-indigo-400 font-medium"> / </span>
          {data.first_name} {data.last_name}
        </h1>
        {user.photo && <img class="block ml-4 w-8 h-8 rounded-full" src={user.photo} />}
      </div>
      {user.deleted_at && <TrashedMessage onRestore={handleRestore}>This user has been deleted.</TrashedMessage>}
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
              label="Password"
              name="password"
              error={errors.password}
              value={data.password}
              type="password"
              autocomplete="new-password"
              onChange={handleChange}
            />
            <SelectInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Owner"
              name="owner"
              error={errors.owner}
              onChange={handleChange}
            >
              <option value="1" {...(data.owner === '1' && { selected: true })}>
                Yes
              </option>
              <option value="0" {...(data.owner === '0' && { selected: true })}>
                No
              </option>
            </SelectInput>
            <FileInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Photo"
              name="photo"
              accept="image/*"
              error={errors.photo}
              value={data.photo}
              onChange={photo => setData('photo', photo)}
            />
          </div>
          <div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
            {!user.deleted_at && (
              <button class="text-red-600 hover:underline" tabindex="-1" type="button" onClick={handleDestroy}>
                Delete User
              </button>
            )}
            <LoadingButton loading={processing} class="btn-indigo ml-auto" type="submit">
              Update User
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  )
}

Edit.layout = page => <Layout children={page} />

export default Edit
