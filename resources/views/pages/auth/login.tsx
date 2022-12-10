import { Head, useForm } from '@jrson83/inertia-preact'
import { Logo } from '@/views/components/logo'
import { LoadingButton } from '@/views/components/loadingbutton'
import { TextInput } from '@/views/components/textinput'

const Login = () => {
  const { data, setData, errors, post, processing } = useForm({
    email: 'johndoe@example.com',
    password: 'secret',
    remember: false,
  })

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    post('/login')
  }

  return (
    <div className="flex items-center justify-center p-6 min-h-screen bg-indigo-800">
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
      </Head>
      <div className="w-full max-w-md">
        <Logo
          className="block mx-auto w-full max-w-xs fill-white"
          height="50"
        />
        <form
          className="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="px-10 py-12">
            <h1 className="text-center text-3xl font-bold">Welcome Back!</h1>
            <div className="mt-6 mx-auto w-24 border-b-2" />
            <TextInput
              className="mt-10"
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
              className="mt-6"
              label="Password"
              name="password"
              type="password"
              errors={errors.password}
              value={data.password}
              onChange={(e: Event) =>
                setData('password', (e.target as HTMLInputElement).value)
              }
            />
            <label
              className="flex items-center mt-6 select-none"
              htmlFor="remember"
            >
              <input
                name="remember"
                id="remember"
                className="mr-1"
                type="checkbox"
                checked={data.remember}
                onChange={(e: Event) =>
                  setData('remember', (e.target as HTMLInputElement).checked)
                }
              />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>
          <div className="flex px-10 py-4 bg-gray-100 border-t border-gray-100">
            <LoadingButton
              type="submit"
              loading={processing}
              className="btn-indigo ml-auto"
            >
              Login
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
