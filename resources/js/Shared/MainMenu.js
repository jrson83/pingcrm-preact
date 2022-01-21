import { usePage, Link } from '@jrson83/inertia-preact'
import Icon from './Icon'

export default props => {
  const { url } = usePage()
  const { closeMenu } = props

  function isUrl(...urls) {
    let currentUrl = url.substr(1)
    if (urls[0] === '') {
      return currentUrl === ''
    }
    return urls.filter(url => currentUrl.startsWith(url)).length
  }

  return (
    <div {...props}>
      <div class="mb-4">
        <Link class="group flex items-center py-3" href="/" {...(closeMenu && { onClick: closeMenu })}>
          <Icon
            name="dashboard"
            class={`mr-2 w-4 h-4 ${url === '/' ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'}`}
          />
          <div class={url === '/' ? 'text-white' : 'text-indigo-300 group-hover:text-white'}>Dashboard</div>
        </Link>
      </div>
      <div class="mb-4">
        <Link class="group flex items-center py-3" href="/organizations" {...(closeMenu && { onClick: closeMenu })}>
          <Icon
            name="office"
            class={`mr-2 w-4 h-4 ${isUrl('organizations') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'}`}
          />
          <div class={isUrl('organizations') ? 'text-white' : 'text-indigo-300 group-hover:text-white'}>
            Organizations
          </div>
        </Link>
      </div>
      <div class="mb-4">
        <Link class="group flex items-center py-3" href="/contacts" {...(closeMenu && { onClick: closeMenu })}>
          <Icon
            name="users"
            class={`mr-2 w-4 h-4 ${isUrl('contacts') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'}`}
          />
          <div class={isUrl('contacts') ? 'text-white' : 'text-indigo-300 group-hover:text-white'}>Contacts</div>
        </Link>
      </div>
      <div class="mb-4">
        <Link class="group flex items-center py-3" href="/reports" {...(closeMenu && { onClick: closeMenu })}>
          <Icon
            name="printer"
            class={`mr-2 w-4 h-4 ${isUrl('reports') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'}`}
          />
          <div class={isUrl('reports') ? 'text-white' : 'text-indigo-300 group-hover:text-white'}>Reports</div>
        </Link>
      </div>
    </div>
  )
}
