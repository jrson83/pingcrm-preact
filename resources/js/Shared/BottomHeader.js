import { useState, useRef, useEffect } from 'preact/hooks'
import { Link, usePage } from '@jrson83/inertia-preact'
import Icon from '@/Shared/Icon'

export default () => {
  const { auth } = usePage().props
  const [menuOpened, setMenuOpened] = useState(false)
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) {
      if (menuOpened) document.addEventListener('keydown', onKeyDown, false)
      return () => document.removeEventListener('keydown', onKeyDown, false)
    } else {
      didMount.current = true
    }
  }, [menuOpened])

  const onKeyDown = e => {
    if (e.key === 'Escape' || e.key === 'Esc') setMenuOpened(false)
  }

  return (
    <div class="d:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0">
      <div class="mr-4 mt-1">{auth.user.account.name}</div>
      <div class="relative">
        <div class="group flex items-center cursor-pointer select-none" onClick={() => setMenuOpened(true)}>
          <div class="mr-1 text-gray-800 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap">
            <span>{auth.user.first_name}</span>
            <span class="hidden ml-1 md:inline">{auth.user.last_name}</span>
          </div>
          <Icon
            class="w-5 h-5 text-gray-800 group-hover:text-indigo-600 focus:text-indigo-600 fill-current"
            name="cheveron-down"
          />
        </div>
        <div class={menuOpened ? '' : 'hidden'}>
          <div class="absolute z-20 left-auto right-0 top-0 mt-8 py-2 whitespace-nowrap text-sm bg-white rounded shadow-xl">
            <Link
              href={`/users/${auth.user.id}/edit`}
              class="block px-6 py-2 hover:text-white hover:bg-indigo-600"
              onClick={() => setMenuOpened(false)}
            >
              My Profile
            </Link>
            <Link
              href="/users"
              class="block px-6 py-2 hover:text-white hover:bg-indigo-600"
              onClick={() => setMenuOpened(false)}
            >
              Manage Users
            </Link>
            <Link
              as="button"
              href="/logout"
              class="block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-600 focus:outline-none"
              method="delete"
            >
              Logout
            </Link>
          </div>
          <div
            onClick={() => {
              setMenuOpened(false)
            }}
            class="fixed z-10 inset-0 bg-black opacity-25"
          ></div>
        </div>
      </div>
    </div>
  )
}
