import { Head, useForm } from '@jrson83/inertia-preact'
import Logo from '@/Shared/Logo'
import LoadingButton from '@/Shared/LoadingButton'
import TextInput from '@/Shared/TextInput'

export default () => {
  const { data, setData, errors, post, processing } = useForm({
    email: 'johndoe@example.com',
    password: 'secret',
    remember: false
  })

  const handleSubmit = e => {
    e.preventDefault()
    post('/login')
  }

  return (
    <div class="flex items-center justify-center p-6 min-h-screen bg-indigo-800">
      <Head title="Login">
        <meta name="title" content="Login - Ping CRM" />
        <meta
          name="description"
          content="A demo application to illustrate how Inertia.js works with Laravel and Preact."
        />
        <meta
          name="keywords"
          content="laravel, inertia, inertiajs, inertia.js, preact, preactjs, adapter, pingcrm, pingcrm-preact"
        />
        <meta name="robots" content="index, nofollow" />
        <meta name="referrer" content="no-referrer" />
      </Head>
      <div class="w-full max-w-md">
        <Logo class="block mx-auto w-full max-w-xs fill-white" height="50" />
        <form class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden" onSubmit={handleSubmit}>
          <div class="px-10 py-12">
            <h1 class="text-center text-3xl font-bold">Welcome Back!</h1>
            <div class="mt-6 mx-auto w-24 border-b-2" />
            <TextInput
              class="mt-10"
              label="Email"
              name="email"
              type="email"
              errors={errors.email}
              value={data.email}
              onChange={e => setData('email', e.target.value)}
            />
            <TextInput
              class="mt-6"
              label="Password"
              name="password"
              type="password"
              errors={errors.password}
              value={data.password}
              onChange={e => setData('password', e.target.value)}
            />
            <label class="flex items-center mt-6 select-none" htmlFor="remember">
              <input
                name="remember"
                id="remember"
                class="mr-1"
                type="checkbox"
                checked={data.remember}
                onChange={e => setData('remember', e.target.checked)}
              />
              <span class="text-sm">Remember Me</span>
            </label>
          </div>
          <div class="flex px-10 py-4 bg-gray-100 border-t border-gray-100">
            <LoadingButton type="submit" loading={processing} class="btn-indigo ml-auto">
              Login
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  )
}
