import { Head, useForm, Link } from '@jrson83/inertia-preact'
import Layout from '@/Shared/Layout'
import FileInput from '@/Shared/FileInput'
import TextInput from '@/Shared/TextInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    owner: '0',
    photo: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    post('/users')
  }

  const handleChange = e => {
    const key = e.target.getAttribute('name')
    setData(key, e.target.value)
  }

  return (
    <div>
      <Head title="Create User" />
      <h1 class="mb-8 text-3xl font-bold">
        <Link class="text-indigo-400 hover:text-indigo-600" href="/users">
          Users
        </Link>
        <span class="text-indigo-400 font-medium"> / </span> Create
      </h1>
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
              type="password"
              autocomplete="new-password"
              error={errors.password}
              value={data.password}
              onChange={handleChange}
            />
            <SelectInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Owner"
              name="owner"
              error={errors.owner}
              value={data.owner}
              onChange={handleChange}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </SelectInput>
            <FileInput
              class="pb-8 pr-6 w-full lg:w-1/2"
              label="Photo"
              name="photo"
              error={errors.photo}
              value={data.photo}
              type="file"
              accept="image/*"
              onChange={photo => setData('photo', photo)}
            />
          </div>
          <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
            <LoadingButton loading={processing} class="btn-indigo" type="submit">
              Create User
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  )
}

Create.layout = page => <Layout children={page} />

export default Create
