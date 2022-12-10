import type { Page, PageProps, Errors, ErrorBag } from '@inertiajs/core'

declare global {
  type Filters = {
    role: string
    search: string
    trashed: string
  }

  type Link = {
    active: boolean
    label: string
    url: string | null
  }

  interface InteriaPage extends Page<PageProps> {
    props: {
      app: {
        name: string
        url: string
      }
      auth: {
        user: App.Models.User
      }
      errors: Errors & ErrorBag
      filters: Filters
      flash: {
        error: string | null
        success: string | null
      }
      contacts: {
        data: App.Models.Contacts[]
        links: Link[]
      }
      contact: App.Models.Contact
      organizations: {
        data: App.Models.Organization[]
        links: Link[]
      }
      organization: App.Models.Organization
      users: {
        data: App.Models.Users[]
        links: Link[]
      }
      user: App.Models.Users
      versions: {
        php: string
        laravel: string
      }
    }
  }
}
